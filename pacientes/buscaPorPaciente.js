const { pacientes } = require("../data/data");

function buscaPorPaciente(req, res){
    const busca = req.body.busca
    const resultados = pacientes.filter(paciente =>
         paciente.nome.toLowerCase().includes(busca.toLowerCase()));

            if (resultados.length > 0) {
                return resultados.forEach((p, index) => {
                    res.status(200).send({message: `${index + 1}. ${p.nome}, Data de Nascimento: ${p.dataNascimento}`})})

            } else {
            res.status(404).send({message: "Nenhum paciente foi encontrado!"})
        }

    
    }

    module.exports = buscaPorPaciente