import React, { Component } from 'react'
import '../styles/about.css';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container-fluid">
                    <div className="row section-title justify-content-center">
                        <div className="col-md-7 img-responsive">
                            <img className=" about-img" src="/images/srh2.jpg" />
                        </div>
                        <div className="col-md-5 text-center about-col-right">
                            {/* <h2 className="about-title-heading">About Us</h2> */}
                            <p className="about-text">Sto. Rosario Hospital strives to be the premiere local healthcare provider to residents of
                            its service area within Rosario and neighboring municipalities.</p>
                            <button className="btn">Learn More</button>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default About
