import '../App.css';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
 
// "Discover Your Neighborhood's Hidden Gems"
// "Explore Local Stores and Services in Your Area"
// "Uncover the Best Stores Near You"
// "Get to Know Your Neighborhood's Vibrant Business Community"
// "Find Everything You Need, Right in Your Neighborhood"
// "Support Local Businesses and Shop in Your Community"
// "Stay Connected to Your Neighborhood's Shopping Scene"
// "Experience the Convenience of Shopping Locally"
// "Discover New Stores and Services Just Around the Corner"
// "Navigate Your Neighborhood's Stores with Ease"

class Home extends Component{
  
    render() {
      return (
        <>
        <header className="masthead">
        <div className="container position-relative">
        <div className="row justify-content-center"> 
        <div className="col-xl-8">
            <div className="text-center text-white">
            <h1 className="mb-0 pt-5 mt-5">Know Your Neighborhood: Where Business Meets Community!</h1>
            </div>
        </div>
        </div>
        </div>
        </header>
        <section className="features-icons text-center pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <Link to="/register" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fa fa-user-plus m-auto" aria-hidden="true"></i></div>
                            <h3>Join Our Community</h3>
                            <p className="lead mb-0">Stay Connected to Local Shopping.</p>
                        </div>
                    </div></Link>
                    <Link to="/add-store" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fa fa-shopping-cart m-auto" aria-hidden="true"></i></div>
                            <h3>Showcase Your Business</h3>
                            <p className="lead mb-0">Unearth Hidden Gems in Your Neighborhood.</p>
                        </div>
                    </div></Link>
                    <Link to="/view-store" className="col-lg-4 home-hover pt-5 pb-5" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="fa fa-window-maximize m-auto" aria-hidden="true"></i></div>  
                            <h3>Explore All Stores</h3>
                            <p className="lead mb-0">Find Everything You Need Right in Your Hometown.</p>
                        </div>
                    </div></Link>
                </div>
            </div>
        </section>
        {/* <section className="page-section bg-black text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-users"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 pt-5 pb-5 ms-auto">
                      <p className="lead text-justify">Our mission is to make your neighborhood shopping more convenient 
                      and enjoyable. Whether you're a local resident or a visitor, our application will help you 
                      find the stores you need.</p></div>
                    <div className="col-lg-4 pt-5 pb-5 me-auto">
                      <p className="lead text-justify">With our extensive list of stores, you can easily explore and 
                      discover new places to shop, dine, or hang out. We strive to provide accurate and up-to-date 
                      information about each store.</p></div>
                </div>
                <div className="text-center mt-4">
                </div>
            </div>
        </section> */}
        <section className="signup-section bg-black text-white" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center sign-up">
                        {/*<i className="far fa-user-plus fa-2x mb-2"></i>-->*/}
                        <h2 className="fw-bold mb-5">Subscribe to receive updates!</h2>
                        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row input-group-newsletter">
                                <div className="col">
                                  <input className="form-control bg-whitish font-weight-bold" id="emailAddress" type="email" 
                                    placeholder="Enter email address..." aria-label="Enter email address..." 
                                    data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn btn-light p-3 font-weight-bold" 
                                    id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*  Contact */}
        <section className="contact-section bg-whitish pb-5">
            <div className="container px-4 px-lg-5 pb-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-dark text-white">
                            <div className="card-body text-center">
                               {/* <i className="fas fa-map-marked-alt mb-2"></i>*/}
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-white-50">Marulas, Valenzuela City, Philippines</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-dark text-white ">
                            <div className="card-body text-center">
                                {/*<i className="fas fa-envelope mb-2"></i>*/}
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div><a className="small text-white-50" href="#!">
                                  know-your-neighborhood@.com</a></div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-dark text-white ">
                            <div className="card-body text-center">
                                {/*<i className="fas fa-mobile-alt mb-2"></i>*/}
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-white-50">+639754447651</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
      );
    }
  }
  
  export default Home;