import React, { Component } from 'react';
import '../styles/contact.css';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row section-title justify-content-center">
                        <h2 className="contact-title-heading">Contact US</h2>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Enter your name" />
                                        </div>
                                        <div className="col">
                                            <input type="email" className="form-control" placeholder="Enter your email address" />
                                        </div>
                                    </div>
                                    <div className="form-group mt-4">
                                        <textarea className="form-control" rows="10" placeholder="Enter your message" />
                                    </div>
                                    <button type="submit" className="btn btn-contact mt-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact