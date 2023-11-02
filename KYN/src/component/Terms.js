import React, { Component } from 'react';

class Terms extends Component { 

  render() {
    return (
    <section className="page-section mb-0" id="terms" style={{marginTop: "150px"}}>
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">Terms and Conditions</h2>
            <div className="divider-custom-terms divider-light-terms">
                <div className="divider-custom-line-terms"></div>
                <div className="divider-custom-icon-terms"><i className="fa fa-book-open" aria-hidden="true"></i></div>
                <div className="divider-custom-line-terms"></div>
            </div>
            <div className="row text-white"> 
                <div className="col-lg-12">
                <div className="lead text-justify ">
                <p>
                The Know Your Neighborhood website and any services provided by Know Your Neighborhood are subject to the following terms and conditions, 
                referred to as the "Terms." Acceptance of these Terms is shown by your usage of the Website. You are not permitted to use the Website if you disagree with any part of these 
                Terms.
                </p>
                <h6 className='display-6 fw-bolder mt-3'>Accessing the Website</h6>
                <p> 

                    1. Acceptance: By using our website, you agree to comply with these terms and conditions.<br></br>

                    2. User Responsibilities: Users are responsible for their actions on the website and must follow all applicable laws and regulations.<br></br>

                    3. Privacy: We respect your privacy. Please review our privacy policy to understand how we handle your data.<br></br>

                    4. Content: Users are responsible for the content they post on the website. Offensive or inappropriate content is prohibited.<br></br>

                    5. Intellectual Property: All website content is protected by copyright. Users must obtain permission for any use beyond personal browsing.<br></br>

                    6. Liability: We are not responsible for any damages or losses resulting from the use of our website.<br></br>

                    7. Changes: We may update these terms at any time, and it is your responsibility to stay informed about any changes.<br></br>

                    8. Termination: We reserve the right to terminate or restrict access to our website for any reason.<br></br>


                </p>
                
                
               
               
                </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Terms;