import React, { Component } from 'react'
import '../styles/about.css';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row section-title justify-content-center">
                        <h2 className="about-title-heading">About Us</h2>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-5 text-center">
                            <h3>Mission</h3>
                            <p className="about-text">Sto. Rosario Hospital (SRH) is a community hospital dedicated to providing quality, value driven health care to
                             all it serves. Individuals and their families within the communities are assured access to quality health care regardless of ability
                              to pay.

                                SRH is committed to the service of excellence and continuous quality performance improvement. As a community healthcare services provider
                                , it remains attentive to the health and well-being of those it serves through education, outreach, and other innovative services. At the
                                 same time, it values integrity and holds firm to confidentiality of all data gathered from every patient.
                            </p>
                        </div>
                        <div className="col-md-5 text-center">
                            <h3>Vision</h3>
                            <p className="about-text">Sto. Rosario Hospital strives to be the premiere local healthcare provider to residents of
                            its service area within Rosario and neighboring municipalities.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 text-center">
                            <h3>History</h3>
                            <p>Sto. Rosario Hospital (SRH) was established 30 years ago by Dr. Gil and Aurea Maderazo from humble beginnings.</p>
                            <p>In 1987, Dr Gil and Aurea Maderazo who were then fresh graduates from medical school, started their clinical
                            practice at Caguimbal Hospital. They were given a 2-year contract to manage the hospital. Six months prior to
                            the expiration of the said contract, they bought the 811 m2 lot where the original building stands. In I989, they
                        transferred from Caguimbal to the original building of SRH. The hospital started with 10 beds. </p>
                            <p>In 1996, renovations extended the hospital into accommodating 25-30 beds. Only a 20-bed capacity was applied
                            due to personnel requirements most especially nurses.</p>
                            <p>In 2006, a major renovation changed the facade of the hospital still retaining a 20-bed capacity. The hospital
                                continued its service to the town of Rosario. </p>
                            <p>In 2015, a 800 m2 lot adjacent to the hospital was brought for the plan of another extension. May 2, 2015 marked
                            the ground-breaking ceremony of the annex building heralded by the owners with Engineer Medina - the head of construction.</p>
                            <p>In September 7, 2017, the hospital opened the annex building. The hospital can now accommodate 60-70 beds located at the 
                                2nd, 4th and 5th floors.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
