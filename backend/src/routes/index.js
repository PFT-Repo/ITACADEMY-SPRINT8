const { Router} = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/',(req,res)=>res.send('Hola Mundo'));
router.get('/naves',(req,res)=>{
    res.send({naves:[{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Star Destroyer',
        img:'https://static.wikia.nocookie.net/esstarwars/images/6/67/StarDestroyer_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20090317224209'
    },{
        name: 'Sentinel-class landing craft',
        img:'https://static.wikia.nocookie.net/esstarwars/images/5/5b/Imperial_Sentinel-class_shuttle.png/revision/latest/thumbnail-down/width/200/height/200?cb=20180108035125'
    },{
        name: 'Death Star',
        img:'https://static.wikia.nocookie.net/esstarwars/images/7/72/DeathStar1-SWE.png/revision/latest/thumbnail-down/width/200/height/200?cb=20111007065157'
    },{
        name: 'Millenium Falcon',
        img:'https://static.wikia.nocookie.net/esstarwars/images/5/52/Millennium_Falcon_Fathead_TROS.png/revision/latest/thumbnail-down/width/200/height/200?cb=20191220220841'
    },{
        name: 'Y-wing',
        img:'https://static.wikia.nocookie.net/esstarwars/images/8/81/Y-wing.png/revision/latest/thumbnail-down/width/200/height/200?cb=20170724190438'
    },{
        name: 'X-wing',
        img:'https://static.wikia.nocookie.net/esstarwars/images/8/80/X-wing_Fathead.png/revision/latest/scale-to-width-down/350?cb=20190624005938'
    },{
        name: 'TIE Advanced x1',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/06/TIE_Avanzado_X1.png/revision/latest/scale-to-width-down/350?cb=20171212224013'
    },{
        name: 'Executor',
        img:'https://static.wikia.nocookie.net/esstarwars/images/3/30/Executor_BF2.png/revision/latest/scale-to-width-down/350?cb=20190810045012'
    },{
        name: 'Rebel transport',
        img:'https://static.wikia.nocookie.net/esstarwars/images/6/67/GR-75_Medium_Transport_TAEtrivia.png/revision/latest/scale-to-width-down/350?cb=20190128000951'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    },{
        name: 'Corvette CR90',
        img:'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest/scale-to-width-down/350?cb=20081218232212'
    }]})

});
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