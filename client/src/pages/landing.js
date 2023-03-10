
const Landing = () => {
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
                <li><a href="blog.html">Blog</a></li>
              </ul>
            </nav>
            <div class="site-header__util">
              <a href="login.html" class="btn btn--small btn--orange float-left push-right">Login</a>
              <form class="" action="front-page.html" method="post"></form>
              <input type="text" name="value" value="" placeholder="Search DC"></input>
              <input type="submit" name=""></input>
            </div>
          </div>
        </div>
   </header>

      <div class="page-banner">
        <div class="page-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
              <div class="page-banner__content container t-center c-white">
                <h1 class="headline headline--large">Direct Connection</h1>
                <a class="btn btn--large btn--blue">Add Your Company</a>
                          <div class="row">
                <div class="col-xs-12 col-md-10 col-md-offset-1-text-center white">
        
                  <h1>What DC has to offer</h1>
                      <p>DC is a company that makes connecting faster, easier and more convenient. We can help you and your company to get your personal
                         or business name out there. We are the first Online Company convention center. 
                        You will find yourself traveling through a variety of companies that you can interact with online. You
                        can locate a company and immediately request open bids on projects, connect with different departments through the company, send payment and receive payment, 
                        find the next date that company will be interacting and do live meetings and marketing via zoom, webinars, skype and much more. Think as if you just saved yourself hours on
                         end locating your next company project and add a few members to your team along the way.    
                        Find what request application forms and highly qualified employees  connected to Companies that Qualified employees,  future investors, employees
                          with  other swap company information swap, quotes send quotes, futuristic, billing processing. DC connections can help get companies` portfolios easily available.</p>
                </div>
              </div>
              </div>
              </div>
              <div class="full-width-split group">
                <div class="full-width-split__one">
                  <div class="full-width-split__inner">
                    <h2 class="headline headline--small-plus t-center">Upcoming Events</h2>
                    
          
                    <div class="event-summary">
                      <a class="event-summary__date t-center">
                        <span class="event-summary__month">Mar</span>
                        <span class="event-summary__day">25</span>
                      </a>
                      <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny"><a>Traffic Control Items</a></h5>
                        <p>We will have a discussion to discuss any traffic control items any company needs for improvement<a class="nu gray">Learn more</a></p>
                      </div>
                    </div>
                    <div class="event-summary">
                      <a class="event-summary__date t-center">
                        <span class="event-summary__month">Apr</span>
                        <span class="event-summary__day">02</span>
                      </a>
                      <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny"><a>Chattanooga Traffic Plan</a></h5>
                        <p>In this event, we will discuss how we need to set up for lane closures. <a class="nu gray">Learn more</a></p>
                      </div>
                    </div>
          
                    <p class="t-center no-margin"><a class="btn btn--blue">View All Events</a></p>
                  </div>
                </div>

                <div class="full-width-split__two">
                  <div class="full-width-split__inner">
                    <h2 class="headline headline--small-plus t-center">From Our Blogs</h2>
                                <div class="event-summary">
                          <a class="event-summary__date event-summary__date--beige t-center">
                            <span class="event-summary__month">Dec</span>
                            <span class="event-summary__day">29</span>  
                          </a>
                          <div class="event-summary__content">
                            <h5 class="event-summary__title headline headline--tiny"><a>Welcome Southern Company</a></h5>
                            <p>Southern Company has decided to join our community! <a class="nu gray">Read more</a></p>
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
                        <p><a class="site-footer__link" href="index.html">706-263-0175</a></p>
                      </div>
                    </div>
                  </div>
            </footer>
       </body>
    )
}

export default Landing