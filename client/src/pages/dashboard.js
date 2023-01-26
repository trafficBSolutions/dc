const Dashboard = () => {
    return (
        <body>
     <header class="site-header">
        <div class="container">
          <h1 class="school-logo-text float-left">
            <a><strong>Direct</strong> Connection</a>
          </h1>
          <div class="site-header__menu group">
            <nav class="main-navigation">
              <ul>
                <li><a href="Events.html">Events</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </nav>
            <div class="site-header__util">
            
              <a href="" class="btn--small btn--dark-orange float-left push-right">View Profile</a>
              <a href="" class="btn--small btn--orange float-left push-right btn--with-photo">
              <span class="site-header__avatar"><img alt="" src="http://2.gravatar.com/avatar/200ce0715dd57ac294e64211e03dab28?s=60&amp;d=mm&amp;r=g" srcset="http://2.gravatar.com/avatar/200ce0715dd57ac294e64211e03dab28?s=120&amp;d=mm&amp;r=g 2x" class="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async"></img></span>
              <span class="btn__text">Log Out</span>
            </a>
                                   <span href="" class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
                     </div>
                     </div>
                     </div>
   </header>

      <div class="page-banner">
      <div class="page-banner__bg-gif-dash" style={ { backgroundImage: "url('connection.gif')" } }></div>
              <div class="page-banner__content container t-center c-white">
                <h1 class="headline headline--large">Direct Connection</h1>
                <a class="btn btn--large btn--blue">Companies</a>
                          <div class="row">
                <div class="col-xs-12 col-md-10 col-md-offset-1-text-center white">
                  <h2 class="headline headline--medium">See what all of our companies are up to with their latest news and events. Even connect with companies by viewing and sharing.</h2>
                </div>
              </div>
              </div>
              </div>
              <div class="full-width-split group">
                <div class="full-width-split__one">
                  <div class="full-width-split__inner">
                    <h2 class="headline headline--small-plus t-center">Upcoming Events</h2>
                    
          
                    <div class="event-summary">
                      <a href="" class="event-summary__date t-center">
                        <span class="event-summary__month">Mar</span>
                        <span class="event-summary__day">25</span>
                      </a>
                      <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny"><a href="">Traffic Control Items</a></h5>
                        <p>We will have a discussion to discuss any traffic control items any company needs for improvement<a class="nu gray">Learn more</a></p>
                      </div>
                    </div>
                    <div class="event-summary">
                      <a href="" class="event-summary__date t-center">
                        <span class="event-summary__month">Apr</span>
                        <span class="event-summary__day">02</span>
                      </a>
                      <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny"><a href="">Chattanooga Traffic Plan</a></h5>
                        <p>In this event, we will discuss how we need to set up for lane closures. <a href="" class="nu gray">Learn more</a></p>
                      </div>
                    </div>
          
                    <p class="t-center no-margin"><a href="/events" class="btn btn--blue">View All Events</a></p>
                  </div>
                </div>

                <div class="full-width-split__two">
                  <div class="full-width-split__inner">
                    <h2 class="headline headline--small-plus t-center">From Our Blogs</h2>
                                <div class="event-summary">
                          <a href="/blog" class="event-summary__date event-summary__date--beige t-center">
                            <span class="event-summary__month">Dec</span>
                            <span class="event-summary__day">29</span>  
                          </a>
                          <div class="event-summary__content">
                            <h5 class="event-summary__title headline headline--tiny"><a href="">Welcome Southern Company</a></h5>
                            <p>Southern Company has decided to join our community! <a href="" class="nu gray">Read more</a></p>
                          </div>
                        </div>
                       
            
                    
                    
                    
                    <p class="t-center no-margin"><a href="" class="btn btn--yellow">View All Blog Posts</a></p>
                  </div>
                </div>
                </div>
                <footer class="site-footer">
                  <div class="site-footer__inner container container--narrow">
                    <div class="group">
                      <div class="site-footer__col-one">
                        <h1 class="school-logo-text school-logo-text--alt-color">
                          <a href="index.html"><strong>Direct</strong> Connection</a>
                        </h1>
                        <p><a href="" class="site-footer__link">706-263-0175</a></p>
                      </div>
                    </div>
                  </div>
            </footer>
            <div class="search-overlay search-overlay--active">
        <div class="search-overlay__top">
          <div class="container">
            <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
            <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term"></input>
            <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
          </div>
        </div>
        
        <div class="container">
          <div id="search-overlay__results"></div>
        </div>

      </div>
       </body>
    )
}

export default Dashboard