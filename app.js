const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const keys = require('./config/keys')
const bookRoutes = require('./routes/book')
const app = express()


mongoose.connect(keys.mongodb.URI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

app.use(morgan(keys.log_level))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/book', bookRoutes)

module.exports = app