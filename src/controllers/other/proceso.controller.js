module.exports = (req,res)=>{
    const el = req.body;
    const {validationResult} =require("express-validator")
    res.render("formulario",{el:el});
}