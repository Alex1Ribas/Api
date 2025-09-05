const { medicos } = require("../data/data");

function buscaPorMedico(req, res){
    const busca = req.body.busca
    const resultados = medicos.filter(medico =>
         medico.nomeMedico.toLowerCase().includes(busca.toLowerCase()));

            if (resultados.length > 0) {
                return res.status(200).send({resultados})

            } else {
            res.status(404).send({message: "Nenhum médico foi encontrado!"})
        }
    }

    module.exports = buscaPorMedico