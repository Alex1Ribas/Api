const { medicos, consultas } = require("../data/data");

function buscaPorConsulta(req, res){
    const busca = req.body.busca
    const resultados = consultas.filter(consulta =>
         consulta.toLowerCase().includes(busca.toLowerCase()));

            if (resultados.length > 0) {
                return res.status(200).send({resultados})

            } else {
            res.status(404).send({message: "Nenhuma Consulta foi encontrada!"})
        }
    }

    module.exports = buscaPorConsulta