// AQUÍ SE DEFINE EL SERVIDOR

const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'antojitos API v1'
  })
})

module.exports = app
