import React, { Component } from 'react'
import '../styles/carousel.css';

class Carousel extends Component {
    render() {
        return (
            <div>
                <section className="carousel">
                    <div id="carouselExampleIndicators" className="carousel slide slide hero-slides" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/images/srh2.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/srh3.png" alt="Second slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section id="about">
                    <div className="container-fluid">
                        <div className="row section-title justify-content-center">
                            <div className="col-md-7 img-responsive">
                                <img className=" about-img" src="/images/srh2.jpg" />
                            </div>
                            <div className="col-md-5 text-center about-col-right">
                                {/* <h2 className="about-title-heading">About Us</h2> */}
                                <p className="about-text">Sto. Rosario Hospital strives to be the premiere local healthcare provider to residents of
                            its service area within Rosario and neighboring municipalitiess.</p>
                                <button className="btn">Learn More</button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Carousel
