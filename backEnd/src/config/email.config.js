require('dotenv').config()
const nodeMailer = require('nodemailer');
module.exports = nodeMailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_AUTH_USER, // generated ethereal user
    pass: process.env.EMAIL_AUTH_PASS // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false //process.env.EMAIL_REJECT_UNAUTHORIZED
  }
});

//config ng transport ni nodemailer. confgi ng email