const Event = () => {
    return (
        <body>
        <header class="site-header">
        <div class="container">
          <h1 class="school-logo-text float-left">
            <a href="/dashboard"><strong>Direct</strong> Connection</a>
          </h1>
          <div class="site-header__menu group">
            <nav class="main-navigation">
              <ul>
                <li class="current-menu-item"><a href="/events">Events</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </nav>
            <div class="site-header__util">
              <a href="login.html" class="btn btn--small btn--orange float-left push-right">Logout</a>
              <a href="login.html" class="btn btn--small btn--dark-orange float-left push-right">View Profile</a>
              <form class="" action="front-page.html" method="post"></form>
              <input type="text" name="value" value="" placeholder="Search DC"></input>
              <input type="submit" name=""></input>
            </div>
          </div>
        </div>
   </header>
   <div class="page-banner">
   <div class="page-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">All Events</h1>
        <div class="page-banner__intro">
            <p>See all of our events we have to offer</p>
        </div>
      </div>
    </div>

    <div class="container container--narrow page-section">
    <div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">Mar</span>
              <span class="event-summary__day">16</span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny">
                <a href="">
                Portfolio Sharing</a></h5>
              <p>Join us for a portfolio sharing session. You can get your company out there to get good business…</p>
            </div>
          </div>
<div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">Mar</span>
              <span class="event-summary__day">16</span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny">
                <a href="">
                Traffic Control Items</a></h5>
              <p>In this event, we will be attending an online webinar to discuss any traffic control items any company…</p>
            </div>
          </div>
    <hr class="section-break"></hr>
    <a href="" class="btn btn--large btn--blue">Add Event</a>
    <a href="/past-events" class="btn btn--large btn--blue">Past Events</a>
    </div>

    <footer class="site-footer">
      <div class="site-footer__inner container container--narrow">
        <div class="group">
          <div class="site-footer__col-one">
            <h1 class="school-logo-text school-logo-text--alt-color">
              <a href="/"><strong>Direct</strong> Connection</a>
            </h1>
            <p><a class="site-footer__link" href="/">706-263-0175</a></p>
          </div>
        </div>
      </div>
</footer>
   </body>
    )
}

export default Event