const mongoose = require('mongoose');
const stringRequired = {
  type: String,
  required: true
};
let timeSchema = new mongoose.Schema({
    timeStart: stringRequired,
    timeEnd: stringRequired,
    doctor: stringRequired
});
let Time = mongoose.model('Time', timeSchema);

let timeCollection = () => {
  Time.createCollection().then(res => {
    console.log(new Date(), 'Collection Time Created');
  }, err => {
    throw err;
  });
}

let createTime = (payload, cb) => {
  return Time.create(payload, (err, docs) => {
    if (err) {
      console.error(err);
      return cb(err);
    } else {
      return cb(null, docs._id);
    }
  })
}

let findTime = () => {
    return Time.find({}, (err, docs) => {
    if (err) {
      console.error(err);
      return;
    } else {
      return docs;
    }
  })
}

// let findTimeID = (id) => {
//   return Time.find(timee, (err, docs) => {
//     if (err) {
//       console.error(err);
//       return;
//     } else {
//       return docs;
//     }
//   })
// }

module.exports = {
  timeCollection: timeCollection,
  createTime: createTime,
  findTime: findTime
  // findTimeID: findTimeID
}