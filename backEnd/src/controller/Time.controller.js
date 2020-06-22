const { createTime, findTime, findTimeID } = require('../model/time.model')

let setTime = (req) => {
    return new Promise((resolve, reject) => {
        createTime(req.body, (err, res) => {
            if (err) reject();
            else {
                resolve(res)
            }
        });
    })
}

let getTime = () => {
    return new Promise((resolve, reject) => {
        let data = findTime();
        if (data) {
            resolve(data);
        } else {
            reject();
        }
    })
}

// let getTimeID = (req) => {
//     return new Promise((resolve, reject) => {
//         let data = findTime(req);
//         if (data) {
//             resolve(data);
//         } else {
//             reject();
//         }
//     })
// }

module.exports = {
    setTime: setTime,
    getTime: getTime
    // getTimeID: getTimeID
}