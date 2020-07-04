require('dotenv').config()
const nodeMailer = require('nodemailer');
module.exports = nodeMailer.createTransport({
  host:process.env.EMAIL_HOST,
  port: 465,//process.env.EMAIL_PORT,
  secure: true, //process.env.EMAIL_SECURE, // true for 465, false for other ports
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_AUTH_USER, // generated ethereal user
    clientId:process.env.GOOGLE_GMAIL_API_CLIENT_ID,
    clientSecret:process.env.GOOGLE_GMAIL_API_CLIENT_SECRET
    // pass: process.env.EMAIL_AUTH_PASS // generated ethereal password
  },
  // tls: {
  //   rejectUnauthorized: false //process.env.EMAIL_REJECT_UNAUTHORIZED
  // }
});

//config ng transport ni nodemailer. confgi ng email