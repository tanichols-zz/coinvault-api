const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// Set up the express app
const app = express()

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.options('*', cors())

// require api routes into the application
require('./server/routes')(app)

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: '404: The route requested does not exist'
}))

module.exports = app
