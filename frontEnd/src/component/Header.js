import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/nav.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top srh-navbar">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto  nav-fill w-100">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/ancilliaries">Ancillaries</a>
                                    <a className="dropdown-item" href="/department_and_units">Department and Units</a>

                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/find_a_doctor">Find a Doctor</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Patient Guide
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/admission">Admission</a>
                                    <a className="dropdown-item" href="/philhealth_requirements">Philhealth Requirements</a>
                                    <a className="dropdown-item" href="/rooms">Rooms</a>
                                    <a className="dropdown-item" href="/health_maintenance_organizations">Health Maintenance Organizations</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/careers">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/latest_events">Latest Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
