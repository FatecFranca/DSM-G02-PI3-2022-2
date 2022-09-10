const mongoose = require('mongoose')


// Desestruturação para obter as variaveis de ambiente para conexão com o banco de dados

const {
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE
} = process.env

module.exports = function () {
    mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log('** Mongoose conectado ao servidor remoto **')
    })

    mongoose.connection.on('error', (erro) => {
        console.log('** Mongoose ERRO DE CONEXÃO: ' + erro + ' **')
    })
}