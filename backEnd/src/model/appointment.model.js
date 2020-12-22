const mongoose = require('mongoose');
const date = new Date();
const stringRequired = {
  type: String,
  required: true
};
const numberRequired = {
  type: Number,
  required: true
};
let appointmentSchema = new mongoose.Schema({
  firstname: stringRequired,
  lastname: stringRequired,
  middlename: String,
  age: numberRequired,
  birthday: stringRequired,
  gender: stringRequired,
  address: stringRequired,
  email: String,
  contact: stringRequired,
  appointment: stringRequired,
  doctor: stringRequired,
  complaint: stringRequired,
  patient: stringRequired,
  preferredDate: stringRequired,
  preferredTime: stringRequired,
  payment: stringRequired,
  hmo: String
})
let Appointments = mongoose.model('Appointments', appointmentSchema);

let createAppointmentsCollection = () => {
  Appointments.createCollection().then(res => {
    console.log(date, 'Collection Appointment Created');
  }, err => {
    throw err;
  });
}
let createAppointment = (payload, cb) => {
  return Appointments.create(payload, (err, docs) => {
    if (err) {
      return cb(err);
    } else {
      return cb(null, docs._id);
    }
  });
}

let findAppointment = () => {
  return Appointments.find({}, (err, docs) => {
    if (err) {
      console.error(err);
      return;
    } else {
      return docs;
    }
  })
}

// let findAppointmentOfDoctor = (id) => {
//   let doctorId = {doctor: id}
//   return Appointments.find(doctorId, (err, docs) => {
//     if (err) {
//       console.error(err);
//       return;
//     } else {
//       console.log("findAppointmentOfDoctor "+docs)
//       return docs;
//     }
//   })
// }


module.exports = {
  createAppointmentsCollection: createAppointmentsCollection,
  createAppointment: createAppointment,
  findAppointment: findAppointment
  // findAppointmentOfDoctor: findAppointmentOfDoctor
}


//model ay para sa db. lahat ng tungkol sa db