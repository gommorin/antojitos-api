// AQUÍ SE DEFINE EL SERVIDOR

const express = require('express')

const tacosRouter = require('./routes/tacos')

const app = express()

app.use(express.json())

app.use('/tacos', tacosRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'antojitos API v1'
  })
})

module.exports = app

// CADA QUE CREAMOS UN ENDPOINT NUEVO, EL PROCESO DEBE SER:
// 1. Asegurarnos de tener un modelo (acceso a datos)
// 2. Si no existe, lo creamos
// 3. Crear el(los) caso(s) de uso necesarios para esa acción
// 4. Crear el endpoint y conectarlo al (o a los) caso(s) de uso correspondiente
