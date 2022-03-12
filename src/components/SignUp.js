import React from "react";

const Dashboard = () => {
  return(
    <>
    

    <div class="am-header">
      <div class="am-header-left">
        <a id="naviconLeft" href="#" class="am-navicon d-none d-lg-flex"><i class="icon ion-navicon-round"></i></a>
        <a id="naviconLeftMobile" href="#" class="am-navicon d-lg-none"><i class="icon ion-navicon-round"></i></a>
        <a href="index.html" class="am-logo">amanda</a>
      </div>

      <div class="am-header-right">
        <div class="dropdown dropdown-notification">
          <a href="#" class="nav-link pd-x-7 pos-relative" data-toggle="dropdown">
            <i class="icon ion-ios-bell-outline tx-24"></i>
            <span class="square-8 bg-danger pos-absolute t-15 r-0 rounded-circle"></span>
          </a>
          <div class="dropdown-menu wd-300 pd-0-force">
            <div class="dropdown-menu-header">
              <label>Notifications</label>
              <a href="#">Mark All as Read</a>
            </div>

            <div class="media-list">
              <a href="#" class="media-list-link read">
                <div class="media pd-x-20 pd-y-15">
                  <img src="../img/img8.jpg" class="wd-40 rounded-circle" alt=""/>
                  <div class="media-body">
                    <p class="tx-13 mg-b-0"><strong class="tx-medium">Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
                    <span class="tx-12">October 03, 2017 8:45am</span>
                  </div>
                </div>
              </a>
              <a href="#" class="media-list-link read">
                <div class="media pd-x-20 pd-y-15">
                  <img src="../img/img9.jpg" class="wd-40 rounded-circle" alt=""/>
                  <div class="media-body">
                    <p class="tx-13 mg-b-0"><strong class="tx-medium">Mellisa Brown</strong> appreciated your work <strong class="tx-medium">The Social Network</strong></p>
                    <span class="tx-12">October 02, 2017 12:44am</span>
                  </div>
                </div>
              </a>
              <a href="#" class="media-list-link read">
                <div class="media pd-x-20 pd-y-15">
                  <img src="../img/img10.jpg" class="wd-40 rounded-circle" alt=""/>
                  <div class="media-body">
                    <p class="tx-13 mg-b-0">20+ new items added are for sale in your <strong class="tx-medium">Sale Group</strong></p>
                    <span class="tx-12">October 01, 2017 10:20pm</span>
                  </div>
                </div>
              </a>
              <a href="#" class="media-list-link read">
                <div class="media pd-x-20 pd-y-15">
                  <img src="../img/img5.jpg" class="wd-40 rounded-circle" alt=""/>
                  <div class="media-body">
                    <p class="tx-13 mg-b-0"><strong class="tx-medium">Julius Erving</strong> wants to connect with you on your conversation with <strong class="tx-medium">Ronnie Mara</strong></p>
                    <span class="tx-12">October 01, 2017 6:08pm</span>
                  </div>
                </div>
              </a>
              <div class="media-list-footer">
                <a href="#" class="tx-12"><i class="fa fa-angle-down mg-r-5"></i> Show All Notifications</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-profile">
          <a href="#" class="nav-link nav-link-profile" data-toggle="dropdown">
            <img src="../img/img3.jpg" class="wd-32 rounded-circle" alt=""/>
            <span class="logged-name"><span class="hidden-xs-down">Jane Doe</span> <i class="fa fa-angle-down mg-l-3"></i></span>
          </a>
          <div class="dropdown-menu wd-200">
            <ul class="list-unstyled user-profile-nav">
              <li><a href="#"><i class="icon ion-ios-person-outline"></i> Edit Profile</a></li>
              <li><a href="#"><i class="icon ion-ios-gear-outline"></i> Settings</a></li>
              <li><a href="#"><i class="icon ion-ios-download-outline"></i> Downloads</a></li>
              <li><a href="#"><i class="icon ion-ios-star-outline"></i> Favorites</a></li>
              <li><a href="#"><i class="icon ion-ios-folder-outline"></i> Collections</a></li>
              <li><a href="#"><i class="icon ion-power"></i> Sign Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="am-sideleft">
      <ul class="nav am-sideleft-tab">
        <li class="nav-item">
          <a href="#mainMenu" class="nav-link active"><i class="icon ion-ios-home-outline tx-24"></i></a>
        </li>
        <li class="nav-item">
          <a href="#emailMenu" class="nav-link"><i class="icon ion-ios-email-outline tx-24"></i></a>
        </li>
        <li class="nav-item">
          <a href="#chatMenu" class="nav-link"><i class="icon ion-ios-chatboxes-outline tx-24"></i></a>
        </li>
        <li class="nav-item">
          <a href="#settingMenu" class="nav-link"><i class="icon ion-ios-gear-outline tx-24"></i></a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="mainMenu" class="tab-pane active">
          <ul class="nav am-sideleft-menu">
            <li class="nav-item">
              <a href="index.html" class="nav-link">
                <i class="icon ion-ios-home-outline"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link with-sub">
                <i class="icon ion-ios-gear-outline"></i>
                <span>Forms</span>
              </a>
              <ul class="nav-sub">
                <li class="nav-item"><a href="form-elements.html" class="nav-link">Form Elements</a></li>
                <li class="nav-item"><a href="form-layouts.html" class="nav-link">Form Layouts</a></li>
                <li class="nav-item"><a href="form-validation.html" class="nav-link">Form Validation</a></li>
                <li class="nav-item"><a href="form-wizards.html" class="nav-link">Form Wizards</a></li>
                <li class="nav-item"><a href="form-editor-text.html" class="nav-link">Text Editor</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link with-sub active show-sub">
                <i class="icon ion-ios-filing-outline"></i>
                <span>UI Elements</span>
              </a>
              <ul class="nav-sub">
                <li class="nav-item"><a href="accordion.html" class="nav-link">Accordion</a></li>
                <li class="nav-item"><a href="alerts.html" class="nav-link">Alerts</a></li>
                <li class="nav-item"><a href="buttons.html" class="nav-link active">Buttons</a></li>
                <li class="nav-item"><a href="cards.html" class="nav-link">Cards</a></li>
                <li class="nav-item"><a href="icons.html" class="nav-link">Icons</a></li>
                <li class="nav-item"><a href="modal.html" class="nav-link">Modal</a></li>
                <li class="nav-item"><a href="navigation.html" class="nav-link">Navigation</a></li>
                <li class="nav-item"><a href="pagination.html" class="nav-link">Pagination</a></li>
                <li class="nav-item"><a href="popups.html" class="nav-link">Tooltip &amp; Popover</a></li>
                <li class="nav-item"><a href="progress.html" class="nav-link">Progress</a></li>
                <li class="nav-item"><a href="spinners.html" class="nav-link">Spinners</a></li>
                <li class="nav-item"><a href="typography.html" class="nav-link">Typography</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link with-sub">
                <i class="icon ion-ios-analytics-outline"></i>
                <span>Charts</span>
              </a>
              <ul class="nav-sub">
                <li class="nav-item"><a href="chart-morris.html" class="nav-link">Morris Charts</a></li>
                <li class="nav-item"><a href="chart-flot.html" class="nav-link">Flot Charts</a></li>
                <li class="nav-item"><a href="chart-chartjs.html" class="nav-link">Chart JS</a></li>
                <li class="nav-item"><a href="chart-rickshaw.html" class="nav-link">Rickshaw</a></li>
                <li class="nav-item"><a href="chart-sparkline.html" class="nav-link">Sparkline</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link with-sub">
                <i class="icon ion-ios-navigate-outline"></i>
                <span>Maps</span>
              </a>
              <ul class="nav-sub">
                <li class="nav-item"><a href="map-google.html" class="nav-link">Google Maps</a></li>
                <li class="nav-item"><a href="map-vector.html" class="nav-link">Vector Maps</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link with-sub">
                <i class="icon ion-ios-list-outline"></i>
                <span>Tables</span>
              </a>
              <ul class="nav-sub">
                <li class="nav-item"><a href="table-basic.html" class="nav-link">Basic Table</a></li>
                <li class="nav-item"><a href="table-datatable.html" class="nav-link">Data Table</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link with-sub">
                <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Pages</span>
              </a>
              <ul class="nav-sub">
                <li class="nav-item"><a href="blank.html" class="nav-link">Blank Page</a></li>
                <li class="nav-item"><a href="page-signin.html" class="nav-link">Signin Page</a></li>
                <li class="nav-item"><a href="page-signup.html" class="nav-link">Signup Page</a></li>
                <li class="nav-item"><a href="page-notfound.html" class="nav-link">404 Page Not Found</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="widgets.html" class="nav-link">
                <i class="icon ion-ios-briefcase-outline"></i>
                <span>Widgets</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="emailMenu" class="tab-pane">
          <div class="pd-x-20 pd-y-10">
            <a href="#" class="btn btn-orange btn-block btn-compose">Compose Email</a>
          </div>
          <ul class="nav am-sideleft-menu">
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-filing-outline"></i>
                <span>Inbox</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-filing-outline"></i>
                <span>Drafts</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-paperplane-outline"></i>
                <span>Sent</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-trash-outline"></i>
                <span>Trash</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-filing-outline"></i>
                <span>Spam</span>
              </a>
            </li>
          </ul>

          <label class="pd-x-20 tx-uppercase tx-11 mg-t-10 tx-orange mg-b-0 tx-medium">My Folder</label>
          <ul class="nav am-sideleft-menu">
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-folder-outline"></i>
                <span>Updates</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-folder-outline"></i>
                <span>Social</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="page-inbox.html" class="nav-link">
                <i class="icon ion-ios-folder-outline"></i>
                <span>Promotions</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="chatMenu" class="tab-pane">
          <div class="chat-search-bar">
            <input type="search" class="form-control wd-150" placeholder="Search chat..."/>
            <button class="btn btn-secondary"><i class="fa fa-search"></i></button>
          </div>

          <label class="pd-x-15 tx-uppercase tx-11 mg-t-20 tx-orange mg-b-10 tx-medium">Recent Chat History</label>
          <div class="list-group list-group-chat">
            <a href="#" class="list-group-item">
              <div class="d-flex align-items-center">
                <img src="../img/img6.jpg" class="wd-32 rounded-circle" alt=""/>
                <div class="mg-l-10">
                  <h6>Russell M. Evans</h6>
                  <span>Tuesday, 10:33am</span>
                </div>
              </div>
              <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain...</p>
            </a>
            <a href="#" class="list-group-item">
              <div class="d-flex align-items-center">
                <img src="../img/img7.jpg" class="wd-32 rounded-circle" alt=""/>
                <div class="mg-l-10">
                  <h6>James F. Sears</h6>
                  <span>Monday, 4:21pm</span>
                </div>
              </div>
              <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has...</p>
            </a>
            <a href="#" class="list-group-item">
              <div class="d-flex align-items-center">
                <img src="../img/img8.jpg" class="wd-32 rounded-circle" alt=""/>
                <div class="mg-l-10">
                  <h6>Sharon R. Rowe</h6>
                  <span>Sunday, 7:45pm</span>
                </div>
              </div>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
            </a>
            <a href="#" class="list-group-item">
              <div class="d-flex align-items-center">
                <img src="../img/img9.jpg" class="wd-32 rounded-circle" alt=""/>
                <div class="mg-l-10">
                  <h6>Ruby M. Martin</h6>
                  <span>Sunday, 7:45pm</span>
                </div>
              </div>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
            </a>
            <a href="#" class="list-group-item">
              <div class="d-flex align-items-center">
                <img src="../img/img10.jpg" class="wd-32 rounded-circle" alt=""/>
                <div class="mg-l-10">
                  <h6>Joslyn C. Mayo</h6>
                  <span>Sunday, 7:45pm</span>
                </div>
              </div>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
            </a>
          </div>
          <span class="d-block pd-15 tx-12">Loading messages...</span>

        </div>
        <div id="settingMenu" class="tab-pane">
          <div class="pd-x-15">
            <label class="tx-uppercase tx-11 mg-t-10 tx-orange mg-b-15 tx-medium">Quick Settings</label>
            <div class="bd pd-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Daily Newsletter</h6>
              <p class="tx-12">Get notified when someone else is trying to access your account.</p>
              <div class="toggle toggle-light warning"></div>
            </div>

            <div class="bd pd-15 mg-t-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Call Phones</h6>
              <p class="tx-12">Make calls to friends and family right from your account.</p>
              <div class="toggle toggle-light warning"></div>
            </div>

            <div class="bd pd-15 mg-t-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Login Notifications</h6>
              <p class="tx-12">Get notified when someone else is trying to access your account.</p>
              <div class="toggle toggle-light warning"></div>
            </div>

            <div class="bd pd-15 mg-t-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Phone Approvals</h6>
              <p class="tx-12">Use your phone when login as an extra layer of security.</p>
              <div class="toggle toggle-light warning"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="am-pagetitle">
      <h5 class="am-title">Buttons</h5>
      <form id="searchBar" class="search-bar" action="http://themepixels.me/demo/amanda/app/index.html">
        <div class="form-control-wrapper">
          <input type="search" class="form-control bd-0" placeholder="Search..."/>
        </div>
        <button id="searchBtn" class="btn btn-orange"><i class="fa fa-search"></i></button>
      </form>
    </div>

    <div class="am-mainpanel">
      <div class="am-pagebody">

        <div class="card pd-20 pd-sm-40">
          <h6 class="card-body-title">Basic Buttons</h6>
          <p class="mg-b-20 mg-sm-b-30">Twelve predefined button styles, each serving its own semantic purpose.</p>

          <div class="row">
            <div class="col-sm-6 col-md-3">
              <div class="btn-demo">
                <button class="btn btn-primary btn-block mg-b-10">Primary</button>
                <button class="btn btn-primary active btn-block mg-b-10">Active</button>
                <button class="btn btn-primary disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
              <div class="btn-demo">
                <button class="btn btn-secondary btn-block mg-b-10">Secondary</button>
                <button class="btn btn-secondary active btn-block mg-b-10">Active</button>
                <button class="btn btn-secondary disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
              <div class="btn-demo">
                <button class="btn btn-success btn-block mg-b-10">Success</button>
                <button class="btn btn-success active btn-block mg-b-10">Active</button>
                <button class="btn btn-success disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
              <div class="btn-demo">
                <button class="btn btn-warning btn-block mg-b-10">Warning</button>
                <button class="btn btn-warning active btn-block mg-b-10">Active</button>
                <button class="btn btn-warning disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <div class="btn-demo">
                <button class="btn btn-danger btn-block mg-b-10">Danger</button>
                <button class="btn btn-danger active btn-block mg-b-10">Active</button>
                <button class="btn btn-danger disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <button class="btn btn-info btn-block mg-b-10">Info</button>
              <button class="btn btn-info active btn-block mg-b-10">Active</button>
              <button class="btn btn-info disabled btn-block mg-b-10">Disabled</button>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <button class="btn btn-indigo btn-block mg-b-10">Indigo</button>
              <button class="btn btn-indigo active btn-block mg-b-10">Active</button>
              <button class="btn btn-indigo disabled btn-block mg-b-10">Disabled</button>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <button class="btn btn-purple btn-block mg-b-10">Purple</button>
              <button class="btn btn-purple active btn-block mg-b-10">Active</button>
              <button class="btn btn-purple disabled btn-block mg-b-10">Disabled</button>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <button class="btn btn-pink btn-block mg-b-10">Pink</button>
              <button class="btn btn-pink active btn-block mg-b-10">Active</button>
              <button class="btn btn-pink disabled btn-block mg-b-10">Disabled</button>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <button class="btn btn-teal btn-block mg-b-10">Teal</button>
              <button class="btn btn-teal active btn-block mg-b-10">Active</button>
              <button class="btn btn-teal disabled btn-block mg-b-10">Disabled</button>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-50">
              <button class="btn btn-dark btn-block mg-b-10">Dark</button>
              <button class="btn btn-dark active btn-block mg-b-10">Active</button>
              <button class="btn btn-dark disabled btn-block mg-b-10">Disabled</button>
            </div>
          </div>
        </div>

        <p class="tx-11 tx-uppercase tx-spacing-2 mg-t-40 mg-b-10 tx-gray-600">Source Code</p>
        <pre><code class="html pd-20">&lt;button class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;btn btn-primary active&quot;&gt;Active&lt;/button&gt;
&lt;button class=&quot;btn btn-primary disabled&quot;&gt;Disabled&lt;/button&gt;</code></pre>

        <div class="card pd-20 pd-sm-40 mg-t-50">
          <h6 class="card-body-title">Outline Buttons</h6>
          <p class="mg-b-20 mg-sm-b-30">Twelve predefined outline button styles, each serving its own semantic purpose.</p>

          <div class="row">
            <div class="col-sm-6 col-md-3">
              <div class="btn-demo">
                <button class="btn btn-outline-primary btn-block mg-b-10">Primary</button>
                <button class="btn btn-outline-primary active btn-block mg-b-10">Active</button>
                <button class="btn btn-outline-primary disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
              <div class="btn-demo">
                <button class="btn btn-outline-secondary btn-block mg-b-10">Secondary</button>
                <button class="btn btn-outline-secondary active btn-block mg-b-10">Active</button>
                <button class="btn btn-outline-secondary disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
              <div class="btn-demo">
                <button class="btn btn-outline-success btn-block mg-b-10">Success</button>
                <button class="btn btn-outline-success active btn-block mg-b-10">Active</button>
                <button class="btn btn-outline-success disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
              <div class="btn-demo">
                <button class="btn btn-outline-warning btn-block mg-b-10">Warning</button>
                <button class="btn btn-outline-warning active btn-block mg-b-10">Active</button>
                <button class="btn btn-outline-warning disabled btn-block mg-b-10">Disabled</button>
              </div>
            </div>
          </div>
          <p class="mg-t-20 mg-b-0">Available in all colors same with the button above.</p>
        </div>

        <div class="card pd-20 pd-sm-40 mg-t-25">
          <h6 class="card-body-title">Buttons With Icons</h6>
          <p class="mg-b-20 mg-sm-b-30">A button variant for basic and outline buttons with additional icons.</p>

          <div class="row">
            <div class="col-sm-6 col-md-3">
              <button class="btn btn-primary btn-block mg-b-10"><i class="fa fa-send mg-r-10"></i> Send Message</button>
              <button class="btn btn-outline-primary btn-block"><i class="fa fa-send mg-r-10"></i> Send Message</button>
            </div>
            <div class="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
              <button class="btn btn-warning btn-block mg-b-10"><i class="fa fa-shopping-cart mg-r-10"></i> Add to Cart</button>
              <button class="btn btn-outline-warning btn-block"><i class="fa fa-shopping-cart mg-r-10"></i> Add to Cart</button>
            </div>
            <div class="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
              <button class="btn btn-success btn-block mg-b-10"><i class="fa fa-download mg-r-10"></i> Download</button>
              <button class="btn btn-outline-success btn-block"><i class="fa fa-download mg-r-10"></i> Download</button>
            </div>
            <div class="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
              <button class="btn btn-danger btn-block mg-b-10"><i class="fa fa-envelope mg-r-10"></i> Compose</button>
              <button class="btn btn-outline-danger btn-block"><i class="fa fa-envelope mg-r-10"></i> Compose</button>
            </div>
          </div>
        </div>

        <div class="card pd-20 pd-sm-40 mg-t-25">
          <h6 class="card-body-title">Icon Only Buttons</h6>
          <p class="mg-b-20 mg-sm-b-30">A button variant for using only icons.</p>

          <div class="row">
            <div class="col-md-6">
              <a href="#" class="btn btn-primary btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-send"></i></div></a>
              <a href="#" class="btn btn-danger btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-envelope-o"></i></div></a>
              <a href="#" class="btn btn-dark btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-cog"></i></div></a>
              <a href="#" class="btn btn-warning btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-feed"></i></div></a>
              <a href="#" class="btn btn-success btn-icon mg-b-10"><div><i class="fa fa-share-alt"></i></div></a>
              <br/>
              <a href="#" class="btn btn-outline-primary btn-icon mg-r-5"><div><i class="fa fa-send"></i></div></a>
              <a href="#" class="btn btn-outline-danger btn-icon mg-r-5"><div><i class="fa fa-envelope-o"></i></div></a>
              <a href="#" class="btn btn-outline-dark btn-icon mg-r-5"><div><i class="fa fa-cog"></i></div></a>
              <a href="#" class="btn btn-outline-warning btn-icon mg-r-5"><div><i class="fa fa-feed"></i></div></a>
              <a href="#" class="btn btn-outline-success btn-icon"><div><i class="fa fa-share-alt"></i></div></a>
            </div>
            <div class="col-md-6 mg-t-10 mg-md-t-0">
              <a href="#" class="btn btn-primary btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-facebook"></i></div></a>
              <a href="#" class="btn btn-info btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-twitter"></i></div></a>
              <a href="#" class="btn btn-danger btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-google-plus"></i></div></a>
              <a href="#" class="btn btn-dark btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-codepen"></i></div></a>
              <a href="#" class="btn btn-warning btn-icon mg-r-5 mg-b-10"><div><i class="fa fa-stack-overflow"></i></div></a>
              <br/>
              <a href="#" class="btn btn-outline-primary btn-icon mg-r-5"><div><i class="fa fa-facebook"></i></div></a>
              <a href="#" class="btn btn-outline-info btn-icon mg-r-5"><div><i class="fa fa-twitter"></i></div></a>
              <a href="#" class="btn btn-outline-danger btn-icon mg-r-5"><div><i class="fa fa-google-plus"></i></div></a>
              <a href="#" class="btn btn-outline-dark btn-icon mg-r-5"><div><i class="fa fa-codepen"></i></div></a>
              <a href="#" class="btn btn-outline-warning btn-icon mg-r-5"><div><i class="fa fa-stack-overflow"></i></div></a>
            </div>
          </div>

          <div class="row mg-t-40">
            <div class="col-md-6">
              <a href="#" class="btn btn-primary btn-icon rounded-circle mg-r-5 mg-b-10">
                <div><i class="fa fa-send"></i></div>
              </a>
              <a href="#" class="btn btn-danger btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-envelope-o"></i></div></a>
              <a href="#" class="btn btn-dark btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-cog"></i></div></a>
              <a href="#" class="btn btn-warning btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-feed"></i></div></a>
              <a href="#" class="btn btn-success btn-icon rounded-circle mg-b-10"><div><i class="fa fa-share-alt"></i></div></a>
              <br/>
              <a href="#" class="btn btn-outline-primary btn-icon rounded-circle mg-r-5"><div><i class="fa fa-send"></i></div></a>
              <a href="#" class="btn btn-outline-danger btn-icon rounded-circle mg-r-5"><div><i class="fa fa-envelope-o"></i></div></a>
              <a href="#" class="btn btn-outline-dark btn-icon rounded-circle mg-r-5"><div><i class="fa fa-cog"></i></div></a>
              <a href="#" class="btn btn-outline-warning btn-icon rounded-circle mg-r-5"><div><i class="fa fa-feed"></i></div></a>
              <a href="#" class="btn btn-outline-success btn-icon rounded-circle"><div><i class="fa fa-share-alt"></i></div></a>
            </div>
            <div class="col-md-6 mg-t-10 mg-md-t-0">
              <a href="#" class="btn btn-primary btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-facebook"></i></div></a>
              <a href="#" class="btn btn-info btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-twitter"></i></div></a>
              <a href="#" class="btn btn-danger btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-google-plus"></i></div></a>
              <a href="#" class="btn btn-dark btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-codepen"></i></div></a>
              <a href="#" class="btn btn-warning btn-icon rounded-circle mg-r-5 mg-b-10"><div><i class="fa fa-stack-overflow"></i></div></a>
              <br/>
              <a href="#" class="btn btn-outline-primary btn-icon rounded-circle mg-r-5"><div><i class="fa fa-facebook"></i></div></a>
              <a href="#" class="btn btn-outline-info btn-icon rounded-circle mg-r-5"><div><i class="fa fa-twitter"></i></div></a>
              <a href="#" class="btn btn-outline-danger btn-icon rounded-circle mg-r-5"><div><i class="fa fa-google-plus"></i></div></a>
              <a href="#" class="btn btn-outline-dark btn-icon rounded-circle mg-r-5"><div><i class="fa fa-codepen"></i></div></a>
              <a href="#" class="btn btn-outline-warning btn-icon rounded-circle mg-r-5"><div><i class="fa fa-stack-overflow"></i></div></a>
            </div>
          </div>
        </div>

        <p class="tx-11 tx-uppercase tx-spacing-2 mg-t-40 mg-b-10 tx-gray-600">Source Code</p>
        <pre><code class="html pd-20">&lt;a href=&quot;#&quot; class=&quot;btn btn-primary btn-icon&quot;&gt;
  &lt;div&gt;&lt;i class=&quot;fa fa-send&quot;&gt;&lt;/i&gt;&lt;/div&gt;
&lt;/a&gt;</code></pre>

        <div class="card pd-20 pd-sm-40 mg-t-50">
          <h6 class="card-body-title">Button Groups</h6>
          <p class="mg-b-20 mg-sm-b-30">Group a series of buttons together on a single line with the button group.</p>

          <div class="row">
            <div class="col-lg-5">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary pd-x-25 active">General</button>
                <button type="button" class="btn btn-secondary pd-x-25">Privacy</button>
                <button type="button" class="btn btn-secondary pd-x-25">Account</button>
              </div>
            </div>
            <div class="col-lg-5 mg-t-20 mg-lg-t-0">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary active"><i class="fa fa-home"></i></button>
                <button type="button" class="btn btn-secondary"><i class="fa fa-envelope"></i></button>
                <button type="button" class="btn btn-secondary"><i class="fa fa-cog"></i></button>
              </div>
            </div>
          </div>
        </div>

        <p class="tx-11 tx-uppercase tx-spacing-2 mg-t-40 mg-b-10 tx-gray-600">Source Code</p>
        <pre class="mg-b-0"><code class="html pd-20">&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary pd-x-25 active&quot;&gt;General Settings&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary pd-x-25&quot;&gt;Privacy Settings&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary pd-x-25&quot;&gt;Account Settings&lt;/button&gt;
&lt;/div&gt;</code></pre>

      </div>
      <div class="am-footer">
        <span>Copyright &copy;. All Rights Reserved. amanda Responsive Bootstrap 4 amanda Dashboard.</span>
        <span>Created by: ThemePixels, Inc.</span>
      </div>
    </div>
    
    
    </>
  )
}

export default Dashboard;