const prompt = require('../prompt/prompt');
const { consultas } = require('./consultas');
const { getMedicos } = require('./medicos');
const { getPacientes } = require('./pacientes');

function buscaPorData(){
    let data = prompt('Digite a data de busca (dd/MM/AAAA): ');
    if(data.length < 10){
        console.log("Formato inválido!");
        return;
    }
2
    let consultasEncontradas = []; 

    for(let i = 0; i < consultas.length; i++){
        if(data === consultas[i].data){
            consultasEncontradas.push(consultas[i]);
        }
    }

    if(consultasEncontradas.length > 0){
        console.log(`\nConsultas encontradas para a data ${data}:`);
        
        for(let i = 0; i < consultasEncontradas.length; i++){
            const consulta = consultasEncontradas[i];
            
            const medicoEncontrado = getMedicos(consulta.medico);
            const pacienteEncontrado = getPacientes(consulta.paciente);

            console.log(`
            Médico: ${medicoEncontrado.nome}
            Paciente: ${pacienteEncontrado.nome}
            Descrição: ${consulta.descricao}
            `);
        }
    } else {
        console.log(`\nNenhuma consulta encontrada para a data ${data}.`);
    }
}



function buscaPorMedico(){
    let medico = prompt('Digite o nome do médico:  ');
2
    let medicoEncontrado = []; 

    for(let i = 0; i < consultas.length; i++){
        if(medico === consultas[i].medico){
            medicoEncontrado.push(consultas[i]);
        }
    }

    if(medicoEncontrado.length > 0){
        console.log(`\nConsultas encontradas para o medico ${medico}:`);
        
        for(let i = 0; i < medicoEncontrado.length; i++){
            const consulta = medicoEncontrado[i];
            
            const medicoEncontrado = getMedicos(consulta.medico);
            const pacienteEncontrado = getPacientes(consulta.paciente);

            console.log(`
            Médico: ${medicoEncontrado.nome}
            Paciente: ${pacienteEncontrado.nome}
            Descrição: ${consulta.descricao}
            `);
        }
    } else {
        console.log(`\nNenhuma consulta encontrada para o médico ${medico}.`);
    }

}


module.exports = { buscaPorData, buscaPorMedico }