const { Router} = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/',(req,res)=>res.send('Hola Mundo'));
router.post('/signup',async (req,res)=>{
    const{email,password} = req.body;
    const newUser = new User({email,password});
    await newUser.save();
    const token = jwt.sign({_id: newUser._id},'secretKey',{
        expiresIn: 60 * 1 // expires in 24 hours
     });
    res.status(200).json({token});
   });

   router.post('/signin', async (req,res)=>{
    const user = await User.findOne({email})
    if (!user) return res.status(401).send("El email no existe");
    if (user.password !== password) return res.status(401).send("Contraseña Incorrecta");
    const token = jwt.sign({_id: user._id},'secretKey');
    return  res.status(200).json({token});
   });
module.exports = router;

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("No Autorizado");
    }
    const token = req.headers.authorization.split('')[1];
    if(token == 'null'){
        return res.status(401).send("No Autorizado");
    }
    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();
}