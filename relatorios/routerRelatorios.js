const express = require('express');
const router = express.Router();

const { relatorioPacientes, relatorioMedicos, relatorioConsultas } = require('./relatorio');

router.post('/pacientes', relatorioPacientes);
router.post('/medicos', relatorioMedicos);
router.get('/consultas', relatorioConsultas);

module.exports = router;
