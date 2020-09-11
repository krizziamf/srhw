import React, { Component } from 'react'
import '../styles/requestSent.css';

export class ThankYouPage extends Component {
    render() {
        return (
            <div className="container">
                <div class="card">
                    <div class="card-header">
                        <h2><i class="fa fa-check-circle-o" aria-hidden="true"></i> Naitala na ang iyong tugon.</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">I-click ang link sa ibaba. Basahin
                        mabuti at sagutan ang Informed Consent
                        Form. Ito ay kinakailangan bago makapagkonsulta thru
                        SRH Teleconsult.</p>
                        <br />
                        <a href="https://form.jotform.com/202520795759464" target="_blank">SRH Teleconsult Informed Consent</a>
                        <br />
                        <br />
                        <p class="card-text">    I-check ang iyong email para sa confirmation message at
                        iba pang paalala.</p>
                        <br />
                        <p>Maraming Salamat!</p>
                    </div>
                </div>



            </div >
        )
    }
}

export default ThankYouPage
