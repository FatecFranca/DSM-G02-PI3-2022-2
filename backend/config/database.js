const mongoose = require('mongoose')


// Desestruturação para obter as variaveis de ambiente para conexão com o banco de dados

const {
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE
} = process.env

module.exports = function () {
    mongoose.connect(`mongodb+srv://Vinicius:4321@cluster0.vup6jl0.mongodb.net/?retryWrites=true&w=majority`, {
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