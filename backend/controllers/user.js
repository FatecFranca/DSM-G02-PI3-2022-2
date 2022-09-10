const User = require('../models/User')

const controller = {} // Objeto vazio

/*
    Métodos de CRUD do controller
    create: cria um novo registro
    retrieve: recupera todos os registros
    rerieveOne: recupera um único registro
    update: atualiza os dados de um registro
    delete: exclui um registro
*/

controller.create = async (req, res) => {
    try {
        await User.create(req.body)
        // HTTP 201: Created
        res.status(201).end()

    } catch (error) {
        console.log(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller

