import React from 'react';

const NavBar = () =>{
    return( 
        <div>
                <nav className="navbar navbar-expand-md bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="#paper-kit">Brand</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#paper-kit">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#paper-kit">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#paper-kit">Disabled</a>
                                </li>
                            </ul>

                            <form className="form-inline ml-auto">
                                <input className="form-control mr-sm-2 no-border" type="text" placeholder="Search"></input>
                                <button type="submit" className="btn btn-primary btn-just-icon btn-round"><i className="nc-icon nc-zoom-split" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>


                <nav className="navbar navbar-expand-md bg-info">
                    <div className="container">
                        <a className="navbar-brand" href="#paper-kit">Navbar with icon</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#paper-kit">
                                        Discover
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#paper-kit">
                                        Wishlist
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="btn btn-just-icon btn-warning  " href=" " alt=" ">
                                        <i className="nc-icon nc-sound-wave"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#paper-kit" className="btn btn-just-icon" data-toggle="dropdown">
                                        <i className="nc-icon nc-email-85"></i>
                                    </a>
                                    <span className="label label-danger notification-bubble">2</span>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#paper-kit" className="nav-link" data-toggle="dropdown" width="30" height="30">
                                        <div className="profile-photo-small">
                                            <img src="assets/img/faces/joe-gardner-2.jpg" alt="" className="img-circle img-responsive img-no-padding"></img>
                                        </div>
                                    </a>
                                      <ul className="dropdown-menu dropdown-menu-right dropdown-info">
                                        <a className="dropdown-item" href="#paper-kit">Me</a>
                                        <a className="dropdown-item" href="#paper-kit">Settings</a>
                                        <li className="divider"></li>
                                        <a className="dropdown-item" href="#paper-kit">Sign out</a>
                                      </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

         
                <nav className="navbar navbar-expand-md bg-danger">
                    <div className="container">
                        <a className="navbar-brand" href="#paper-kit">Navbar with notification</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#paper-kit">
                                        Discover
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#paper-kit">
                                        Wishlist
                                    </a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a href=" " alt=" " className="btn btn-just-icon btn-warning  " data-toggle="dropdown">
                                        <i className="nc-icon nc-sound-wave"></i>
                                    </a>

                                      <ul className="dropdown-menu dropdown-menu-right dropdown-notification">
                                        <li className="no-notification">
                                               You're all clear!
                                        </li>

                                      </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href=" " alt=" " className="btn btn-just-icon btn-danger  " data-toggle="dropdown">
                                        <i className="nc-icon nc-email-85"></i>
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-right dropdown-wide dropdown-notification">
                                        <li className="dropdown-header">
                                            You have 7 unread notifications
                                        </li>
                                        <li >
                                        <ul className="dropdown-notification-list scroll-area">
                                            <a href="#paper-kit" className="notification-item">
                                                <div className="notification-text">
                                                    <span className="label label-icon label-success"><i className="nc-icon nc-chat-33"></i></span>
                                                    <span className="message"><b>Patrick</b> mentioned you in a comment.</span>
                                                    <br />
                                                    <span className="time">20min ago</span>

                                                    <button className="btn btn-just-icon read-notification btn-round">
                                                        <i className="nc-icon nc-check-2"></i>
                                                    </button>
                                                </div>
                                            </a>


                                            <a href="#paper-kit" className="notification-item">
                                               <div className="notification-text">
                                                    <span className="label label-icon label-info"><i className="nc-icon nc-alert-circle-i"></i></span>

                                                    <span className="message">Our privacy policy changed!</span>
                                                    <br />
                                                    <span className="time">1day ago</span>
                                                </div>
                                            </a>

                                            <a href="#paper-kit" className="notification-item">
                                                <div className="notification-text">
                                                    <span className="label label-icon label-warning"><i className="nc-icon nc-ambulance"></i></span>

                                                    <span className="message">Please confirm your email address.</span>
                                                    <br />
                                                    <span className="time">2days ago</span>
                                                </div>
                                            </a>
                                            <a href="#paper-kit" className="notification-item">
                                                <div className="notification-text">
                                                    <span className="label label-icon label-primary"><i className="nc-icon nc-paper"></i></span>
                                                    <span className="message">Have you thought about marketing?</span>
                                                    <br />
                                                    <span className="time">3days ago</span>
                                                </div>
                                            </a>
                                         </ul>
                                         </li>
                                     

                                        <li className="dropdown-footer">
                                            <ul className="dropdown-footer-menu">
                                                <li>
                                                    <a href="#paper-kit">Mark all as read</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#paper-kit" className="nav-link navbar-brand" data-toggle="dropdown" width="30" height="30">
                                        <div className="profile-photo-small">
                                            <img  src="assets/img/faces/erik-lucatero-2.jpg" alt=" " className="img-circle img-responsive img-no-padding"></img>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                        <div className="dropdown-header">Dropdown header</div>
                                        <a className="dropdown-item" href="#paper-kit">Action</a>
                                        <a className="dropdown-item" href="#paper-kit">Another action</a>
                                        <a className="dropdown-item" href="#paper-kit">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#paper-kit">Separated link</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#paper-kit">Another separated link</a>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    );
}

export default NavBar;