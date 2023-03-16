const dotenv = require('dotenv')

dotenv.config()

const server = {
  port: process.env.APP_PORT || 3000,
}

const db = {
  host: process.env.DB_SERVER,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}

module.exports = {
  server,
  db
}
