const mongoose = require('mongoose');
const stringRequired = {
  type: String,
  required: true
};
let doctorSchema = new mongoose.Schema({
  doctorName: stringRequired
});
let Doctors = mongoose.model('Doctors', doctorSchema);

let doctorsCollection = () => {
  Doctors.createCollection().then(res => {
    console.log(new Date(), 'Collection Doctors Created');
  }, err => {
    throw err;
  });
}

let createDoctor = (payload, cb) => {
  return Doctors.create(payload, (err, docs) => {
    if (err) {
      console.error(err);
      return cb(err);
    } else {
      return cb(null, docs._id);
    }
  })
}

let findDoctor = () => {
  return Doctors.find({}, (err, docs) => {
    if (err) {
      console.error(err);
      return;
    } else {
      return docs;
    }
  })
}

module.exports = {
  doctorsCollection: doctorsCollection,
  createDoctor: createDoctor,
  findDoctor: findDoctor
}