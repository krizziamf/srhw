import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../styles/bookAppt.css';
import 'react-datepicker/dist/react-datepicker.css';
import Privacy from './Privacy';

class BookAppointment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            middlename: '',
            age: '',
            birthday: '',
            gender: '',
            address: '',
            email: '',
            contact: '',
            appointment: '',
            doctor: '',
            doctorNames: [],
            complaint: '',
            patient: '',
            preferredDate: '',
            preferredTime: '',
            payment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getDoctorNames = this.getDoctorNames.bind(this);
    }

    componentDidMount() {
        this.getDoctorNames();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    birthdayChange = date => {
        this.setState({
            birthday: date

        })
    }
    dateChange = date => {
        this.setState({
            preferredDate: date
        })
    }

    timeChange = date => {
        this.setState({
            preferredTime: date
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const { firstname, lastname, middlename, age, birthday, gender, address, email, contact, appointment, doctor, complaint, patient, preferredDate, preferredTime, payment } = this.state;

        axios.post('/appointment', {
            firstname,
            lastname,
            middlename,
            age,
            birthday,
            gender,
            address,
            email,
            contact,
            appointment,
            doctor,
            complaint,
            patient,
            preferredDate,
            preferredTime,
            payment
        })
            .then(res => this.setState({ text: res.data }))
            .catch(err => console.log(err))
    }

    getDoctorNames = () => {
        console.log(this.state.doctorNames);
        axios.get('/doctor')
            .then((response) => {
                console.log(response.data);
                this.setState({ doctorNames: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const { firstname, lastname, middlename, age, birthday, gender, address, email, contact, appointment, doctor, doctorNames, complaint, patient, preferredDate, preferredTime, payment } = this.state;
        return (

            <div className="container">
                <h4>Book an Appointment Form</h4>
                <div className="read-div">
                    <p>* Please click <a href="#" data-toggle="modal" data-target="#exampleModalLong">here</a> for the detailed Sto. Rosario Hospital privacy statement.</p>
                </div>
                <div class="modal fade bd-example-modal-lg" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">CONSENT FORM FOR TELECONSULTATION</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Privacy />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} data-aos="fade-up" data-aos-duration="2000">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h5>Client's Information</h5>
                            <div className="form-group">
                                <label>First Name <sup className="small">*</sup></label>
                                <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    name="firstname"
                                    value={firstname}
                                    onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Last Name <sup className="small">*</sup></label>
                                <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    name="lastname"
                                    value={lastname}
                                    onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Middle Name </label>
                                <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    name="middlename"
                                    value={middlename}
                                    onChange={this.handleChange}
                                    id="middle_name" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4 mb-3">
                                    <label>Birthday<sup className="small">*</sup></label>
                                    <DatePicker
                                        required
                                        className="form-control form-control-sm"
                                        selected={birthday}
                                        onChange={this.birthdayChange}
                                        // peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        maxDate={new Date()}
                                        filterDate={this.isWeekday}
                                        dateFormat="MMMM d, yyyy"
                                    />
                                </div>
                                <div className="form-group col-md-4 mb-3">
                                    <label>Age <sup className="small">*</sup></label>
                                    <input
                                        class="form-control form-control-sm"
                                        type="text"
                                        name="age"
                                        value={age}
                                        onChange={this.handleChange}
                                        id="age" required />
                                </div>
                                <div className="form-group col-md-4 mb-3">
                                    <label>Gender <sup className="small">*</sup></label>
                                    <select required
                                        className="form-control form-control-sm"
                                        name="gender"
                                        value={gender}
                                        onChange={this.handleChange} >
                                        <option value="">Select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>


                            <div className="form-group">
                                <label>Home Address: <sup className="small">*</sup></label>
                                <textarea
                                    className="form-control form-control-sm"
                                    name="address"
                                    value={address}
                                    onChange={this.handleChange}
                                    cols="40" required></textarea>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    class="form-control form-control-sm"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    id="email" />
                            </div>
                            <div className="form-group">
                                <label>Contact Number <sup className="small">*</sup></label>
                                <input
                                    class="form-control form-control-sm"
                                    type="tel"
                                    maxlength="11"
                                    name="contact"
                                    value={contact}
                                    onChange={this.handleChange}
                                    id="contactnum" required />
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h5>Appointment Information</h5>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label>Type of Appointment  <sup className="small">*</sup></label>
                                    <select required
                                        className="form-control form-control-sm"
                                        name="appointment"
                                        value={appointment}
                                        onChange={this.handleChange}>
                                        <option value="">Select Type</option>
                                        <option value="Consultation">Consultation</option>
                                        <option value="Follow-up">Follow-up</option>
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <label>Type of Patient  <sup className="small">*</sup></label>
                                    <select required
                                        className="form-control form-control-sm"
                                        name="patient"
                                        value={patient}
                                        onChange={this.handleChange}>
                                        <option value="">Select Type</option>
                                        <option value="New Patient">New Patient</option>
                                        <option value="Old Patient">Old Patient</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Name of Doctor <sup className="small">*</sup></label>
                                <select required
                                    className="form-control form-control-sm"
                                    name="doctor"
                                    value={doctor}
                                    onChange={this.handleChange}>
                                    <option value="">Select Doctor</option>
                                    {doctorNames.map((data, index) => {
                                        return <option value={data._id} key={index}>{data.doctorName}</option>
                                    })}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Complaint  <sup className="small">*</sup></label>
                                <textarea
                                    className="form-control form-control-sm"
                                    name="complaint"
                                    value={complaint}
                                    onChange={this.handleChange}
                                    cols="40" required></textarea>
                            </div>
                            <div className="form-group ">
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label>Preferred Date  <sup className="small">*</sup></label>
                                        <DatePicker
                                            required
                                            className="form-control form-control-sm"
                                            selected={preferredDate}
                                            onChange={this.dateChange}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            minDate={new Date()}
                                            filterDate={this.isWeekday}
                                            dateFormat="MMMM d, yyyy"
                                        />
                                    </div>

                                    <div className="form-group col">
                                        <label>Preferred Time <sup className="small">*</sup></label>
                                        <DatePicker
                                            required
                                            className="form-control form-control-sm"
                                            selected={preferredTime}
                                            onChange={this.timeChange}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Mode of Payment <sup className="small">*</sup></label>
                                <select required
                                    className="form-control form-control-sm"
                                    name="payment"
                                    value={payment}
                                    onChange={this.handleChange}
                                >
                                    <option value="">Select Payment</option>
                                    <option value="GCash">GCash</option>
                                    <option value="PayMaya">PayMaya</option>
                                </select>
                            </div>
                            <button className="btn btn-primary">Submit</button>
                            <p>{this.state.text}</p>
                        </div>
                    </div>
                    <p>* By filling out this online form and continuing to use this website, you agree to the hospital's processing of your personal information as explained in the privacy statement through link provided above. </p>
                </form>
            </div>
        )
    }
}

export default BookAppointment
