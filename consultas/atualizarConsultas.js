const { consultas } = require("../data/data");

function atualizarConsultas(req, res) {
    const { id, idMedico, idPaciente, data } = req.body;

    if (!id || !idMedico || !idPaciente || !data) {
        return res.status(400).send({
            message: 'Todos os campos (id, idMedico, idPaciente, data) são obrigatórios.'
        });
    }

    const index = consultas.findIndex(consulta => consulta.id === id);

    if (index === -1) {
        return res.status(404).send({ message: 'Consulta não encontrada.' });
    }

    consultas[index] = {
        ...consultas[index],
        idMedico,
        idPaciente,
        data,
    };

    return res.status(200).send({
        message: 'Consulta atualizada com sucesso.',
        consulta: consultas[index],
    });
}

module.exports = atualizarConsultas;
