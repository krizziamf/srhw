const routes = require('express').Router();
const { getTime, setTime, getTimeID } = require('../controller/Time.controller');//

//insert time from postman
routes.post('/time', (req, res) => {
    // console.log("route POST "+ result)//
    return setTime(req).then(result => {
        console.log("res", result);
        res.statusCode = 200;
        res.send(result);
    }).catch(err => {
        res.statusCode = 400;
        res.send()
    })
})

routes.get('/time', (req, res) => {
    return getTime().then(result => {
        res.statusCode = 200;
        res.send(result);
    }).catch(err => {
        res.statusCode = 400;
        res.send()
    })
})

// routes.get('/time/:id', (req, res) => {
//     return getTimeID(req.params.id).then(result => {
//         res.statusCode = 200;
//         res.send(result);
//     }).catch(err => {
//         res.statusCode = 400;
//         res.send("error")
//     })

// })

module.exports = routes

//ito yung tatawagin sa FE