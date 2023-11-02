import React, { Component } from 'react';
import testimonials1 from '../assets/images/testimonials-1.jpg'
import testimonials2 from '../assets/images/testimonials-2.jpg'
import testimonials3 from '../assets/images/testimonials-3.jpg'

class About extends Component {

  render() {
    return (
    <>
    <section className="page-section pt-0 mb-0 pb-0 " id="terms" style={{marginTop: "150px"}}>
        <section className="page-section mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-users"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                      <p className="lead text-justify text-white">At Know Your Neighborhood, our mission is to connect and empower communities by providing a central platform that celebrates, 
                      supports, and promotes local businesses. We aim to foster a strong sense of unity, helping individuals discover the hidden treasures within their neighborhood while 
                      encouraging economic growth and prosperity.</p></div>
                    <div className="col-lg-4 me-auto">
                      <p className="lead text-justify text-white">Our vision is to become the go-to destination for all things local, where residents and businesses come together to create 
                      vibrant, thriving communities. We envision a future where Know Your Neighborhood is the catalyst for revitalizing neighborhoods, fostering local entrepreneurship, and 
                      instilling a deep appreciation for the unique character and charm of every locality.</p></div>
                </div>
            </div>
        </section>
    </section>
    <section className="testimonials text-center pt-5">
        <div className="container">
            <h2 className="mb-5 text-white">What people are saying...</h2>
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-3 bg-dark rounded-4 text-white me-4 p-3">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={testimonials1} alt="person 1" />
                        <h5>Kim S.</h5>
                        <p className="font-weight-light mb-0">"Know Your Neighborhood has revolutionized the way I explore my community. It's like having the pulse of the town at my fingertips,
                         making every local shopping experience a breeze."</p>
                    </div>
                </div>
                <div className="col-lg-3 bg-dark rounded-4 text-white me-4 p-3">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={testimonials2} alt="person 2" />
                        <h5>Kim D.</h5>
                        <p className="font-weight-light mb-0">"Know Your Neighborhood is an absolute must-have for anyone who loves shopping locally. I've found all my favorite spots and even 
                        some new ones, all in one place. It's a fantastic resource."</p>
                    </div>
                </div>
                <div className="col-lg-3 bg-dark rounded-4 text-white p-3">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={testimonials3} alt="person 3" />
                        <h5>Hamabe M.</h5>
                        <p className="font-weight-light mb-0">"I can't believe I ever shopped without Know Your Neighborhood. It's so user-friendly, and I've found so many incredible stores 
                        I didn't know about. It's like a treasure map for my town."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
  }
}

export default About;