import React, { Component } from 'react'
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row section footer-row">
                        <div className="col-sm-12 col-md-5 col-lg-3 col-xl-4 col-about">
                            <h3 className="small-title">About Us</h3>
                            <hr className="hr-left" />
                            <p>Sto. Rosario Hospital (SRH) is a community hospital dedicated to providing quality, value driven health care to all it serves.</p>
                            <div className="footer-div"><i className="fa fa-map-marker"></i> 130 Escano St. Rosario, Batangas 4225</div>
                            <div className="footer-div"><i className="fa fa-phone"></i>  043 321 3988 / 09328436537</div>
                            <div className="footer-div"><i className="fa fa-envelope"></i>  sntrosario@yahoo.com</div>

                        </div>
                        <div className="col-links col-sm-12 col-md-3 col-lg-3 col-xl-2">
                            <h3 className="footer-text small-title">Links</h3>
                            <hr className="hr-left" />
                            <ul className="menu">
                                <li><a href="/page_under_construction">About Us</a></li>
                                <li><a href="/page_under_construction">Services</a></li>
                                <li><a href="/page_under_construction">Find a Doctor</a></li>
                                <li><a href="/page_under_construction">Patient Guide</a></li>
                                <li><a href="/page_under_construction">Careers</a></li>
                                <li><a href="/page_under_construction">Latest Events</a></li>
                                <li><a href="/page_under_construction">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2 col-xl-3">
                            <div className="footer-text social-footer">
                                <h3 className="small-title">Connect with us </h3>
                                <hr className="hr-left" />
                                <div className="div-fa"><a href="https://www.facebook.com/OfficialSRH1987/?ref=br_rs" target="_blank"><i className="fa fa-facebook icon-round"></i></a></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 footer__col">
                            <img src="images/logo1.jpg" className="footer-logo" />
                        </div>
                    </div>
                </div>

                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>© 2020 Sto. Rosario Hospital. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer
