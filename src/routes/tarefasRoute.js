const express = require('express')

const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.getTarefas)
router.get("/:id", controller.getById)
router.get("/concluido/filtrar", controller.getConcluido)
router.get("/:nomeColaborador/buscar", controller.getNome)
router.get("/:dataInclusao", controller.getInclusao)
router.get("/:dataConclusao", controller.getConclusao)

module.exports = router