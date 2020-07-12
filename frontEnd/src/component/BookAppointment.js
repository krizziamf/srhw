import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../styles/bookAppt.css';
import 'react-datepicker/dist/react-datepicker.css';
import { setMinutes, setHours } from "date-fns";
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
            payment: '',
            selectedDate: '',
            doctorTime: [],
            filteredDoctorTime: [],
            doctorAppointments: [],
            filteredDoctorAppointment: [],
            initDate: new Date(),
            disablePreferredDate: true,
            minimumTime: '',
            maximumTime: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getDoctorNames = this.getDoctorNames.bind(this);
    }

    componentDidMount() {
        this.getDoctorNames();
        this.getDoctorTime();
        this.getDoctorAppointments();
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

    doctorChange = event => {
        const filterTime = this.state.doctorTime.filter(time => {
            return time.doctor === event.target.value
        });
        // this.getAppointment(event.target.value);

        const filterAppointment = this.appointments(event.target.value);

        this.setState({
            doctor: event.target.value,
            preferredDate: '',  //set to empty when choosing again a doctor
            preferredTime: '',  //set to empty when choosing again a doctor
            filteredDoctorTime: filterTime,
            disablePreferredDate: false,
            filteredDoctorAppointment: filterAppointment
        })
    }

    appointments = (doctorId) => {
        const filterAppointment = this.state.doctorAppointments.filter(appointment => {
            return appointment.doctor === doctorId
        });
        return filterAppointment;
    }

    // getAppointment = (doctorId) => {
    //     console.log("GET APPOINTMENT");
    //     axios.get(`/appointment/${doctorId}`)
    //         .then( res => this.setState({ appointments: res.data}))
    //         .catch( err => console.log("ERROR "+err))
    // }

    dateChange = date => {

        var newDate = date.toDateString();
        const start = this.state.filteredDoctorTime[0].timeStart;
        const end = this.state.filteredDoctorTime[0].timeEnd;

        const getMinTime = this.minMaxTime(date, start);
        const getMaxTime = this.minMaxTime(date, end);

        this.setState({
            preferredDate: date,
            preferredTime: '',
            minimumTime: getMinTime,
            maximumTime: getMaxTime,
            selectedDate: newDate,
            initDate: date
        })
    }

    minMaxTime = (date, timeStartEnd) => {
        var newDate = date.toDateString();

        const time = new Date(`${newDate} ${timeStartEnd}`);
        const minHour = time.getHours();
        const minMinute = time.getMinutes();

        return setHours(setMinutes(date, minMinute), minHour)
    }

    timeChange = date => {
        console.log("nasa timechange to")
        const newTime = new Date(`${this.state.selectedDate} ${date.getHours()}:${date.getMinutes()}`)

        this.setState({
            preferredTime: newTime
        })
    }

    excludeTime = (date) => {
        let newDate = new Date(date);
        let excludeDoctorTime = []

        this.state.filteredDoctorAppointment.map(appointment => {
            let appointmentDate = new Date(appointment.preferredTime);// from 2020-06-30T02:15:00.000Z to 
            const dateString = date.toDateString();
            const appDateString = new Date(appointment.preferredDate).toDateString();

            if (appDateString === dateString) {
                excludeDoctorTime.push(setHours(setMinutes(appointmentDate, appointmentDate.getMinutes()), appointmentDate.getHours()))
            }
            if (this.state.doctor === "5ef758f6aa008b0f0f4ca017") {
                excludeDoctorTime.push(setHours(setMinutes(newDate, 0), 12));
                excludeDoctorTime.push(setHours(setMinutes(newDate, 20), 12));
                excludeDoctorTime.push(setHours(setMinutes(newDate, 40), 12));
                excludeDoctorTime.push(setHours(setMinutes(newDate, 0), 13));
                excludeDoctorTime.push(setHours(setMinutes(newDate, 20), 13));
                excludeDoctorTime.push(setHours(setMinutes(newDate, 40), 13));
            }

        })



        return excludeDoctorTime;
    }

    handleSubmit = event => {
        // console.log(preferredTime);
        // console.log(preferredDate);
        alert(`Thank you! Your request has been sent. `);
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
        }, console.log("Preferred: " + preferredDate, preferredTime))
            .then(res => this.setState({ text: res.data }))
            .catch(err => console.log(err))


        this.setState({
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
            complaint: '',
            patient: '',
            preferredDate: '',
            preferredTime: '',
            payment: '',
            disablePreferredDate: true
        });
    }

    getDoctorNames = () => {
        // console.log(this.state.doctorNames);
        axios.get('/doctor')
            .then((response) => {
                // console.log(response.data);
                this.setState({ doctorNames: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getDoctorTime = () => {
        // console.log("GET TIME");
        axios.get('/time')
            // .then( res => console.log(res.data))
            .then(res => this.setState({ doctorTime: res.data }))
            .catch(err => console.log("ERROR: " + err))
    }

    getDoctorAppointments = () => {
        // console.log("GET APPOINTMENT");
        axios.get('/appointment')
            .then(res => this.setState({ doctorAppointments: res.data }))
            .catch(err => console.log("ERROR " + err))
    }

    isNotSunday = (date) => {
        const day = date.getDay();
        return day !== 0
    }



    render() {
        const { minimumTime, maximumTime, initDate, firstname, lastname, middlename, age, birthday, gender, address, email, contact, appointment, doctor, doctorNames, complaint, patient, preferredDate, preferredTime, payment, minHour, minMinute, maxHour, maxMinute } = this.state;

        return (

            <div className="container">
                <h4>Book an Appointment Form</h4>

                <form onSubmit={this.handleSubmit} data-aos="fade-up" data-aos-duration="1000">
                    <div className="read-div">
                        <p><sup className="small">*</sup>Please click <a href="#" data-toggle="modal" data-target="#exampleModalLong">here</a> for the detailed Sto. Rosario Hospital privacy statement.</p>
                    </div>
                    <div className="modal fade bd-example-modal-lg" id="exampleModalLong" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">CONSENT FORM FOR TELECONSULTATION</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Privacy />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h5>Client's Information</h5>
                            <div className="form-group">
                                <label>First Name <sup className="small">*</sup></label>
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    name="firstname"
                                    value={firstname}
                                    onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Last Name <sup className="small">*</sup></label>
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    name="lastname"
                                    value={lastname}
                                    onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Middle Name </label>
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    name="middlename"
                                    value={middlename}
                                    onChange={this.handleChange}
                                    id="middle_name" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4 mb-3">
                                    <label>Birthday <sup className="small">*</sup></label>
                                    <DatePicker
                                        required
                                        className="form-control form-control-sm"
                                        selected={birthday}
                                        onChange={this.birthdayChange}
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        maxDate={new Date()}
                                        dateFormat="MMMM d, yyyy"
                                    />
                                </div>
                                <div className="form-group col-md-4 mb-3">
                                    <label>Age <sup className="small">*</sup></label>
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        name="age"
                                        value={age}
                                        onChange={this.handleChange}
                                        id="age" required />
                                </div>
                                <div className="form-group col-md-4 mb-3">
                                    <label>Gender <sup className="small">*</sup></label>
                                    <select
                                        required
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
                                <label>Home Address <sup className="small">*</sup></label>
                                <textarea
                                    className="form-control form-control-sm"
                                    name="address"
                                    value={address}
                                    onChange={this.handleChange}
                                    cols="40" required></textarea>
                            </div>
                            <div className="form-group">
                                <label>Email <sup className="small">*</sup></label>
                                <input required
                                    className="form-control form-control-sm"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    id="email" />
                            </div>
                            <div className="form-group">
                                <label>Contact Number <sup className="small">*</sup></label>
                                <input
                                    className="form-control form-control-sm"
                                    type="tel"
                                    maxLength="11"
                                    name="contact"
                                    value={contact}
                                    onChange={this.handleChange}
                                    id="contactnum" required />
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 apt-col">
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
                                    // onChange={this.handleChange}>
                                    onChange={this.doctorChange}>
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
                                            filterDate={this.isNotSunday}
                                            dateFormat="MMMM d, yyyy"
                                            disabled={this.state.disablePreferredDate}
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
                                            // minDate={preferredDate}
                                            timeIntervals={20}
                                            minTime={minimumTime}
                                            maxTime={maximumTime}
                                            // maxDate={preferredDate}
                                            excludeTimes={this.excludeTime(initDate)}
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
                    <p><sup className="small">*</sup> By filling out this online form and continuing to use this website, you agree to the hospital's processing of your personal information as explained in the privacy statement through link provided above. </p>
                </form>
            </div>
        )
    }
}

export default BookAppointment
