const tarefas = require('../models/tarefas.json')

exports.getTarefas = (req, res) => {
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefasPorId = tarefas.filter(tarefa => {tarefa.id == id})
    res.status(200).send(tarefasPorId)
}

exports.getConcluido = (req, res) => {    
    const concluido = req.params.concluido
    const tarefasConcluido = tarefas.filter(tarefa => (tarefa.concluido == "true"))       
    res.status(200).send(tarefasConcluido)    
    
}

exports.getNome = (req, res) => {    
    const nomeColaborador = req.params.nomeColaborador

    const buscarNome = tarefas.filter(tarefa => {
        console.log(nomeColaborador)
        return tarefa.nomeColaborador == nomeColaborador
    })    
                
        res.status(200).send(buscarNome) 
    
 }
 



