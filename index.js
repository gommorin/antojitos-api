// ESTE ARCHIVO SE ENCARGA DE LEVANTAR TODOS LOS SERVICIOS
// 1. conectarnos a la base de datos
// 2. levantar al servidor
// 3. el servidor se va a definir en OTRO archivo llamado server.js en la carpeta src (source)

// dotenv debe ser la PRIMER LINEA en ejecutarse
require('dotenv').config()

// es equivalente a
// const dotenv = require('dotenv')
// dotenv.config()

const baseDatos = require('./src/lib/db')
const server = require('./src/server.js')

console.log('env: ', process.env.DB_HOST)
console.log('env: ', process.env.DB_USER)
console.log('env: ', process.env.DB_NAME)

baseDatos.connect()
  .then(() => {
    console.log('DB connect')
    server.listen(8080, () => {
      console.log('server ready')
    })
  })
  .catch((error) => {
    console.error('DB error', error)
  })
