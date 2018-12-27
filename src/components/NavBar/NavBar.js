import React from 'react';

const NavBar = () =>{
    return(
                        <div className="section section-blue" className="javascript-components">
                        <div className="container">
                            <div className="title">
                                <h2>Javascript Components</h2>
                            </div>
                            <div className="row" id="modals">
                                <div className="col-md-12">
                                    <div className="title">
                                        <h3>Modals</h3>
                                    </div>

                                
                                    <button type="button" className="btn btn-round" data-toggle="modal" data-target="#classNameicModal">
                                       
                                    </button>
                                    <div className="modal fade" id="classNameicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title text-center" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                                </div>
                                                <div className="modal-footer">
                                                    <div className="left-side">
                                                        <button type="button" className="btn btn-default btn-link" data-dismiss="modal">Never mind</button>
                                                    </div>
                                                    <div className="divider"></div>
                                                    <div className="right-side">
                                                        <button type="button" className="btn btn-danger btn-link">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <button type="button" className="btn btn-round" data-toggle="modal" data-target="#noticeModal">
                                       
                                    </button>
                                    <div className="modal fade" id="noticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-notice">
                                            <div className="modal-content">
                                                <div className="modal-header no-border-header">
                                                    <h5 className="modal-title" id="myModalLabel">How Do You Become an Affiliate?</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="instruction">
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <p> <strong>1. Register</strong> - the first step is to create an account at <a href="http://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classNameic version, whatever works best for you.</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="picture">
                                                                    <img src="assets/img/sections/angelo-pantazis.jpg" alt="Thumbnail Image"  className="img-rounded img-responsive">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="instruction">
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <p> <strong>2. Apply</strong> - the first step is to create an account at <a href="http://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classNameic version, whatever works best for you.</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="picture">
                                                                    <img src="assets/img/sections/rawpixel-coms.jpg" alt="Thumbnail Image"  className="img-rounded img-responsive">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary btn-link" data-dismiss="modal">Okay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                  
                                    <button type="button" className="btn btn-danger btn-round" data-toggle="modal" data-target="#smallAlertModal">
                                  
                                    </button>
                                    <div className="modal fade" id="smallAlertModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-sm ">
                                            <div className="modal-content">
                                                <div className="modal-header no-border-header">
                                                    <div></div>
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>
                                                <div className="modal-body text-center">
                                                    <h5>Are you sure you want to do this? </h5>
                                                </div>
                                                <div className="modal-footer">
                                                    <div className="left-side">
                                                        <button type="button" className="btn btn-default btn-link" data-dismiss="modal">Never mind</button>
                                                    </div>
                                                    <div className="divider"></div>
                                                    <div className="right-side">
                                                        <button type="button" className="btn btn-danger btn-link">Yes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                 
                                    <button type="button" className="btn btn-danger btn-round" data-toggle="modal" data-target="#smallNoticeModal">
                                 
                                    </button>
                                    <div className="modal fade" id="smallNoticeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-sm modal-notice">
                                            <div className="modal-content">
                                                <div className="modal-header no-border-header">
                                                    <div></div>
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>
                                                <div className="modal-body text-center">
                                                    <p>If you want to do this, you need to allow it in <strong>Settings</strong>. </p>
                                                    <a href="#paper-kit" className="btn btn-link btn-danger">Learn more</a>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-link" data-dismiss="modal" aria-hidden="true">Okay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <button type="button" className="btn btn-primary btn-round" data-toggle="modal" data-target="#loginModal">
                                                                        </button>
                                    <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="false">
                                        <div className="modal-dialog modal-register">
                                            <div className="modal-content">
                                                <div className="modal-header no-border-header text-center">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h6 className="text-muted">Welcome</h6>
                                                    <h3 className="modal-title text-center">Paper Kit</h3>
                                                    <p>Log in to your account</p>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" value="" placeholder="Email" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input type="password" value="" placeholder="Password" className="form-control" />
                                                    </div>
                                                    <button className="btn btn-block btn-round"> Log in</button>
                                                </div>
                                                <div className="modal-footer no-border-footer">
                                                    <span className="text-muted  text-center">Looking <a href="#paper-kit">create an account</a> ?</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <button type="button" className="btn btn-primary btn-round" data-toggle="modal" data-target="#registerModal">
                                    
                                    </button>
                                    <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-hidden="false">
                                        <div className="modal-dialog modal-register">
                                            <div className="modal-content">
                                                <div className="modal-header no-border-header text-center">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h6 className="text-muted">Welcome</h6>
                                                    <h3 className="modal-title">Paper Kit</h3>
                                                    <p>Create your account free and secure</p>
                                                </div>
                                                <div className="modal-body">
                                                    <button className="btn btn-block btn-round"> Sign Up with Email</button>
                                                    <button className="btn btn-block btn-round">Connect with Facebook</button>
                                                    <button className="btn btn-block btn-round">Connect with Twitter</button>
                                                    <button type="button" className="btn btn-info btn-round btn-block btn-simple"> Sign In with Email </button>
                                                </div>
                                                <div className="modal-footer no-border-footer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="title">
                                <h3>Collapse</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div id="acordeon">
                                        <div id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="card no-transition">
                                                <div className="card-header card-collapse" role="tab" id="headingOne">
                                                    <h5 className="mb-0 panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            Default Collapsible Item 1
                                                            <i className="nc-icon nc-minimal-down"></i>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                                <div className="card-header card-collapse" role="tab" id="headingTwo">
                                                    <h5 className="mb-0 panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Default Collapsible Item 2
                                                            <i className="nc-icon nc-minimal-down"></i>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                                <div className="card-header card-collapse" role="tab" id="headingThree">
                                                    <h5 className="mb-0 panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Default Collapsible Item 3
                                                            <i className="nc-icon nc-minimal-down"></i>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!--  end acordeon -->
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <h3>Gallery</h3>
                            </div>
                            <!--             gallery -->
                                            <!-- Root element of PhotoSwipe. Must have className pswp. -->
                            <div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">

                                <!-- Background of PhotoSwipe.
                                    It's a separate element as animating opacity is faster than rgba(). -->
                                <div className="pswp__bg"></div>

                                <!-- Slides wrapper with overflow:hidden. -->
                                <div className="pswp__scroll-wrap">

                                    <!-- Container that holds slides.
                                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                                        Don't modify these 3 pswp__item elements, data is added later on. -->
                                    <div className="pswp__container">
                                        <div className="pswp__item"></div>
                                        <div className="pswp__item"></div>
                                        <div className="pswp__item"></div>
                                    </div>

                                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                                    <div className="pswp__ui pswp__ui--hidden">

                                        <div className="pswp__top-bar">

                                            <!--  Controls are self-explanatory. Order can be changed. -->

                                            <div className="pswp__counter"></div>

                                            <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

                                            <button className="pswp__button pswp__button--share" title="Share"></button>

                                            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                                            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                                            <!-- element will get className pswp__preloader--active when preloader is running -->
                                            <div className="pswp__preloader">
                                                <div className="pswp__preloader__icn">
                                                <div className="pswp__preloader__cut">
                                                    <div className="pswp__preloader__donut"></div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                            <div className="pswp__share-tooltip"></div>
                                        </div>

                                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

                                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

                                        <div className="pswp__caption">
                                            <div className="pswp__caption__center"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    <div className="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
                        <div className="row">
                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/outfit-gucci.jpg" itemprop="contentUrl" data-size="750x1002">
                                    <img src="assets/img/gallery/outfit-gucci.jpg" itemprop="thumbnail" alt="Image description" className="vertical-image img-rounded img-responsive" />
                                </a>
                                <figcaption itemprop="caption description" className="gallery-caption">Gucci</figcaption>
                            </figure>

                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/outfit-paul-smith.jpg" itemprop="contentUrl" data-size="750x1002">
                                    <img src="assets/img/gallery/outfit-paul-smith.jpg" itemprop="thumbnail" alt="Image description" className="vertical-image img-rounded img-responsive" />
                                </a>
                                <figcaption itemprop="caption description" className="gallery-caption">Paul Smith</figcaption>
                            </figure>

                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/outfit-maison-margiela.jpg" itemprop="contentUrl" data-size="750x1002">
                                    <img src="assets/img/gallery/outfit-maison-margiela.jpg" itemprop="thumbnail" alt="Image description" className="vertical-image img-rounded img-responsive" />
                                </a>
                                <figcaption itemprop="caption description" className="gallery-caption">Maison Margiela</figcaption>
                            </figure>
                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/outfit-burberry.jpg" itemprop="contentUrl" data-size="750x1002">
                                    <img src="assets/img/gallery/outfit-burberry.jpg" itemprop="thumbnail" alt="Image description" className="vertical-image img-rounded img-responsive" />
                                </a>
                                <figcaption itemprop="caption description" className="gallery-caption">Burberry</figcaption>
                            </figure>
                        </div>

                        <div className="row">
                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/ressence.jpg" itemprop="contentUrl" data-size="960x800">
                                    <img src="assets/img/gallery/ressence.jpg" itemprop="thumbnail" alt="Image description" className="horizontal-image img-rounded img-responsive" />
                                </a>
                            </figure>
                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/gucci-sun.jpg" itemprop="contentUrl" data-size="960x800">
                                    <img src="assets/img/gallery/gucci-sun.jpg" itemprop="thumbnail" alt="Image description" className="small-horizontal-image img-rounded img-responsive" />
                                </a>
                            </figure>
                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/bottega.jpg" itemprop="contentUrl" data-size="960x800">
                                    <img src="assets/img/gallery/bottega.jpg" itemprop="thumbnail" alt="Image description" className="small-horizontal-image img-rounded img-responsive" />
                                </a>
                            </figure>
                            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-md-3 col-sm-4 gallery-item">
                                <a href="assets/img/gallery/bracelet.jpg" itemprop="contentUrl" data-size="960x800">
                                    <img src="assets/img/gallery/bracelet.jpg" itemprop="thumbnail" alt="Image description" className="small-horizontal-image img-rounded img-responsive" />
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="col-md-12">
                        <div className="title">
                            <h3>Tooltips</h3>
                        </div>
                        <button type="button" className="btn btn-warning btn-round" data-toggle="tooltip" data-placement="left" title="Tooltip on left">On left</button>
                        <button type="button" className="btn btn-warning btn-round" data-toggle="tooltip" data-placement="right" title="Tooltip on right">On right</button>
                        <button type="button" className="btn btn-warning btn-round" data-toggle="tooltip" data-placement="top" title="Tooltip on top">On top</button>
                        <button type="button" className="btn btn-warning btn-round" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">On bottom</button>
                    </div>
                    <div className="col-md-12">
                        <div className="title">
                            <h3>Popovers</h3>
                        </div>
                        <button type="button" className="btn btn-round"
                            data-toggle="popover"
                            data-placement="top"
                            title="Popover on top"
                            data-content="Here will be some very useful information about this popover.">Nude on top</button>
                        <button type="button" className="btn btn-round"
                            data-toggle="popover"
                            data-placement="bottom"
                            title="Popover on bottom"
                            data-content="Here will be some very useful information about this popover.">Nude on bottom</button>
                            <button type="button" className="btn btn-round"
                            data-toggle="popover"
                            data-placement="left"
                            title="Popover on left"
                            data-content="Here will be some very useful information about this popover.">Nude on left</button>
                            <button type="button" className="btn btn-round"
                            data-toggle="popover"
                            data-placement="right"
                            title="Popover on right"
                            data-content="Here will be some very useful information about this popover.">Nude on right</button>
                    </div>

                    <div className="col-md-12">
                        <div className="title">
                            <h3>Dropup</h3>
                        </div>
                        <div id="special-drowdown">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <h4 className="title"><small>Dropup with sharing</small></h4>
                                    <div className="dropup">
                                        <button id="dLabel" type="button" className="btn btn-block btn-round" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sharing
                                        </button>
                                        <ul className="dropdown-menu dropdown-sharing dropdown-menu-right " aria-labelledby="dLabel">
                                            <li className="dropdown-header text-center">Sharing is caring!</li>
                                            <a className="dropup-item">
                                                <div className="social-line">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <span className="icon-twitter"><i className="fa fa-twitter"></i></span>
                                                        </div>
                                                        <div className="col-sm-6">Twitter</div>
                                                        <div className="col-sm-4">
                                                            <label>
                                                                <input type="checkbox" data-toggle="switch" checked="" data-on-text="<i className='nc-icon nc-check-2'></i>" data-off-text="<i className='nc-icon nc-simple-remove'></i>" data-on-color="success" data-off-color="success"><span className="toggle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropup-item">
                                                <div className="social-line">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <span className="icon-facebook"><i className="fa fa-facebook"></i></span>
                                                        </div>
                                                        <div className="col-sm-6">Facebook</div>
                                                        <div className="col-sm-4">
                                                            <label>
                                                                <input type="checkbox" data-toggle="switch"  data-on-text="<i className='nc-icon nc-check-2'></i>" data-off-text="<i className='nc-icon nc-simple-remove'></i>" data-on-color="success" data-off-color="success"><span className="toggle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropup-item">
                                                <div className="social-line">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <span className="icon-pinterest"><i className="fa fa-pinterest"></i></span>
                                                        </div>
                                                        <div className="col-sm-6">Pinterest</div>
                                                        <div className="col-sm-4">
                                                            <label>
                                                                <input type="checkbox" data-toggle="switch"  data-on-text="<i className='nc-icon nc-check-2'></i>" data-off-text="<i className='nc-icon nc-simple-remove'></i>" data-on-color="success" data-off-color="success"><span className="toggle"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropup-item text-center" href="#paper-kit">
                                                <button className="btn btn-info btn-round ml-auto mr-auto">Share</button>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <h4 className="title"><small>Dropup with actions</small></h4>

                                    <div className="dropup">
                                    <button id="dLabel" type="button" className="btn btn-block btn-round" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Actions
                                    </button>
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel">
                                            <a className="dropdown-item">
                                                <div href="#paper-kit" className="action-line">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <span className="icon-simple"><i className="nc-icon nc-single-copy-04"></i></span>
                                                        </div>
                                                        <div className="col-sm-9">Duplicate</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item">
                                                <div href="#paper-kit" className="action-line">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <span className="icon-simple"><i className="nc-icon nc-user-run"></i></span>
                                                        </div>
                                                        <div className="col-sm-9">Move from here</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item">
                                                <div href="#paper-kit" className="action-line link-danger">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <span className="icon-simple"><i className="nc-icon nc-box-2"></i></span>
                                                        </div>
                                                        <div className="col-sm-9">Archive</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="title">
                            <h3>Datepicker</h3>
                        </div>
                        <div className="row">
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <div className='input-group date' id='datetimepicker'>
                                        <input type='text' className="form-control datetimepicker" placeholder="06/07/2017" />
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <!-- fileupload -->
                    <div className="tim-tile">
                        <h3>File Upload</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-8">
                            <h4 className="title"><small>Regular Image</small></h4>
                            <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                                <div className="fileinput-new thumbnail img-no-padding" style="max-width: 400px; max-height: 250px;">
                                    <img src="assets/img/image_placeholder.jpg" alt="...">
                                </div>
                                <div className="fileinput-preview fileinput-exists thumbnail img-no-padding" style="max-width: 400px; max-height: 250px;"></div>
                                <div>
                                    <span className="btn btn-outline-default btn-file btn-round"><span className="fileinput-new">Select image</span><span className="fileinput-exists">Change</span><input type="file" name="..."></span>
                                    <a href="#paper-kit" className="btn btn-link btn-danger fileinput-exists btn-round" data-dismiss="fileinput"><i className="fa fa-times"></i> Remove</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <h4 className="title"><small>Avatar</small></h4>
                            <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                                <div className="fileinput-new thumbnail img-circle img-no-padding" style="width: 150px; height: 150px;">
                                    <img src="assets/img/placeholder.jpg" alt="...">
                                </div>
                                <div className="fileinput-preview fileinput-exists thumbnail img-circle img-no-padding" style="max-width: 150px; max-height: 150px;"></div>
                                <div>
                                    <span className="btn btn-outline-default btn-file btn-round"><span className="fileinput-new">Add Photo</span><span className="fileinput-exists">Change</span><input type="file" name="..."></span>
                                    <br />
                                    <a href="#paper-kit" className="btn btn-link btn-danger fileinput-exists btn-round" data-dismiss="fileinput"><i className="fa fa-times"></i> Remove</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="title">
                        <h3>Carousel</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto">
                            <div className="card card-raised page-carousel">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="http://www.hudsonmgmt.com/hms/images/slider-img-1.jpg" alt="First slide">
                                            <div className="carousel-caption d-none d-md-block">
                                                <p>Somewhere</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="http://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.r41.cf2.rackcdn.com/ermu/sliders-1/fall-residential-faders/Fall_Fader2.jpg" alt="Second slide">
                                            <div className="carousel-caption d-none d-md-block">
                                                <p>Somewhere else</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="http://www.jveroassociates.com/images/slider/slider-02.jpg" alt="Third slide">
                                            <div className="carousel-caption d-none d-md-block">
                                                <p>Here it is</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a className="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="fa fa-angle-left"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="fa fa-angle-right"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    );
}

export default NavBar;