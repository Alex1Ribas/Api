const express = require('express');
const router = express.Router();

const { criarConsulta } = require('./criarConsultas');
const ListarConsultas = require('./listarCosultas');
const atualizarConsultas = require('./atualizarConsultas');
const removerConsultas = require('./removerConsultas');


router.get('/', ListarConsultas);
router.post('/', criarConsulta);
router.put('/', atualizarConsultas);
router.delete('/:id', removerConsultas);

module.exports = router