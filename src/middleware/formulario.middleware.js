const {body} = require("express-validator");
const formularioCheck = [

    body('nombre').notEmpty().withMessage('El nombre es obligatorio').bail(),
    body('email').isEmail().withMessage('El email no es válido').bail(),
    body('age').isInt({min:18}).withMessage('La edad es obligatorio').bail()
];
 module.exports = formularioCheck;