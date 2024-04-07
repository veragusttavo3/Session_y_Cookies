module.exports = (req,res)=>{
    const el = req.body;
    res.render("formulario",{el:el});
}