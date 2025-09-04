const {consultas, id } = require("../data/data");

function criarConsulta(req, res) {
    id.value++;

    const novaConsulta = {
        id: id,
        data: req.body.data,
        medico: req.body.idMedico,
        paciente: req.body.idPaciente,
        descricao: req.body.descricao
    };

    consultas.push(novaConsulta);

    res.status(201).send({ message: "Consulta criada com sucesso!",
        consulta: novaConsulta
    });
}

module.exports = { criarConsulta };
