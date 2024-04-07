const path = require("path")
const express = require("express")
const router = express.Router()

const formularioController = require("../controllers/other")
const { check } = require("express-validator")

router.get("/formulario", formularioController.formulario)
router.post("/formulario",[check("")],formularioController.proceso)

module.exports=router;