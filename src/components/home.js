import './home.css'
const Home = () => {
    return (  
    
     <div className="home">
          
            
       
        
            <header id="top-header" className="header-home">
                <div className="grid">
                    <div className="col-1-1">
                        <div className="content">
                            <div className="logo-wrap">
                                <a href="#0" className="logo">The7</a>
                            </div>
                            <nav className="navigation">
                                <input type="checkbox" id="nav-button"/>
                                <label for="nav-button" onclick></label>
                                <ul className="nav-container">
                                    <li><a href="#home" className="current">Home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#work">Work</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#pricing">Pricing</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="parallax-section parallax1">
                <div className="grid grid-pad">
                    <div className="col-1-1">
                         <div className="content content-header" >
                            <h2>We Are Creative Design Agency</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, fuga, consectetur sequi consequuntur nisi placeat ullam maiores perferendis. Quod, nihil reiciendis saepe optio libero minus et beatae ipsam reprehenderit sequi.</p>
                            <a target="_blank" className="btn btn-ghost" href="#">Find Out More</a>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>

            
            <div className="wrap services-wrap" id="services">
                <section className="grid grid-pad services">
                    <h2>Our Services</h2>
                    <div className="col-1-4 service-box service-1" >
                        <div className="content">
                            <div className="service-icon">
                                <i className="circle-icon icon-heart4"></i>
                            </div>
                            <div className="service-entry">
                                <h3>Lovely Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 service-box service-2" >
                        <div className="content">
                            <div className="service-icon">
                                <i className="circle-icon icon-star4"></i>
                            </div>
                            <div className="service-entry">
                                <h3>Great Concept</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 service-box service-3">
                        <div className="content">
                            <div className="service-icon">
                                <i className="circle-icon icon-display"></i>
                            </div>
                            <div className="service-entry">
                                <h3>Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 service-box service-4" >
                        <div className="content">
                            <div className="service-icon">
                                <i className="circle-icon icon-user6"></i>
                            </div>
                            <div className="service-entry">
                                <h3>User Friendly</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat tellus eget libero pretium, sollicitudin feugiat libero.</p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            
            <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>

        
            <div className="wrap grey recent-wrap" id="work">
                <section className="grid grid-pad">
                    <h2>Recent Work</h2>
                    
                    <div className="col-1-1 mix">
                        <ul className="filters" >
                            <li className="filter active" data-filter="all">All</li>
                            <li className="filter" data-filter=".illustration">Illustration</li>
                            <li className="filter" data-filter=".web-design">Web Design</li>
                            <li className="filter" data-filter=".photography">Photography</li>
                        </ul>
                    </div>
                    
                    <div className="portfolio-items" >
                        <div className="col-1-3 mix illustration">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/1-small.jpg" alt=""/>                                    
                                    <div className="overlay">
                                        <span>Illustration</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:illustration" title="Asian tourist - Illustration" href="images/work/1-big.jpg">Asian tourist</a></h2>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-1-3 mix photography">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/5-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Photography</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:photography" title="Blue flowers - Photography" href="images/work/5-big.jpg">Blue flowers</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-3 mix illustration">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/2-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Illustration</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:illustration" title="Batman Wannabe - Illustration" href="images/work/2-big.jpg">Batman Wannabe</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-3 mix photography">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/8-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Photography</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:photography" title="Big city and dreams - Photography" href="images/work/8-big.jpg">Big city and dreams</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-3 mix web-design">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/6-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Web Design</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:webdesign" title="Minimal nature - Web Design" href="images/work/6-big.jpg">Minimal nature</a></h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix web-design">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/3-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Illustration</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:illustration" title="Jack the sailor - Illustration" href="images/work/3-big.jpg">Jack the sailor</a></h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix photography">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/7-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Photography</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:photography" title="Enjoy live - Photography" href="images/work/7-big.jpg">Enjoy live</a></h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/4-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Illustration</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:illustration" title="Run kitty run - Photography" href="images/work/4-big.jpg">Run kitty run</a></h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                            <div className="content">
                                <div className="recent-work">
                                    <img src="images/work/9-small.jpg" alt=""/>
                                    <div className="overlay">
                                        <span>Web Design</span>
                                        <h2><a className="img-wrap" data-rel="lightcase:webdesign" title="Would you? - Web Design" href="images/work/9-big.jpg">Would you?</a></h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-1-1"><a className="btn" href="#0">View More</a></div>

                </section>  
            </div>
            

            
            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>

            
            <div className="wrap services-wrap" >
                <section className="grid grid-pad">
                    <div className="col-1-1 service-box cl-client-carousel-container">
                        <div className="content">
                            <div className="cl-client-carousel">
                                
                                <div className="item client-carousel-item">
                                <div className="quotes-icon">
                                    <i className="icon-quotes-left"></i>
                                </div>
                                <p>The7 is an extraordinary, awesome Theme, I would recommend this Theme to anyone for their next project. Go ahead and download it now!</p>
                                <h4>-David Bell</h4>
                                </div>
                                
                                <div className="item client-carousel-item">
                                <div className="quotes-icon">
                                    <i className="icon-quotes-left"></i>
                                </div>
                                <p>The good times are for those who take action. The7 is a simple and easy to use template for creative people. Download this theme and give it a try!</p>
                                <h4>-Eve Stinger</h4>
                                </div>
                                <div className="item client-carousel-item">
                                <div className="quotes-icon">
                                    <i className="icon-quotes-left"></i>
                                </div>
                                <p>Awesome theme! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus incidunt possimus eveniet aperiam, minus deleniti iure ipsa praesentium amet, labore voluptatum fugit earum, porro non sequi sint soluta reprehenderit ad?</p>
                                <h4>-Will Peters</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        

             
            <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>

            
            <div className="wrap blog-grid grey" id="blog">
                <div className="grid grid-pad">
                    <div className="content" >
                        <h2>Our Blog</h2>
                        <div className="col-1-2" >
                            <article className="post-wrap">
                                <div className="post-img">
                                    <a href="#0"><img src="images/post/post-n1.jpg" alt=""/></a>
                                </div>
                                <div className="post">
                                    <h2 className="entry-title"><a href="#0">Drawing hour</a></h2>
                                    <div className="post-meta">
                                        <a href="#0">15 Januar, 2015</a> <span className="mid-sep">·</span> <a href="#0">Graphic Design</a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                    </p>
                                    <a className="btn read-more" href="#0">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-1-2" >
                            <article className="post-wrap">
                                <div className="post-img">
                                    <a href="#0"><img src="images/post/post-n2.jpg" alt=""/></a>
                                </div>
                                <div className="post">
                                    <h2 className="entry-title"><a href="#0">Photography workshop</a></h2>
                                    <div className="post-meta">
                                        <a href="#0">2 Februar, 2014</a> <span className="mid-sep">·</span> <a href="#0">Photography</a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                    </p>
                                    <a className="btn read-more" href="#0">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-1-2" >
                            <article className="post-wrap">
                                <div className="post-img">
                                    <a href="#0"><img src="images/post/post-n3.jpg" alt=""/></a>
                                </div>
                                <div className="post">
                                    <h2 className="entry-title"><a href="#0">On vacation</a></h2>
                                    <div className="post-meta">
                                        <a href="#0">26 March, 2014</a> <span className="mid-sep">·</span> <a href="#0">Graphic Design</a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                    </p>
                                    <a className="btn read-more" href="#0">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-1-2" >
                            <article className="post-wrap">
                                <div className="post-img">
                                    <a href="#0"><img src="images/post/post-n4.jpg" alt=""/></a>
                                </div>
                                <div className="post">
                                    <h2 className="entry-title"><a href="#0">You have to take breaks</a></h2>
                                    <div className="post-meta">
                                        <a href="#0">19 June, 2014</a> <span className="mid-sep">·</span> <a href="#0">Graphic Design</a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                    </p>
                                    <a className="btn read-more" href="#0">Read More</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-1-1"><a className="btn" href="#0">View All</a></div>
                    </div>
                </div>
            </div>
            

        
            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
            
        
            <div className="wrap" id="pricing">
                <div className="grid grid-pad">
                    <div className="content" >
                        <div className="col-1-1">
                            <section id="price-tables">
                                <h2>Pricing Tables</h2>
                                <ul id="plans">
                                    <li className="plan" >
                                        <ul className="plan-wrap">
                                            <li className="title"><h2>Economy</h2></li>
                                            <li className="price"><p>$10/m</p></li>
                                            <li>
                                                <ul className="options">
                                                    <li>1GB <span>Storage</span></li>
                                                    <li>2 <span>Clients</span></li>
                                                    <li>5 <span>Active Projects</span></li>
                                                    <li><span>Free Goodies</span></li>
                                                    <li>24/7 <span>Email support</span></li>
                                                </ul>
                                            </li>
                                            <li><a className="btn btn-price" href="#0">Purchase</a></li>
                                        </ul>
                                    </li>
                                    <li className="plan best-plan" >
                                        <ul className="plan-wrap">
                                            <li className="title"><h2 className="best-plan-title">Personal</h2></li>
                                            <li className="price"><p className="best-plan-price">$20/m</p></li>
                                            <li>
                                                <ul className="options">
                                                    <li>5GB <span>Storage</span></li>
                                                    <li>10 <span>Clients</span></li>
                                                    <li>10 <span>Active Projects</span></li>
                                                    <li><span>Free Goodies</span></li>
                                                    <li>24/7 <span>Email support</span></li>
                                                </ul>
                                            </li>
                                            <li><a className="btn btn-price btn-best-plan" href="#0">Purchase</a></li>
                                        </ul>
                                    </li>
                                    <li className="plan" >
                                        <ul className="plan-wrap">
                                            <li className="title"><h2>Business</h2></li>
                                            <li className="price"><p>$30/m</p></li>
                                            <li>
                                                <ul className="options">
                                                    <li>15GB <span>Storage</span></li>
                                                    <li>15 <span>Clients</span></li>
                                                    <li>15 <span>Active Projects</span></li>
                                                    <li><span>Free Goodies</span></li>
                                                    <li>24/7 <span>Email support</span></li>
                                                </ul>
                                            </li>
                                            <li><a className="btn btn-price" href="#0">Purchase</a></li>
                                        </ul>
                                    </li>
                                    <li className="plan" >
                                        <ul className="plan-wrap">
                                            <li className="title"><h2>Profesional</h2></li>
                                            <li className="price"><p>$40/m</p></li>
                                            <li>
                                                <ul className="options">
                                                    <li>Unlimited <span>Storage</span></li>
                                                    <li>Unlimited <span>Clients</span></li>
                                                    <li>Unlimited <span>Active Projects</span></li>
                                                    <li><span>Free Goodies</span></li>
                                                    <li>24/7 <span>Email support</span></li>
                                                </ul>
                                            </li>
                                            <li><a className="btn btn-price" href="#0">Purchase</a></li>
                                        </ul>
                                    </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            

            
                <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
                </svg>

            
                <div className="parallax-section parallax2">                    
                    <div className="wrap">
                        <section className="grid grid-pad callout">
                            <div className="col-1-3">
                                <div className="content" >
                                <div className="info-counter">
                                        <div className="info-counter-row">
                                            <i className="info-counter-icon icon-mug"></i>
                                        </div>
                                        <div className="info-counter-content">
                                            <h5 className="info-counter-number">
                                            <span className="counter">55</span>
                                            <span className="info-counter-units">Cups</span>
                                            </h5>
                                        <div className="info-counter-text">Average weekly coffee drank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3">
                                <div className="content" >
                                <div className="info-counter">
                                        <div className="info-counter-row">
                                            <i className="info-counter-icon icon-embed"></i>
                                        </div>
                                        <div className="info-counter-content">
                                            <h5 className="info-counter-number">
                                            <span className="counter">9000</span>
                                            <span className="info-counter-units">Lines</span>
                                            </h5>
                                        <div className="info-counter-text">Average weekly lines of code</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-1-3">
                                <div className="content" >
                                <div className="info-counter">
                                        <div className="info-counter-row">
                                            <i className="info-counter-icon icon-trophy"></i>
                                        </div>
                                        <div className="info-counter-content">
                                            <h5 className="info-counter-number">
                                            <span className="counter">400</span>
                                            <span className="info-counter-units">Customers</span>
                                            </h5>
                                        <div className="info-counter-text">Average yearly happy clients</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                

            
                <svg className="curveUpColor curveGrey" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>

            
                <div className="wrap team-wrap grey" id="team">
                    <div className="grid grid-pad">
                        <div className="content" >
                            <h2>Our Team</h2>
                            <div className="col-1-4" >
                                <div className="content staff-content">
                                    <div className="recent-work staff-img">
                                        <div className="img-wrap staff-img">
                                            <img src="images/team/user2.png" alt=""/>
                                            <div className="team-social">
                                                <a className="sl-fb" href="#"><i className="icon-facebook"></i></a>
                                                <a className="sl-tw" href="#"><i className="icon-twitter"></i></a>
                                                <a className="sl-gp" href="#"><i className="icon-googleplus2"></i></a>
                                                <a className="sl-ln" href="#"><i className="icon-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="work-info staff-info">
                                            <h5>Tim Malkovic</h5>
                                            <span>CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-4" >
                                <div className="content staff-content">
                                    <div className="recent-work staff-img">
                                        <div className="img-wrap staff-img">
                                            <img src="images/team/user1.png" alt=""/>
                                            <div className="team-social">
                                                <a className="sl-fb" href="#"><i className="icon-facebook"></i></a>
                                                <a className="sl-tw" href="#"><i className="icon-twitter"></i></a>
                                                <a className="sl-gp" href="#"><i className="icon-googleplus2"></i></a>
                                                <a className="sl-ln" href="#"><i className="icon-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="work-info staff-info">
                                            <h5>David Bell</h5>
                                            <span>Creative Designer</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-1-4" >
                                <div className="content staff-content">
                                    <div className="recent-work staff-img">
                                        <div className="img-wrap staff-img">
                                            <img src="images/team/user3.png" alt=""/>
                                            <div className="team-social">
                                                <a className="sl-fb" href="#"><i className="icon-facebook"></i></a>
                                                <a className="sl-tw" href="#"><i className="icon-twitter"></i></a>
                                                <a className="sl-gp" href="#"><i className="icon-googleplus2"></i></a>
                                                <a className="sl-ln" href="#"><i className="icon-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="work-info staff-info">
                                            <h5>Eve Stinger</h5>
                                            <span>Sales Manager</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-1-4" >
                                <div className="content staff-content">
                                    <div className="recent-work staff-img">
                                        <div className="img-wrap staff-img">
                                            <img src="images/team/user4.png" alt=""/>
                                            <div className="team-social">
                                                <a className="sl-fb" href="#"><i className="icon-facebook"></i></a>
                                                <a className="sl-tw" href="#"><i className="icon-twitter"></i></a>
                                                <a className="sl-gp" href="#"><i className="icon-googleplus2"></i></a>
                                                <a className="sl-ln" href="#"><i className="icon-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="work-info staff-info">
                                            <h5>Will Peters</h5>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                

            
                <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>

                
                <div className="wrap" >
                    <div className="grid grid-pad">
                        <div className="col-1-1">
                            <div className="content">
                                
                                <div className="cl-logo-carousel col-sm-12">
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/1.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/2.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/3.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/4.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/5.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/1.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/2.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                    <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/clients/3.png" alt="" />
                                        </figure>
                                    </a>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                

            
                <svg className="curveDownColor curveMapUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
                </svg>
                
                
                <div className="map">                    
                    <div className="wrap">
                        <section id="cd-google-map">
                            <div id="google-container"></div>
                            <div id="cd-zoom-in"></div>
                            <div id="cd-zoom-out"></div>
                        </section>
                    </div>
                </div>
            

                
                <svg className="curveUpColor curveMapDown" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>

    
                <div className="wrap contact" id="contact">
                    <div className="grid grid-pad" >
                        <h2>Contact</h2>
                        <div className="col-1-2" >
                            <div className="content address">
                                <h3>Talk to us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto fugit esse soluta quae debitis quibusdam harum voluptatem, maxime, aliquam sequi. Tempora ipsum magni unde velit corporis fuga, necessitatibus blanditiis.</p>
                                <address>
                                    <div>
                                        <div className="box-icon">
                                            <i className="icon-location"></i>
                                        </div>
                                        <span>Address:</span>
                                        <p>9983 City name, Street name, 232 Apartment C</p>
                                    </div>
                                    
                                    <div>
                                        <div className="box-icon">
                                            <i className="icon-clock"></i>
                                        </div>
                                        <span>Work Time:</span>
                                        <p>Monday - Friday from 9am to 5pm</p>
                                    </div>
                                    
                                    <div>
                                        <div className="box-icon">
                                            <i className="icon-phone"></i>
                                        </div>
                                        <span>Phone:</span>
                                        <p>595 12 34 567</p>
                                    </div>                                  
                                </address>
                            </div>
                        </div>
                         <div className="col-1-2 pleft-25" >
                            <div className="content contact-form">
                                <form className="form">
                                    <input type="text" className="comment-name" placeholder="Name*" required />
                                    <input type="email" className="comment-email" placeholder="Email*" required />
                                    <input type="text" className="comment-subject" placeholder="Subject" />
                                    <textarea className="required" placeholder="Message..." required ></textarea>
                                    <input type="submit" value="Send Message" className="btn submit comment-submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                

            
                <svg className="curveUpColor curveMapDown" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
                
                <footer className="wrap">
                    <div className="grid grid-pad" >
                        <div className="col-1-4">
                            <div className="content">
                                <div className="footer-widget">
                                    <h3>About</h3>
                                    <div className="textwidget">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p><br />
                                        <p>Et dolore magna aliquyam erat sed diam voluptua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4" >
                            <div className="content">
                                <div className="footer-widget">
                                    <h3>Recent Posts</h3>
                                    <div className="fwidget">
                                        <ul>
                                            <li><a href="#0">Suspendisse nec lectus non</a></li>
                                            <li><a href="#0">Phasellus euismod pulvinar</a></li>
                                            <li><a href="#0">Aliquam erat volutpat</a></li>
                                            <li><a href="#0">Phasellus euismod pulvinar</a></li>
                                            <li><a href="#0">Aliquam erat volutpat</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4" >
                            <div className="content">
                                <div className="footer-widget">
                                    <h3>More info</h3>
                                    <div className="textwidget">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                                        <br></br>
                                        <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4" >
                            <div className="content">
                                <div className="footer-widget">
                                    <h3>Flickr Feed</h3>
                                    <div className="flickr-widget">
                                        <ul className="flickr-list">
                                            <li><a href="#0"><img src="images/flickr-widget/flickr1.jpg" alt=""/></a></li>
                                            <li><a href="#0"><img src="images/flickr-widget/flickr2.jpg" alt=""/></a></li>
                                            <li><a href="#0"><img src="images/flickr-widget/flickr3.jpg" alt=""/></a></li>
                                            <li><a href="#0"><img src="images/flickr-widget/flickr4.jpg" alt=""/></a></li>
                                            <li><a href="#0"><img src="images/flickr-widget/flickr5.jpg" alt=""/></a></li>
                                            <li><a href="#0"><img src="images/flickr-widget/flickr6.jpg" alt=""/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-footer">
                        <div className="grid grid-pad">
                            <div className="col-1-1" >
                                <div className="content">
                                    <div className="social-set">
                                        <a  href="#0"><i className="icon-facebook"></i></a>
                                        <a  href="#0"><i className="icon-twitter"></i></a>
                                        <a  href="#0"><i className="icon-linkedin2"></i></a>
                                        <a  href="#0"><i className="icon-dribbble4"></i></a>
                                        <a  href="#0"><i className="icon-instagram"></i></a>
                                    </div>
                                    <p className="source-org copyright">© 2016 | All Rights Reserved Created By <a href="http://templatestock.co">Template Stock</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            

                <div className="loader-overlay">
                    <div className="loader">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
       </div>
     )
}
 
export default Home;