const path = require("path")
const express = require("express")
const router = express.Router()

const formularioController = require("../controllers/other")
const formularioCheck= require("../middleware/formulario.middleware")

router.get("/formulario", formularioController.formulario)
router.post("/formulario",formularioController.proceso)

module.exports=router;