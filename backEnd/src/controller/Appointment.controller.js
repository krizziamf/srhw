// const { createAppointment, findAppointment, findAppointmentOfDoctor } = require('../model/appointment.model');
const { createAppointment, findAppointment } = require('../model/appointment.model');
const { sendEmail } = require('../utils/utils');
const { getDoctorById } = require('./Doctor.controller');

//(2)
let setAppointment = (req) => {
  return new Promise((resolve, reject) => {

    createAppointment(req.body, (err, res) => {
      if (err) reject();
      else {
        const bday = new Date(req.body.birthday);
        const bdayString = bday.toDateString();
        const time = new Date(req.body.preferredTime)
        const convertedTime = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); 
        const date = new Date(req.body.preferredDate);
        const dateString = date.toDateString();
        
        resolve("Thank you! Your request has been sent."); 
        getDoctorById(req.body.doctor).then(response => {
          let form = Object.assign(req.body, { birthday: bdayString, doctor: response.doctorName, preferredDate: dateString, preferredTime: convertedTime, subject: 'New Appointment', receiver: 'bajfev@luxusmail.ga' });//srhonlinemds@gmail.com
          sendEmail(form, 'newAppointment'); 
        })
      }
    });
  })
}

let getAppointments = (req) => {
  return new Promise((resolve, reject) => {
    let data = findAppointment();
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  })
}

// let getAppointmentOfDoctor = (req) => {
//   return new Promise((resolve, reject) => {
//     let data = findAppointmentOfDoctor(req);
//     if (data) {
//       console.log("getAppointmentOfDoctor "+data)
//       resolve(data);
//     } else {
//       reject();
//     }
//   })
// }

module.exports = {
  setAppointment: setAppointment,
  getAppointments: getAppointments
  // getAppointmentOfDoctor: getAppointmentOfDoctor
}


//lalagay ng business logic. Ito yung connection ng routes at model