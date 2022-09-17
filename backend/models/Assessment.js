const mongoose = require('mongoose')

const schema = mongoose.Schema({
    user: {
        type: mongoose.ObjectId, // CAMPO DE CHAVE ESTRANGEIRA PARA OUTRA MODEL
        ref: 'User', // REFERENCIA A MODEL
    },
    name: {
        type: String,
        required: true,
    },
    Object: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now // Data e hora atual
    },
    finished_at: {
        type: Date
    }
})

/*
    Parâmetros de mongoose.model:
    1º - Nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
    2º - Relação de campos do esquema (schema)
    3º - Nome da collection no banco de dados (convenção: mesmo nome da model com letra inicial minúsculas e plural)
*/
module.exports = mongoose.model('Assessment', schema, 'assessments')