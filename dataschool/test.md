---
layout: base
---
<div class="flex-grow-1 d-flex flex-column">
    <nav class="navbar navbar-expand-md navbar-light bg-light navbar-expand-md">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="navbar-nav w-100">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
            <li class="nav-item ml-md-auto"><a href="https://themestr.app/" class="nav-link">Themestr.app</a></li>
        </ul>
    </nav>
    <!-- /bootstrap nav -->
    <div class="container-fluid">
        <!-- bootstrap nav -->
        <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto" id="content">
                <div class="row">
                    <div class="col-md pt-5">
                        <section id="buttons" class="pb-2">
                            <div class="row">
                                <div class="col-12">

                                    <!-- Breadcrumb -->
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Breadcrumb</li>
                                        </ol>
                                    </nav>

                                </div>
                                <div class="col-lg-4">
                                    <div class="pb-3">
                                        <button type="button" class="btn btn-primary mr-1">Button</button>
                                        <button type="button" class="btn btn-outline-primary">Outline</button>
                                    </div>
                                    <div class="pb-3">
                                        <!-- Large Button -->
                                        <button type="button" class="btn btn-primary align-bottom btn-lg mr-1">Large</button>

                                        <!-- Small Button -->
                                        <button type="button" class="btn btn-primary align-bottom btn-sm mr-1">Small</button>

                                        <!-- Link -->
                                        <a href="#">Text</a>
                                    </div>
                                </div>
                                <div class="col-lg-8 text-right">

                                    <!-- Button toolbar -->
                                    <div class="btn-toolbar d-inline-block mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group mr-2" role="group" aria-label="First group">
                                            <button type="button" class="btn btn-outline-primary">1</button>
                                            <button type="button" class="btn btn-primary">2</button>
                                            <button type="button" class="btn btn-primary">3</button>
                                            <button type="button" class="btn btn-primary">4</button>
                                        </div>
                                        <div class="btn-group mr-2" role="group" aria-label="Second group">
                                            <button type="button" class="btn btn-primary">5</button>
                                            <button type="button" class="btn btn-primary">6</button>
                                            <button type="button" class="btn btn-primary">7</button>
                                        </div>
                                        <div class="btn-group" role="group" aria-label="Third group">
                                            <button type="button" class="btn btn-primary">8</button>
                                        </div>
                                    </div>

                                    <!-- Dropdown Button -->
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-12 py-4">
                                    <button class="btn btn-primary mr-1 mb-1">Primary</button>
                                    <button class="btn btn-secondary mr-1 mb-1">Secondary</button>
                                    <button class="btn btn-info mr-1 mb-1">Info</button>
                                    <button class="btn btn-danger mr-1 mb-1">Danger</button>
                                    <button class="btn btn-success mr-1 mb-1">Success</button>
                                    <button class="btn btn-warning mr-1 mb-1">Warning</button>
                                    <button class="btn btn-light border mr-1 mb-1">Light</button>
                                    <button class="btn btn-dark mr-1 mb-1">Dark</button>
                                </div>
                            </div>
                        </section>

                        <section id="navs" class="py-3">
                            <div class="row">
                                <div class="col-lg-9 pb-4">

                                    <!-- Nav -->
                                    <ul class="nav">
                                        <li class="nav-item">
                                            <a class="nav-link pl-0" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled" href="#">Disabled</a>
                                        </li>
                                    </ul>
                                    <hr>

                                    <!-- Nav Tabs -->
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#tab1" data-toggle="tab">Tab</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#tab2" data-toggle="tab">Tab</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#tab3" data-toggle="tab">Tab</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled" href="#tab4" data-toggle="tab">Disabled</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content px-1 pt-2">
                                        <div class="tab-pane active" id="tab1">
                                            <p>
                                                Welcome to my custom Bootstrap 4 test page that is a simple way to see various Bootstrap component examples. Customize Bootstrap with <a href="https://themestr.app">Themestr.app</a>.
                                            </p>
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination">
                                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="tab-pane" id="tab2">2. Put a little content in your pane.</div>
                                        <div class="tab-pane" id="tab3">3. Put some more content in your pane here.</div>
                                    </div>
                                </div>
                                <div class="col-lg-3 pb-4">

                                    <!-- Vertical Nav -->
                                    <ul class="nav nav-pills flex-column mb-3">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#" data-toggle="popover" data-trigger="hover" data-placement="top" data-title="Primary color" data-content="Links and 'active' elements always use the primary color.">Active</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                    </ul>


                                    <!-- Dropdown Split Button -->
                                    <div class="btn-group mb-3">
                                        <button type="button" class="btn btn-primary btn-block">Split Dropdown</button>
                                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Link</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="cards" class="bg-faded py-2">
                            <div class="d-flex my-3">

                                <!-- Jumbotron -->
                                <div class="jumbotron w-100 py-5 mx-auto">
                                    <h1 class="display-3">Hello, world!</h1>
                                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-lg-4 mb-4">

                                    <!-- Card -->
                                    <div class="card border-primary h-100">
                                        <div class="card-body d-flex flex-column align-items-start">
                                            <h4 class="card-title text-primary">Card Outline</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content. This has text that may wrap to the next line.</p>
                                            <a href="#" class="btn btn-primary mt-auto">Button</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xl-6 col-lg-4 mb-4">
                                    <div class="card border-primary h-100">
                                        <div class="card-body">

                                            <!-- List Group -->
                                            <div class="list-group">
                                                <a href="#" class="list-group-item list-group-item-action active">List Group</a>
                                                <a href="#" class="list-group-item list-group-item-action">List item</a>
                                                <a href="#" class="list-group-item list-group-item-action">List item 2</a>
                                                <a href="#" class="list-group-item list-group-item-action disabled">List item 3</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-4 mb-4">
                                    <div class="card bg-primary text-white h-100">
                                        <div class="card-body d-flex flex-column align-items-start">
                                            <h4 class="card-title">Card</h4>
                                            <p class="card-text">Watch me scale, scale. Now watch me stack, stack. Watch me scale, scale...</p>
                                            <a href="#" class="btn btn-primary border-white mt-auto">Button</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h1>Heading 1</h1>
                            <h2>Heading 2</h2>
                            <h3>Heading 3</h3>
                            <h4>Heading 4</h4>
                            <h5>Heading 5</h5>
                        </section>

                        <section id="grid" class="py-3">
                            <p class="lead">The rows &amp; columns of the world famous Bootstrap grid speak for themselves.</p>
                            <div class="row">
                                <div class="col-sm-6">
                                    6
                                </div>
                                <div class="col-6">
                                    <div class="card my-1 bg-light">6</div>
                                </div>
                                <div class="col-sm-5">
                                    5
                                </div>
                                <div class="col-7">
                                    <div class="card my-1">7</div>
                                </div>
                                <div class="col-sm-4">
                                    4
                                </div>
                                <div class="col-8">
                                    <div class="card my-1">8</div>
                                </div>
                                <div class="col-sm-3">
                                    3
                                </div>
                                <div class="col-9">
                                    <div class="card my-1">9</div>
                                </div>
                                <div class="col-sm-2">
                                    2
                                </div>
                                <div class="col-10">
                                    <div class="card my-1">10</div>
                                </div>
                                <div class="col-sm-1">
                                    1
                                </div>
                                <div class="col-11">
                                    <div class="card my-1">11</div>
                                </div>
                            </div>
                        </section>

                        <section id="forms" class="py-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Forms and Inputs</h4>

                                    <!-- Form -->
                                    <form role="form">
                                        <div class="form-group row">
                                            <label class="col-md-2 col-form-label form-control-label text-muted">First</label>
                                            <div class="col-md-4">
                                                <input class="form-control" type="text" value="Jane">
                                            </div>
                                            <label class="col-md-1 col-form-label form-control-label text-muted">Last</label>
                                            <div class="col-md-5">
                                                <input class="form-control" type="text" value="Bishop">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label form-control-label text-muted">Address</label>
                                            <div class="col-lg-10">
                                                <input class="form-control" type="text" placeholder="Street">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label form-control-label text-muted"></label>
                                            <div class="col-lg-6">
                                                <input class="form-control" type="text" placeholder="City">
                                            </div>
                                            <div class="col-lg-4">
                                                <select class="form-control">
                                                    <option>State</option>
                                                    <option>AK</option>
                                                    <option>AZ</option>
                                                    <option>CA</option>
                                                    <option>CO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row was-validated">
                                            <label class="col-lg-2 col-form-label form-control-label text-muted">Username</label>
                                            <div class="col-lg-10">
                                                <input class="form-control" type="text" required="">
                                                <div class="invalid-feedback">
                                                    Username is required.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label form-control-label text-muted">Password</label>
                                            <div class="col-lg-10">
                                                <input class="form-control" type="password" value="11111122333">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label form-control-label"></label>
                                            <div class="col-lg-10">
                                                <input type="reset" class="btn btn-outline-secondary mr-2" value="Cancel">
                                                <input type="button" class="btn btn-primary mr-2" value="Submit">
                                                <div class="custom-control custom-checkbox d-inline">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" checked="">
                                                    <label class="custom-control-label" for="customCheck">Check me out</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </section>

                        <section id="more" class="py-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-sm">
                                            <tbody>
                                                <tr>
                                                    <th class="w-25">Location</th>
                                                    <th class="w-50">Date</th>
                                                    <th class="w-25">Visits</th>
                                                </tr>
                                                <tr>
                                                    <td>Westfield</td>
                                                    <td>08.05.18 <span class="badge badge-primary">badge</span></td>
                                                    <td>2323</td>
                                                </tr>
                                                <tr>
                                                    <td>Galway</td>
                                                    <td>08.05.18 <span class="badge badge-pill badge-primary">badge-pill</span></td>
                                                    <td>5362</td>
                                                </tr>
                                                <tr class="table-primary">
                                                    <td>Bern</td>
                                                    <td>08.05.18</td>
                                                    <td>153</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="w-100 my-4"></div>
                                <div class="col-md-12">
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-primary w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                </div>
                                <div class="col-md-12">

                                    <!-- Alert -->
                                    <div class="alert alert-primary alert-dismissable show fade" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <strong>Well done!</strong> You successfully read this important alert message.
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="container">
  <section id="typography" class="py-5">
      <div class="row">
          <div class="col-xl-4">
              <h6>Heading 6</h6>
              <h5>Heading 5</h5>
              <h4>Heading 4</h4>
              <h3 class="text-truncate">Heading 3</h3>
              <h2 class="text-truncate">Heading 2</h2>
              <h1 class="text-truncate">Heading 1</h1>
              <p class="lead">Lead</p>
              <p>Paragraph</p>
          </div>
          <div class="col-xl-8 text-right">
              <p class="display-4 text-truncate">Display 4</p>
              <p class="display-3 text-truncate">Display 3</p>
              <p class="display-2 text-truncate">Display 2</p>
              <p class="display-1 text-truncate">Display 1</p>
          </div>
      </div>
  </section>

  <section id="forms" class="py-3">
      <div class="row">
          <div class="col-md-12">
              <form role="form" class="ng-pristine ng-valid">
                  <div class="form-group row">
                      <label class="col-md-2 col-form-label form-control-label">First</label>
                      <div class="col-md-4">
                          <input class="form-control" type="text" value="Jane">
                      </div>
                      <label class="col-md-1 col-form-label form-control-label">Last</label>
                      <div class="col-md-5">
                          <input class="form-control" type="text" value="Doe">
                      </div>
                  </div>
                  <div class="form-group row">
                      <label class="col-lg-2 col-form-label form-control-label">Address</label>
                      <div class="col-lg-10">
                          <input class="form-control" type="text" placeholder="Street">
                      </div>
                  </div>
                  <div class="form-group row">
                      <label class="col-lg-2 col-form-label form-control-label"></label>
                      <div class="col-lg-6">
                          <input class="form-control" type="text" placeholder="City">
                      </div>
                      <div class="col-lg-4">
                          <select class="form-control">
                              <option value="State">State</option>
                              <option value="AK">AK</option>
                              <option value="AZ">AZ</option>
                              <option value="CA">CA</option>
                              <option value="CO">CO</option>
                          </select>
                      </div>
                  </div>
                  <div class="form-group row was-validated">
                      <label class="col-lg-2 col-form-label form-control-label">Username</label>
                      <div class="col-lg-10">
                          <input class="form-control" type="text" required="" id="un" name="un">
                          <div class="invalid-feedback">
                            Username is required.
                          </div>
                      </div>
                  </div>
                  <div class="form-group row">
                      <label class="col-lg-2 col-form-label form-control-label"></label>
                      <div class="col-lg-10">
                          <input type="reset" class="btn btn-outline-primary mr-2" value="Cancel">
                          <input type="button" class="btn btn-primary mr-2" value="Submit">
                          <div class="custom-control custom-checkbox d-inline">
                            <input type="checkbox" class="custom-control-input" id="customCheck" checked="">
                            <label class="custom-control-label" for="customCheck">Check me out</label>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </section>

  <section id="grid" class="py-3">
      <p class="lead">The rows &amp; columns of the world famous Bootstrap grid speak for themselves.</p>
      <div class="row">
          <div class="col-sm-6">
              6
          </div>
          <div class="col-6">
              <div class="card my-1 bg-primary">6</div>
          </div>
          <div class="col-sm-5">
              5
          </div>
          <div class="col-7">
              <div class="card my-1">7</div>
          </div>
          <div class="col-sm-4">
              4
          </div>
          <div class="col-8">
              <div class="card my-1">8</div>
          </div>
          <div class="col-sm-3">
              3
          </div>
          <div class="col-9">
              <div class="card my-1">9</div>
          </div>
          <div class="col-sm-2">
              2
          </div>
          <div class="col-10">
              <div class="card my-1">10</div>
          </div>
          <div class="col-sm-1">
              1
          </div>
          <div class="col-11">
              <div class="card my-1">11</div>
          </div>
      </div>
  </section>
  <section id="more" class="py-2">
      <div class="row">
          <div class="col-md-12">
              <div class="table-responsive">
                  <table class="table table-hover table-sm">
                      <tbody>
                          <tr>
                              <th class="w-25">Location</th>
                              <th class="w-50">Date</th>
                              <th class="w-25">Visits</th>
                          </tr>
                          <tr>
                              <td>Westfield</td>
                              <td>08.05.18 <span class="badge badge-primary">badge</span></td>
                              <td>2323</td>
                          </tr>
                          <tr>
                              <td>Galway</td>
                              <td>08.05.18 <span class="badge badge-pill badge-primary">badge-pill</span></td>
                              <td>5362</td>
                          </tr>
                          <tr class="table-primary">
                              <td>Bern</td>
                              <td>08.05.18</td>
                              <td>153</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="w-100 my-4"></div>
          <div class="col-md-6">
              <a href="#" class="text-primary" data-toggle="tooltip" data-placement="right" title="" data-original-title="This tooltip is on the right.">Right tooltip (hover)</a>
              <br>
              <a href="#" class="text-primary" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This tooltip is on the bottom.">Bottom tooltip (hover)</a>
              <br>
          </div>
          <div class="col-md-6 text-right">
              <button type="button" class="btn btn-lg btn-primary" data-toggle="popover" title="" data-placement="left" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Toggle my popover</button>
          </div>
          <div class="w-100 my-4"></div>
          <div class="col-md-12">
              <div class="progress mb-2">
                  <div class="progress-bar bg-primary w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
              </div>
          </div>
          <div class="col-md-12">
              <div class="alert alert-primary alert-dismissable show fade" role="alert" style="display: none;">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
                  <strong>Whoot!</strong> You successfully read this important alert message.
              </div>
          </div>
          <div class="w-100 my-4"></div>
      </div>
  </section>

  <section id="buttons" class="pb-2">
      <div class="row">
          <div class="col-12 text-primary">
              <span class="d-inline-block text-capitalize h2 ng-binding" data-ng-bind="selected.color">primary</span>
              <span class="d-inline-block text-uppercase ng-binding" data-ng-bind="selected.palette.colors[selected.color]">#2f3c48</span>
              <span class="d-inline-block h6 ng-binding" data-ng-bind="selected.palette.fonts.headings" title="Current font">Current Font</span>
          </div>
          <div class="col-md-8">
              <div class="pb-3">
                  <button type="button" class="btn btn-primary mr-1">Button</button>
                  <button type="button" class="btn btn-outline-primary">Outline</button>
              </div>
              <div class="pb-3">
                  <button type="button" class="btn btn-primary align-bottom btn-lg mr-1">Large</button>
                  <button type="button" class="btn btn-primary align-bottom mr-1">Normal</button>
                  <button type="button" class="btn btn-primary align-bottom btn-sm mr-1">Small</button>
                  <a href="#" class="text-primary">Text</a>
              </div>
          </div>
          <div class="col-md-4 text-right">

          </div>
          <div class="col-12">
              <div class="d-none d-sm-block font-weight-light">The elements and content on this page are for demonstration only.</div>
          </div>
      </div>
  </section>
  <section>
      <div class="row justify-content-between mx-4" title="Example fontawesome icons">
          <div class="col-auto ">
              <h2><i class="far fa-heart icon-heart lnr lnr-heart ion-ios-heart-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="far fa-star icon-star lnr lnr-star ion-ios-star-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="fa fa-home icon-home lnr lnr-home ion-ios-home-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="fa fa-cog icon-settings lnr lnr-cog ion-ios-settings-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="fa fa-user icon-user lnr lnr-user ion-ios-contact-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="fa fa-calendar-alt icon-calendar lnr lnr-calendar-full ion-ios-calendar-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="fa fa-chevron-right icon-arrow-right lnr lnr-chevron-right ion-ios-arrow-forward"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="far fa-compass icon-compass lnr lnr-cross ion-ios-compass-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="fa fa-map-marker-alt icon-location-pin lnr lnr-map-marker ion-ios-pin-outline"></i></h2>
          </div>
          <div class="col-auto">
              <h2><i class="far fa-bookmark icon-badge lnr lnr-bookmark ion-ios-bookmark-outline"></i></h2>
          </div>
      </div>
  </section>
  <section id="navs" class="py-3">
      <div class="row">
          <div class="col-xl-9 pb-4">
              <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-2">
                  <a class="navbar-brand ng-binding" href="#">Light text on bg-primary</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarColor02">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#" title="Current breakpoint tier">
                                  Tier     
                                  <span class="d-xl-inline d-none">XL</span>
                                  <span class="d-lg-inline d-xl-none d-none">LG</span>
                                  <span class="d-md-inline d-lg-none d-none">MD</span>
                                  <span class="d-sm-inline d-md-none d-none">SM</span>
                                  <span class="d-inline d-sm-none">XS</span>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">About</a>
                          </li>
                      </ul>
                  </div>
              </nav>
              <nav class="navbar navbar-expand-md navbar-light bg-primary mb-3">
                  <a class="navbar-brand ng-binding" href="#">Dark text on bg-primary</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarColor03">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#">Link</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Demo</a>
                          </li>
                      </ul>
                  </div>
              </nav>
              <hr>

              <ul class="nav nav-tabs">
                  <li class="nav-item">
                      <a class="nav-link active" href="#tab1" data-toggle="tab">Tab</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#tab2" data-toggle="tab">Tab</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#tab3" data-toggle="tab">Tab</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link disabled" href="#tab4" data-toggle="tab">Disabled</a>
                  </li>
              </ul>
              <div class="tab-content px-1 pt-3">
                  <div class="tab-pane active" id="tab1">
                      <p class="lead">Bootstrap</p>
                      Select a palette, change the <span class="text-primary toggles-ignore">primary</span>, <span class="text-secondary toggles-ignore">secondary</span>,
                      <span class="text-success toggles-ignore">success</span>, <span class="text-danger toggles-ignore">danger</span>,
                      <span class="text-info toggles-ignore">info</span>, and <span class="text-warning toggles-ignore">warning</span> colors.
                      Choose from various Google Fonts, and modify most of the Bootstrap SASS variables. Click to generate your completely custom
                      Bootstrap theme.
                  </div>
                  <div class="tab-pane" id="tab2">
                      The whole idea of this tool is to make the Bootstrap customization process easier, and allow you to visualize changes along the way.
                      For most users it's designed to be point-and-click, while advanced users can delve into the SASS as desired. It's a 4-step process.
                  </div>
                  <div class="tab-pane" id="tab3">
                      To know Bootstrap, is to know that there are a ton of SASS variables. Changing these variables is the very core of Bootstrap customization.
                      Even if you don't have any experience with SASS, you can use this to easily generate the CSS for your custom theme.
                  </div>
              </div>
          </div>
          <div class="col-xl-3 pb-4">
              <ul class="nav nav-pills flex-column mb-3">
                  <li class="nav-item">
                      <a class="nav-link active" href="#" data-toggle="popover" data-trigger="hover" data-placement="top" data-title="Primary color" data-content="Links and 'active' elements always use the primary color." data-original-title="" title="">Active</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
              </ul>

              <div class="btn-group mb-3 w-100">
                  <button type="button" class="btn btn-primary btn-block">Dropdown</button>
                  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Link</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section id="cards" class="py-2">
      <div class="d-flex my-3">
          <div class="jumbotron w-100 py-5 mx-auto">
              <h1>Bootstrap Theme Builder</h1>
              <p class="lead">
                  Rapidy build custom themes for Bootstrap, the world's most
                  popular front-end component library for mobile-first,
                  responsive Web apps.
              </p>
              <p class="lead">
                  This is a customizer and theme builder for Bootstrap. Choose from
                  a huge collection of <strong>color palettes, fonts</strong> and SASS
                  <strong>variables</strong>. Prototype different styles, and easily generate CSS from SASS to give
                  your Bootstrap projects a unique look-and-feel.
              </p>
          </div>
      </div>
      <div class="row">
          <div class="col-xl-6 col-lg-4 mb-4">
              <div class="card border-primary h-100">
                  <div class="card-body d-flex flex-column align-items-start">
                      <h4 class="card-title text-primary ng-binding" ng-bind="'Font ' + selected.palette.fonts.headings">Font Open Sans</h4>
                      <p class="card-text">Fonts are obviously another huge factor in making all Bootstrap sites look the same. Bootstrap 4's native font family is Roboto.</p>
                      <a href="#" class="btn btn-primary mt-auto">Font</a>
                  </div>
              </div>
          </div>
          <div class="col-xl-6 col-lg-4 mb-4">
              <div class="card border-primary h-100">
                  <div class="card-body">
                      <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active">Colors</a>
                        <a href="#" class="list-group-item list-group-item-action">Fonts</a>
                        <a href="#" class="list-group-item list-group-item-action">SASS Variables</a>
                        <a href="#" class="list-group-item list-group-item-action disabled">Download</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-xl-12 col-lg-4 mb-4">
              <div class="card bg-primary text-white h-100">
                  <div class="card-body d-flex flex-column align-items-start">
                      <h4 class="card-title">Theme vs. Template</h4>
                      <p class="card-text">In context, "Theme" refers to the style layer or "skin". The "Theme" encompasses colors, fonts and style. A "Template" refers to a page layout and its' HTML structure.</p>
                      <a href="#" class="btn btn-primary border-white mt-auto">Button</a>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section id="modals" class="py-2">
      <div class="row">
          <div class="col-md-12">
              <div class="container-fluid">
                  <div id="myModal" class="modal d-block alert alert-dismissable" tabindex="-1" role="dialog" aria-hidden="true" style="position: relative; z-index: 1000; display: none;">
                      <!-- this modal uses an alert dismiss hack for demo only - normally data-dismiss="modal" is used -->
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h3>Modals</h3>
                                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                              </div>
                              <div class="modal-body">
                                  <p>This is a Bootstrap 4 modal. The modal also comes in a <a href="#modal-sm" data-toggle="modal">smaller</a> and <a href="#modal-lg" data-toggle="modal">larger</a> sizes.</p>
                                  <p>
                                      The custom font can be set as the "base" font family <code>$font-family-base</code> for the entire theme.
                                      But, in most cases you'll only want the custom font applied to headings <code>$headings-font-family</code>,
                                      and keep the very readable default fonts for smaller text.
                                  </p>
                              </div>
                              <div class="modal-footer">
                                  <button class="btn" data-dismiss="alert" aria-hidden="true">Close</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div class="col-md-9"></div>
      </div>
  </section>



  <h2 class="h4 py-4">
      Get more Bootstrap 4 examples &amp; templates at <a href="http://themes.guide">Themes.guide</a>
  </h2>
  </div>
</div>
