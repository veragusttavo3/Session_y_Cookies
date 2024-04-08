module.exports = (req,res)=>{
    const {validationResult} =require("express-validator")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("formulario",{ errors: errors.mapped(),old:req.body});
    }
    res.render("formulario",{el:req.body});
}