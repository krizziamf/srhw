require('dotenv').config()
const nodeMailer = require('nodemailer');

module.exports = nodeMailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
  auth: {
    type: process.env.EMAIL_AUTH_TYPE,
    user: process.env.EMAIL_AUTH_USER, // generated ethereal user
    pass: process.env.EMAIL_AUTH_PASS, // generated ethereal password
    clientId: '214015292602-hkrp5n5b3fraha07pkk5kpa3i9b65ilv.apps.googleusercontent.com',
    clientSecret: 'KnzsONsVTuoy5mQMg0_Kktlz',
    refreshToken: ''
  },
  tls: {
    rejectUnauthorized: false //process.env.EMAIL_REJECT_UNAUTHORIZED
  }
});

//config ng transport ni nodemailer. confgi ng email