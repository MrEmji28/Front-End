import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
    <section className="page-section mb-0" id="terms" style={{marginTop: "150px"}}>
        <div className="container">
        <div className="row">
        <h2 className="page-section-heading text-center text-uppercase text-white">Contact us</h2>
        <div className="divider-custom-contact divider-light-contact mt-3">
            <div className="divider-custom-line-contact"></div>
            <div className="divider-custom-icon-contact"><i className="fa fa-mobile" aria-hidden="true"></i></div>
            <div className="divider-custom-line-contact"></div>
        </div>
        {/*<p className="lead mb-0 text-center text-white">
            Do you have any questions? Please do not hesitate to contact us directly.
    Our team will come back to you within a matter of hours to help you.</p>*/}
        <div className="col-lg-12 mx-auto mt-3 embed-responsive embed-responsive-21by9 rounded">
        <iframe
            className="embed-responsive-item container-fluid mx-auto"
            style={{ border: "0" }}
            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.580838062444!2d120.9841865!3d14.676064949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b41e8cd96f11%3A0xbbae9e3bdb2ff407!2sMarulas%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1698661501162!5m2!1sen!2sph"
            title="Google Maps"
            width="1000"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        </div>
        {/*<section className="signup-section pt-5 pb-0" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center sign-up">
                        <i className="far fa-paper-plane fa-2x mb-2 text-black"></i>
                        <h2 className="text-black fw-bold mb-5">Subscribe to receive updates!</h2>
                        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row input-group-newsletter">
                                <div className="col">
                                  <input className="form-control bg-whitish" id="emailAddress" type="email" 
                                    placeholder="Enter email address..." aria-label="Enter email address..." 
                                    data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn btn-dark p-3" 
                                    id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</section>*/}
        {/*  Contact */}
        <section className="contact-section bg-whitish pb-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-black text-white">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-white-50">Marulas, Valenzuela City, Philippines</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-black text-white ">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div><a className="small text-white-50" href="#!">
                                  know-your-neighborhood@.com</a></div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100 bg-black text-white ">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-white-50">+639754447651</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div> 
    </section>
    );
  }
}

export default Contact;