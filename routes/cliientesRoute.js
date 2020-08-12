const express = require('express')

const router = express.Router()
const clientes = require('../clientes')
const clientesController = require('../controllers/clientes')

//especificando rota para controller 
router.get('./' , clientesController.listarClientes) 

module.exports = router

