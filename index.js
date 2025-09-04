const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

const rotaMedicos = require('./medicos/routerMedicos');
const rotaPacientes = require('./pacientes/routerPacientes');
const rotaConsultas = require('./consultas/routerConsultas');

app.use('/medicos', rotaMedicos);
app.use('/pacientes', rotaPacientes);
app.use('/consultas', rotaConsultas);

app.get('/', (req, res) => {
  res.send('API de Clínica Médica');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
