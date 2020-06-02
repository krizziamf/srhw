const routes = require('express').Router();
const { getDoctors, setDoctor } = require('../controller/Doctor.controller');


routes.post('/doctor', (req, res) => {
    return setDoctor(req).then(result => {
        console.log("res", result);
        res.statusCode = 200;
        res.send(result);
    }).catch(err => {
        res.statusCode = 400;
        res.send()
    })
})


routes.get('/doctor', (req, res) => {
    return getDoctors().then(result => {
        res.statusCode = 200;
        res.send(result);
    }).catch(err => {
        res.statusCode = 400;
        res.send()
    })
})

module.exports = routes


//ito yung tatawagin sa FE