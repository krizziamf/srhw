import React, { Component } from 'react'
import '../styles/nav.css';
import { Link } from "react-router-dom";

class TopBar extends Component {
    render() {
        return (
            <div className="container topbar-container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <Link to="/bookappointment"><a className="navbar-brand">
                            <img src="./images/logo2.jpg" width="95px;" height="65px" />
                            STO. ROSARIO HOSPITAL
                        </a></Link>
                    </div>
                    <div class="btn-col col-sm-12 col-md-6 col-lg-8">
                        <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-envelope"></i> sntrosario@yahoo.com </li>
                            <li class="list-inline-item"><i class="fa fa-phone"></i> 043 321 3988 / 09328436537</li>
                            <li class="list-inline-item"><Link to="/bookappointment"><button type="button" class="btn btn-outline-primary">Book an Appointment</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default TopBar
