const {Router}=require('express');
const consultas=require('../consultas');
const router=Router();
router.get('/',async(req, res)=>{
    const consulta=await consultas.getClientes();
    return res.status(200).json(consulta);
})

module.exports=router;