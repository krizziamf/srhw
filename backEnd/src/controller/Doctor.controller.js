const { createDoctor, findDoctor } = require('../model/doctors.model')

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

module.exports = {
    setDoctor: setDoctor,
    getDoctors: getDoctors
}