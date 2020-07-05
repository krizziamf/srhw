import React, { Component } from 'react'
import '../styles/nav.css';
import { Link } from "react-router-dom";

class TopBar extends Component {
    render() {
        return (
            <div className="container topbar-container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-5 topbar-col1">
                        <Link to="/bookappointment"> </Link>
                        <div className=""><a className="navbar-brand">
                            <span><img src="./images/logo2.jpg" width="95px;" height="65px" /></span>
                        </a>
                            <span className="navbar-text">STO. ROSARIO HOSPITAL</span>
                        </div>

                    </div>
                    <div className="btn-col col-sm-12 col-md-4 col-lg-5 col-xl-7 topbar-col2">
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-envelope"></i> sntrosario@yahoo.com </li>
                            <li className="list-inline-item"><i className="fa fa-phone"></i> 043 321 3988 / 09328436537</li>
                            <li className="list-inline-item"><Link to="/bookappointment"><button type="button" className="btn btn-outline-primary">Book an Appointment</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default TopBar
