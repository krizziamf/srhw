require('dotenv').config()
const basicAuth = require('express-basic-auth');

var corsOption = () => {
  let option = {}
  switch (process.env.NODE_ENV) {
    case 'development':
      option = {
        origin: ['http://localhost:5000', 'http://localhost:3000'],
        allowedHeaders: "Content-Type,Authorization,Accept",
        credentials: true
      }
      break;
      case 'production':
      option = {
        origin: ['https://www.storosariohospital.com', 'https://storosariohospital.com','http://www.storosariohospital.com', 'http://storosariohospital.com'],
        allowedHeaders: "Content-Type,Authorization,Accept",
        credentials: true
      }
      break;
    default:
      console.error('Invalid Environment');
      break;
  }

  return option;
}

var authorizer = (username, password) => {
  const userMatches = basicAuth.safeCompare(username, process.env.UNAME)
  const passwordMatches = basicAuth.safeCompare(password, process.env.PASSWORD)

  return userMatches & passwordMatches
}

module.exports = {
  corsOption: corsOption,
  authorizer: authorizer
}

//lahat ng gusto baguhin sa server dito lalagay
//cors - di makakausap ng BE yung FE pag walang cors pag magkaiba yung IP
//authorizer - parang security