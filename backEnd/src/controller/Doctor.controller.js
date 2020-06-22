const { createDoctor, findDoctor, findDoctorById } = require('../model/doctors.model')

let setDoctor = (req) => {
    return new Promise((resolve, reject) => {
        createDoctor(req.body, (err, res) => {
            if (err) reject();
            else {
                resolve(res)
            }
        });
    })
}

let getDoctors = (req) => {
    return new Promise((resolve, reject) => {
        let data = findDoctor();
        if (data) {
            resolve(data);
        } else {
            reject();
        }
    })
}

/////////
let getDoctorById = (req) => {
    return new Promise((resolve, reject) => {
        let data = findDoctorById(req);
        if (data) {
            resolve(data);
        } else {
            reject();
        }
    })
}

module.exports = {
    setDoctor: setDoctor,
    getDoctors: getDoctors,
    getDoctorById: getDoctorById
}