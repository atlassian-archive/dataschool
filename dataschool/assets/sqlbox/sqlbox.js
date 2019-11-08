/*
Requires a variable

$.sqlboxSettings = {
  dbType: 'PostgreSQL', // name of the database type
  dbName: 'chinook2',   // name of the database you're connecting to
  action: 'http://localhost:8084' // location of sqlboxserver.
}

This logic handles setting up SQL boxes.  To use them use the Tag 'sqlbox' with the following optional attributes

answer              |  The correct SQL.  This is not matched character by character, but by the resultsets being the same
correct_message     |  The message to display when the result is correct.  Defaults to 'Correct!'
initial             |  The initial text to put in the text box
show_incorrect      |  A toggle as to whether you sould show that a result is not correct.  Defaults to "false".  Leave blank if you'd like false.
incorrect_message   |  The message displayed when the result is incorrect.  'show_incorrect' must also be set to true for this message to be displayed.  Defaults to "Not correct yet.  Keep trying!"
hint                |  An optional hint for the person.  Will display a button saying "show hint"
autorun             |  Automatically run the initial SQL on load
 */
var s;
(function ($) {
  var dataTableSettings = {
    pagination: true,
    icons: {
      paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
      paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
      refresh: 'glyphicon-refresh icon-refresh',
      toggle: 'glyphicon-list-alt icon-list-alt',
      columns: 'glyphicon-th icon-th',
      detailOpen: 'glyphicon-plus icon-plus',
      detailClose: 'glyphicon-minus icon-minus'
    },
    search: false,
  };
  var successImageURL = '/assets/sqlbox/sqlbox-checkedbox.png';
  var simg = $('<img style="display: none">'); // Preload the success image
  simg.attr('src', successImageURL);
  simg.appendTo('body');

  // fetched with sqlbox/getschemajson.py
  var schema = {
    "media_types": ["name", "id"],
    "customers": ["last_name", "postal_code", "state", "company", "id", "city", "country", "support_rep_id", "address", "fax", "phone", "email", "first_name"],
    "playlists": ["id", "name"],
    "invoices": ["billing_postal_code", "billing_state", "id", "billing_address", "billing_country", "total", "invoice_date", "customer_id", "billing_city"],
    "employees": ["title", "id", "fax", "first_name", "hire_date", "city", "address", "birth_date", "email", "reports_to", "phone", "country", "last_name", "state", "postal_code"],
    "tracks": ["name", "genre_id", "composer", "bytes", "unit_price", "milliseconds", "album_id", "id", "media_type_id"],
    "film_category": ["film_id", "last_update", "category_id"],
    "invoice_lines": ["invoice_id", "quantity", "id", "unit_price", "track_id"],
    "film_actor": ["last_update", "actor_id", "film_id"],
    "actors": ["last_name", "last_update", "id", "first_name"],
    "artists": ["name", "id"],
    "films": ["last_update", "title", "rating", "special_features", "language_id", "fulltext", "rental_duration", "length", "description", "rental_rate", "replacement_cost", "release_year", "id"],
    "albums": ["artist_id", "id", "title"],
    "playlist_track": ["track_id", "playlist_id"],
    "categories": ["name", "last_update", "id"],
    "genres": ["name", "id"]
  }

  // applies the style and listeners to a sqlbox
  function setUp(box) {
    var $box = $(box);
    box.answer = $box.attr('answer');
    box.correct_message = $box.attr('correct_message') || 'Correct!';
    box.initial = $box.attr('initial') || '';
    box.show_incorrect = $box.attr('show_incorrect') || '';
    box.incorrect_message = $box.attr('incorrect_message') || 'Not correct yet.  Keep trying!';
    box.hint = $box.attr('hint') || false;
    box.$textarea = $('textarea', box) || '';
    box.$textarea.text(box.initial); // set the initial text
    box.autorun = $box.attr('autorun') || false;

    // set settings Values
    $('form', box).attr('action', $.sqlboxSettings.action);
    $('input[name="dbtype"]', box).attr('value', $.sqlboxSettings.dbType)
    $('input[name="dbname"]', box).attr('value', $.sqlboxSettings.dbName)

    box.clearStatus = function () {
      $('form', this).removeClass('correct');
      $('form', this).removeClass('incorrect');
    };
    box.setStatus = function (status) {
      // Set the status to correct or incorrect
      this.status = status;
      if (status == 'correct') {
        $('form', box).addClass('correct');
        $('.result-message', box).text(this.correct_message).show();
        $('.answered-checkbox img', box).attr('src', successImageURL);
      } else if (status = 'incorrect' && this.show_incorrect) {
        $('form', this).addClass('incorrect');
        $('.result-message', this).text(this.incorrect_message).show();
      }
    };
    box.showHint = function (e) {
      e.preventDefault();
      $('.hint', box).text('Hint: ' + box.hint).show();
    };

    box.setupHint = function () {
      if (this.hint) {
        $('.hint', this).show();
        $('.hint .btn', this).click(this.showHint);
      }
    };
    box.setupHint();

    function sqlReturned(results) {
      box.clearStatus();
      if (results.sqlerror) {
        var error_template = $('<p class="sqlerror"><b>ERROR: </b><span class="error_message"></span><br/><a target="sql_error" class="error-help" href="../errors/">Help with Errors</a></p>');
        $('span.error_message', error_template).text(results.sqlerror);
        $('.result', box).html(error_template);
      } else {
        $('.result', box).html('<table></table>');
        results = $.extend(results, dataTableSettings);
        $('.result table', box).bootstrapTable(results);
      }
      box.setStatus((results.correct_data) ? "correct" : "incorrect");
      $('form', box).removeClass('loading');
    }
    // apply CodeMirror to the textarea
    CodeMirror.fromTextArea(box.$textarea[0], {
      theme: "midnight",
      mode: "text/x-pgsql",
      lineWrapping: true,
      hintOptions: {
        tables: schema
      }
    });
    // handle sending answer
    $('input[name="answer"]', box).attr("value", box.answer);
    // handle form submission
    $('form', box).on('submit', function (e) {
      e.preventDefault(); // prevent native submit
      $('form', box).addClass('loading');
      $('.result', box).html('');
      $(this).ajaxSubmit({
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: sqlReturned,
        error: function (data) {}
      })
    });

    if (box.answer) {
      $('.answered-checkbox', box).removeClass('noanswer');
    }
    if (box.autorun) {
      $('form', box).submit();
    }
  }

  $( window ).on("load", function() {

    $('sqlbox').load('/assets/sqlbox/sqlbox.html', function() {
      setUp(this);
    });
    // Tutorial Navbar Javascript
    $('.sql-categories .level-label').click(function (e) {
      e.preventDefault();
      $('ol', $(this).parent()).toggle();
    });

    /* Some SQL Tutorial specific Stuff below */

    // Show anchor links on all Hx's on hover.
    $("h2, h3, h4, h5, h6").each(function(i, el) {
      var $el, icon, id;
      $el = $(el);
      id = $el.attr('id');
      icon = '<i class="fa fa-link"></i>';
      if (id) {
        return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
      }
    });

    // Add anchor links to nav showing sections of the page
    if(window.location.href.indexOf("practice") == -1) {
      var l = $("<ul></ul>");
      $("h2, h3, h4").each(function(i, el) {
        var $el = $(el)
        var $a = $("a", $el)
        // parse anything with a ( in it or a dash
        var t = $el.text().split(' - ')[0].split('(')[0];
        var a = $("<a></a>").attr('href', $a.attr('href')).text(t);
        l.append($("<li></li>").append(a));
      });
      $('li.active').append(l);
    }
  });

  s = setUp;
})(jQuery);
