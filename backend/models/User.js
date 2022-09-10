const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true } // índice único, para não permitir repetição de e-mails no cadastro
    },
    password_hash: {
        type: String,
        required: true,
        select: false // não permite consulta do campo no banco de dados
    },
    is_admin: {
        type: Boolean,
        required: true,
        default: false // valor padrão para novos usuários
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now // Data e hora atual
    }
})

/*
    Parâmetros de mongoose.model:
    1º - Nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
    2º - Relação de campos do esquema (schema)
    3º - Nome da collection no banco de dados (convenção: mesmo nome da model com letra inicial minúsculas e plural)
*/
module.exports = mongoose.model('User', schema, 'users')