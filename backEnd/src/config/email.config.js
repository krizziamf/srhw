require('dotenv').config()
const nodeMailer = require('nodemailer');

module.exports = nodeMailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE,
  auth: {
    type: process.env.EMAIL_AUTH_TYPE,
    clientId: process.env.EMAIL_AUTH_CLIENT_ID,
    clientSecret: process.env.EMAIL_AUTH_CLIENT_SECRET,
    user: process.env.EMAIL_AUTH_USER,
    refreshToken: process.env.EMAIL_AUTH_REFRESH_TOKEN,
    accessToken: process.env.EMAIL_AUTH_ACCESS_TOKEN,
    expires: process.env.EMAIL_AUTH_EXPIRES
  },
  tls: {
    rejectUnauthorized: false //process.env.EMAIL_REJECT_UNAUTHORIZED
  }
});

//config ng transport ni nodemailer. confgi ng email
