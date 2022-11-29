const { Router} = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/starpi',(req,res)=>{
    res.send({naves:{nave:[{
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
        name: 'Slave 1',
        img:'https://static.wikia.nocookie.net/esstarwars/images/b/ba/Slave_I_DICE.png/revision/latest/scale-to-width-down/350?cb=20171112170357'
    },{
        name: 'Imperial shuttle',
        img:'https://static.wikia.nocookie.net/starwars/images/d/d3/ImperialShuttle-DB.png/revision/latest/scale-to-width-down/500?cb=20150920051331'
    },{
        name: 'EF76 Nebulon-B escort frigate',
        img:'https://static.wikia.nocookie.net/starwars/images/7/71/NebulonB-SWS.png/revision/latest/scale-to-width-down/500?cb=20210303023412'
    },{
        name: 'Calamari Cruiser',
        img:'https://static.wikia.nocookie.net/starwars/images/9/94/MCLiberty.jpg/revision/latest/scale-to-width-down/500?cb=20070104001953'
    },{
        name: 'A-wing',
        img:'https://static.wikia.nocookie.net/starwars/images/8/8d/A-wing_DICE.png/revision/latest/scale-to-width-down/500?cb=20161021230115'
    },{
        name: 'B-wing',
        img:'https://static.wikia.nocookie.net/esstarwars/images/e/e2/Ala-_B.jpg/revision/latest/scale-to-width-down/350?cb=20090219014659'
    },{
        name: 'Republic Cruiser',
        img:'https://static.wikia.nocookie.net/starwars/images/5/5f/Republic_Cruiser.png/revision/latest/scale-to-width-down/500?cb=20161015074831'
    },{
        name: 'Droid control ship',
        img:'https://static.wikia.nocookie.net/starwars/images/9/95/Lucrehulk_battleship_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311015214'
    },{
        name: 'Naboo fighter',
        img:'https://static.wikia.nocookie.net/esstarwars/images/d/d3/N-1_BF2.png/revision/latest/scale-to-width-down/350?cb=20180605055443'
    },{
        name: 'Naboo Royal Starship',
        img:'https://static.wikia.nocookie.net/starwars/images/9/9e/Naboo_Royal_Starship.png/revision/latest/scale-to-width-down/500?cb=20161019065403'
    },{
        name: 'Scimitar',
        img:'https://static.wikia.nocookie.net/starwars/images/1/1c/Scimitar-USC.png/revision/latest/scale-to-width-down/500?cb=20190604143506'
    },{
        name: 'J-type diplomatic barge',
        img:'https://static.wikia.nocookie.net/starwars/images/1/1c/J-type_Diplomatic_Barge_TCW.png/revision/latest/scale-to-width-down/500?cb=20160903222638'
    },{
        name: 'AA-9 Coruscant freighter',
        img:'https://static.wikia.nocookie.net/starwars/images/c/c7/Aa9coruscantfreighter.jpg/revision/latest/scale-to-width-down/500?cb=20091201131352'
    },{
        name: 'Jedi starfighter',
        img:'https://static.wikia.nocookie.net/starwars/images/7/79/Jedi_Starfighter_EpII.png/revision/latest/scale-to-width-down/500?cb=20150722030412'
    },{
        name: 'H-type Nubian yacht',
        img:'https://static.wikia.nocookie.net/starwars/images/f/fb/Nabooyacht.jpg/revision/latest?cb=20071216070919'
    },{
        name: 'Republic Assault ship',
        img:'https://static.wikia.nocookie.net/starwars/images/7/70/Acclamator-TCWIV.png/revision/latest/scale-to-width-down/500?cb=20221105061503'
    },{
        name: 'Solar Sailer',
        img:'https://static.wikia.nocookie.net/starwars/images/1/10/CountDookusSolarSailer-WotF.png/revision/latest/scale-to-width-down/500?cb=20200518063614'
    },{
        name: 'Trade Federation cruiser',
        img:'https://static.wikia.nocookie.net/starwars/images/4/47/InvisibleHandStarboard-FF.png/revision/latest/scale-to-width-down/500?cb=20221119215500'
    },{
        name: 'Theta-class T-2c shuttle',
        img:'https://static.wikia.nocookie.net/starwars/images/8/8e/Theta-class_shuttle.png/revision/latest/scale-to-width-down/500?cb=20220304110027'
    },{
        name: 'Republic attack cruiser',
        img:'https://static.wikia.nocookie.net/starwars/images/c/c8/Imperialattackcruisers.png/revision/latest/scale-to-width-down/500?cb=20140317112248'
    },{
        name: 'Naboo star skiff',
        img:'https://static.wikia.nocookie.net/starwars/images/1/1f/Nabooskiff-SWCTP.png/revision/latest/scale-to-width-down/350?cb=20221031044447'
    },{
        name: 'Jedi Interceptor',
        img:'https://static.wikia.nocookie.net/esstarwars/images/a/a6/Eta-2_Interceptor.png/revision/latest/scale-to-width-down/350?cb=20171207152401'
    },{
        name: 'arc-170',
        img:'https://static.wikia.nocookie.net/esstarwars/images/3/32/Starfigher.jpg/revision/latest/scale-to-width-down/350?cb=20120429113036'
    },{
        name: 'Banking clan frigte',
        img:'https://static.wikia.nocookie.net/starwars/images/0/07/Munificent_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090311013715'
    },{
        name: 'Belbullab-22 starfighter',
        img:'https://static.wikia.nocookie.net/esstarwars/images/3/3e/Soulless_One2_TCW.jpg/revision/latest/scale-to-width-down/350?cb=20190806235308'
    },{
        name: 'V-wing',
        img:'https://static.wikia.nocookie.net/starwars/images/a/a9/V-wing_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000555'
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