// ESTE ARCHIVO SE ENCARGA DE LEVANTAR TODOS LOS SERVICIOS
// 1. conectarnos a la base de datos
// 2. levantar al servidor
// 3. el servidor se va a definir en OTRO archivo llamado server.js en la carpeta src (source)

// dotenv debe ser la PRIMER LINEA en ejecutarse
require('dotenv').config()

// es equivalente a
// const dotenv = require('dotenv')
// dotenv.config()

console.log('env: ', process.env.DB_HOST)
console.log('env: ', process.env.DB_USER)
console.log('env: ', process.env.DB_NAME)
