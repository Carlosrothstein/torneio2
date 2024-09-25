const express = require("express")
const router = express.Router()

const mortosController = require("../controllers/mortosController")

router.post("/", mortosController.registrarMorto)

router.get("/", mortosController.listarMortos)

router.put("/:id", mortosController.atualizarMorto)

router.delete("/:id", mortosController.deletarMorto)

module.exports = router