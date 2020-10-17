// script para ayudarnos a conectar con la Base de Datos (BD)

const mongoose = require('mongoose')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

// protocolo://user:password@host/dbName
const URL = `mongodb+srv://{$DB_USER}:{$DB_PASSWORD}@{$DB_HOST}/{$DB_NAME}`

function connect () { // ---> nos va a regresar la promesa de conexión a la BD
    return mongoose.connect(URL, =>{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = {
    connect
}