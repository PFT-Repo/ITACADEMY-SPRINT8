const { Router} = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/starpi',(req,res)=>{
    res.send({naves:{nave:[{
        name: 'CR90 corvette',
        img:'./assets/img/Corvette_negvv.webp'
    },{
        name: 'Star Destroyer',
        img:'./assets/img/StarDestroyer_negvv.webp'
    },{
        name: 'Sentinel-class landing craft',
        img:'./assets/img/Imperial_Sentinel-class_shuttle.webp'
    },{
        name: 'Death Star',
        img:'./assets/img/DeathStar-SWE.webp'
    },{
        name: 'Millennium Falcon',
        img:'./assets/img/Millennium_Falcon_Fathead_TROS.webp'
    },{
        name: 'Y-wing',
        img:'./assets/img/Y-wing.webp'
    },{
        name: 'X-wing',
        img:'./assets/img/X-wing_Fathead.webp'
    },{
        name: 'TIE Advanced x1',
        img:'./assets/img/TIE_Avanzado_X1.webp'
    },{
        name: 'Executor',
        img:'./assets/img/Executor_BF2.webp'
    },{
        name: 'Rebel transport',
        img:'./assets/img/GR-75_Medium_Transport_TAEtrivia.webp'
    },{
        name: 'Slave 1',
        img:'./assets/img/Slave_I_DICE.webp'
    },{
        name: 'Imperial shuttle',
        img:'./assets/img/ImperialShuttle-DB.webp'
    },{
        name: 'EF76 Nebulon-B escort frigate',
        img:'./assets/img/NebulonB-SWS.webp'
    },{
        name: 'Calamari Cruiser',
        img:'./assets/img/MCLiberty.webp'
    },{
        name: 'A-wing',
        img:'./assets/img/A-wing_DICE.webp'
    },{
        name: 'B-wing',
        img:'./assets/img/Ala-_B.webp'
    },{
        name: 'Republic Cruiser',
        img:'./assets/img/Republic_Cruiser.webp'
    },{
        name: 'Droid control ship',
        img:'./assets/img/Lucrehulk_battleship_TCW.webp'
    },{
        name: 'Naboo fighter',
        img:'./assets/img/N-1_BF2.webp'
    },{
        name: 'Naboo Royal Starship',
        img:'./assets/img/Naboo_Royal_Starship.webp'
    },{
        name: 'Scimitar',
        img:'./assets/img/Scimitar-USC.webp'
    },{
        name: 'J-type diplomatic barge',
        img:'./assets/img/J-type_Diplomatic_Barge_TCW.webp'
    },{
        name: 'AA-9 Coruscant freighter',
        img:'./assets/img/Aa9coruscantfreighter.webp'
    },{
        name: 'Jedi starfighter',
        img:'./assets/img/Jedi_Starfighter_EpII.webp'
    },{
        name: 'H-type Nubian yacht',
        img:'./assets/img/Nabooyacht.webp'
    },{
        name: 'Republic Assault ship',
        img:'./assets/img/Acclamator-TCWIV.webp'
    },{
        name: 'Solar Sailer',
        img:'./assets/img/CountDookusSolarSailer-WotF.webp'
    },{
        name: 'Trade Federation cruiser',
        img:'./assets/img/InvisibleHandStarboard-FF.webp'
    },{
        name: 'Theta-class T-2c shuttle',
        img:'./assets/img/Theta-class_shuttle.webp'
    },{
        name: 'Republic attack cruiser',
        img:'./assets/img/Imperialattackcruisers.webp'
    },{
        name: 'Naboo star skiff',
        img:'./assets/img/Nabooskiff-SWCTP.webp'
    },{
        name: 'Jedi Interceptor',
        img:'./assets/img/Eta-2_Interceptor.webp'
    },{
        name: 'arc-170',
        img:'./assets/img/Starfigher.webp'
    },{
        name: 'Banking clan frigte',
        img:'./assets/img/Munificent_TCW.webp'
    },{
        name: 'Belbullab-22 starfighter',
        img:'./assets/img/Soulless_One2_TCW.webp'
    },{
        name: 'V-wing',
        img:'./assets/img/V-wing_BF2.webp'
    }]},
    peliculas:{peli:[{
        number: 1,
        img: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest/scale-to-width-down/500?cb=20130822171446'
    },{
        number: 2,
        img: 'https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest/scale-to-width-down/500?cb=20180318125654'
    },{
        number: 3,
        img: 'https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png/revision/latest/scale-to-width-down/500?cb=20130822174232'
    },{
        number: 4,
        img: 'https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg/revision/latest/scale-to-width-down/500?cb=20100708051712'
    },{
        number: 5,
        img: 'https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest/scale-to-width-down/499?cb=20161114072554'
    },{
        number: 6,
        img: 'https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/500?cb=20170926193831'
    },{
        number: 7,
        img: 'https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg/revision/latest/scale-to-width-down/499?cb=20151018162823'
    },{
        number: 8,
        img: 'https://static.wikia.nocookie.net/starwars/images/1/12/TheLastJediTheatricalPoster.jpg/revision/latest/scale-to-width-down/499?cb=20171010002420'
    }]}
})

});
router.post('/signup',async (req,res)=>{
    const{email,password} = req.body;
    const newUser = new User({email,password});
    await newUser.save();
    const token = jwt.sign({_id: newUser._id},'secretKey',{
        expiresIn: 60 * 1
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