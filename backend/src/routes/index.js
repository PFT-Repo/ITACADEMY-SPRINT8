const { Router } = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/starpi', (req, res) => {
    res.send({
        naves: {
            nave: [{
                "name": "CR90 corvette",
                'img': './assets/img/Corvette_negvv.webp',
                "desc": "Corvettes were a type of small starship used during the final days of the Galactic Republic and the reign of the Galactic Empire. They typically measured around 100-200 meters in length, and were considered the smallest type of capital ship.",
                "model": "CR90 corvette",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "3500000",
                "length": "150",
                "max_atmosphering_speed": "950",
                "crew": "30-165",
                "passengers": "600",
                "cargo_capacity": "3000000",
                "consumables": "1 year",
                "hyperdrive_rating": "2.0",
                "MGLT": "60",
                "starship_class": "corvette",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T14:20:33.369000Z",
                "edited": "2014-12-20T21:23:49.867000Z",
                "url": "https://swapi.dev/api/starships/2/"
            }, {
                "name": "Star Destroyer",
                "desc": "The Imperial I-class Star Destroyer was a model of Imperial-class Star Destroyer in the service of the Imperial Navy. A wedge-shaped capital ship, it bristled with weapons emplacements, assault troops, boarding craft, and TIE line starfighters. In the era of the Galactic Empire, its command bridge was staffed by the finest crewmen in the navy.",
                "img": './assets/img/ImperialClassStarDestroyer-TSWB.webp',
                "model": "Imperial I-class Star Destroyer",
                "manufacturer": "Kuat Drive Yards",
                "cost_in_credits": "150000000",
                "length": "1,600",
                "max_atmosphering_speed": "975",
                "crew": "47,060",
                "passengers": "n/a",
                "cargo_capacity": "36000000",
                "consumables": "2 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "60",
                "starship_class": "Star Destroyer",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T15:08:19.848000Z",
                "edited": "2014-12-20T21:23:49.870000Z",
                "url": "https://swapi.dev/api/starships/3/"

            }, {
                "name": "Sentinel-class landing craft",
                "model": "Sentinel-class landing craft",
                "desc": "A Sentinel-class landing craft, also known as a Sentinel-class shuttle, Sentinel assault shuttle or Imperial landing craft, was a large-scale troop transport utilized by the Galactic Empire. During the early stages of the Galactic Civil War, Imperials such as Agent Alexsandr Kallus and the Grand Inquisitor utilized these transports to either deploy stormtroopers or to travel to a planet. Imperial Star Destroyers carried these shuttles.",
                "img": './assets/img/Imperial_Sentinel-class_shuttle.webp',
                "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
                "cost_in_credits": "240000",
                "length": "38",
                "max_atmosphering_speed": "1000",
                "crew": "5",
                "passengers": "75",
                "cargo_capacity": "180000",
                "consumables": "1 month",
                "hyperdrive_rating": "1.0",
                "MGLT": "70",
                "starship_class": "landing craft",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T15:48:00.586000Z",
                "edited": "2014-12-20T21:23:49.873000Z",
                "url": "https://swapi.dev/api/starships/5/"
            }, {
                "name": "Death Star",
                "model": "DS-1 Orbital Battle Station",
                "img": './assets/img/DSI-HDapproach.webp',
                "desc": "A Death Star was a gargantuan space station armed with a planet-destroying superlaser.",
                "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
                "cost_in_credits": "1000000000000",
                "length": "120000",
                "max_atmosphering_speed": "n/a",
                "crew": "342,953",
                "passengers": "843,342",
                "cargo_capacity": "1000000000000",
                "consumables": "3 years",
                "hyperdrive_rating": "4.0",
                "MGLT": "10",
                "starship_class": "Deep Space Mobile Battlestation",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T16:36:50.509000Z",
                "edited": "2014-12-20T21:26:24.783000Z",
                "url": "https://swapi.dev/api/starships/9/"
            }, {
                "name": "Millennium Falcon",
                "img": './assets/img/Millennium_Falcon_Fathead_TROS.webp',
                "desc": "The Millennium Falcon, originally known as YT-1300 492727ZED, was a YT-1300 Corellian light freighter used by smugglers Han Solo and Chewbacca during the Galactic Civil War. Previously, it was owned by Landonis Balthazar Calrissian, who lost to Solo in a sabacc game.",
                "model": "YT-1300 light freighter",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "100000",
                "length": "34.37",
                "max_atmosphering_speed": "1050",
                "crew": "4",
                "passengers": "6",
                "cargo_capacity": "100000",
                "consumables": "2 months",
                "hyperdrive_rating": "0.5",
                "MGLT": "75",
                "starship_class": "Light freighter",
                "pilots": [
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/14/",
                    "https://swapi.dev/api/people/25/",
                    "https://swapi.dev/api/people/31/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T16:59:45.094000Z",
                "edited": "2014-12-20T21:23:49.880000Z",
                "url": "https://swapi.dev/api/starships/10/"
            }, {
                "name": "Y-wing",
                "img": './assets/img/Y-wing.webp',
                "desc": "The BTL Y-wing starfighter was a series of multirole starfighter-bombers manufactured by Koensayr Fabrications. Notable models included the single-pilot BTL-A4 Y-wing assault starfighter/bomber and the two-seat BTL-S3, which had room for a gunner or passenger.",
                "model": "BTL Y-wing",
                "manufacturer": "Koensayr Manufacturing",
                "cost_in_credits": "134999",
                "length": "14",
                "max_atmosphering_speed": "1000km",
                "crew": "2",
                "passengers": "0",
                "cargo_capacity": "110",
                "consumables": "1 week",
                "hyperdrive_rating": "1.0",
                "MGLT": "80",
                "starship_class": "assault starfighter",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-12T11:00:39.817000Z",
                "edited": "2014-12-20T21:23:49.883000Z",
                "url": "https://swapi.dev/api/starships/11/"
            }, {
                "name": "X-wing",
                "img": './assets/img/X-wing_Fathead.webp',
                "desc": "Incom's T-65 X-wing starfighter was the primary multirole starfighter of the Rebel Alliance and its successor governments. Known for its versatility and exceptional combat performance, it was a favorite among Rebel and New Republic pilots. Possessing deflector shields, a hyperdrive, an R2 astromech for repairs and navigation, and a complement of proton torpedoes, the X-wing enabled the Rebellion to launch raids into Imperial space with better chances of success.",
                "model": "T-65 X-wing",
                "manufacturer": "Incom Corporation",
                "cost_in_credits": "149999",
                "length": "12.5",
                "max_atmosphering_speed": "1050",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "110",
                "consumables": "1 week",
                "hyperdrive_rating": "1.0",
                "MGLT": "100",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/1/",
                    "https://swapi.dev/api/people/9/",
                    "https://swapi.dev/api/people/18/",
                    "https://swapi.dev/api/people/19/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-12T11:19:05.340000Z",
                "edited": "2014-12-20T21:23:49.886000Z",
                "url": "https://swapi.dev/api/starships/12/"
            }, {
                "name": "TIE Advanced x1",
                "img": './assets/img/TIE_Avanzado_X1.webp',
                "desc": "The TIE Advanced x1, or TIE/av, was a prototype advanced starfighter that was part of the TIE Line manufactured by Sienar Fleet Systems.",
                "model": "Twin Ion Engine Advanced x1",
                "manufacturer": "Sienar Fleet Systems",
                "cost_in_credits": "unknown",
                "length": "9.2",
                "max_atmosphering_speed": "1200",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "150",
                "consumables": "5 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "105",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/4/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-12T11:21:32.991000Z",
                "edited": "2014-12-20T21:23:49.889000Z",
                "url": "https://swapi.dev/api/starships/13/"
            }, {
                "name": "Executor",
                "img": './assets/img/Executor_BF2.webp',
                "desc": "The Executor was an Executor-class Star Dreadnought that was the personal flagship of the Dark Lord of the Sith Darth Vader and one of the largest and most powerful Imperial ships ever built. Under Vader's command, the Executor led the Death Squad after the Battle of Yavin and oversaw the Imperial assault on the Rebel Alliance's Echo Base during the Battle of Hoth. While serving as the Imperial command ship during the Battle of Endor under the command of Admiral Firmus Piett, the ship was destroyed after a Rebel A-wing starfighter piloted by Arvel Crynyd crashed into its bridge, causing the Super Star Destroyer to lose control and crashed into the Death Star II.",
                "model": "Executor-class star dreadnought",
                "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
                "cost_in_credits": "1143350000",
                "length": "19000",
                "max_atmosphering_speed": "n/a",
                "crew": "279,144",
                "passengers": "38000",
                "cargo_capacity": "250000000",
                "consumables": "6 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "40",
                "starship_class": "Star dreadnought",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-15T12:31:42.547000Z",
                "edited": "2014-12-20T21:23:49.893000Z",
                "url": "https://swapi.dev/api/starships/15/"
            }, {
                name: 'Rebel transport',
                img: './assets/img/GR-75_Medium_Transport_TAEtrivia.webp'
            }, {
                name: 'Slave 1',
                img: './assets/img/Slave_I_DICE.webp'
            }, {
                name: 'Imperial shuttle',
                img: './assets/img/ImperialShuttle-DB.webp'
            }, {
                name: 'EF76 Nebulon-B escort frigate',
                img: './assets/img/NebulonB-SWS.webp'
            }, {
                name: 'Calamari Cruiser',
                img: './assets/img/MCLiberty.webp'
            }, {
                name: 'A-wing',
                img: './assets/img/A-wing_DICE.webp'
            }, {
                name: 'B-wing',
                img: './assets/img/Ala-_B.webp'
            }, {
                name: 'Republic Cruiser',
                img: './assets/img/Republic_Cruiser.webp'
            }, {
                name: 'Droid control ship',
                img: './assets/img/Lucrehulk_battleship_TCW.webp'
            }, {
                name: 'Naboo fighter',
                img: './assets/img/N-1_BF2.webp'
            }, {
                name: 'Naboo Royal Starship',
                img: './assets/img/Naboo_Royal_Starship.webp'
            }, {
                name: 'Scimitar',
                img: './assets/img/Scimitar-USC.webp'
            }, {
                name: 'J-type diplomatic barge',
                img: './assets/img/J-type_Diplomatic_Barge_TCW.webp'
            }, {
                name: 'AA-9 Coruscant freighter',
                img: './assets/img/Aa9coruscantfreighter.webp'
            }, {
                name: 'Jedi starfighter',
                img: './assets/img/Jedi_Starfighter_EpII.webp'
            }, {
                name: 'H-type Nubian yacht',
                img: './assets/img/Nabooyacht.webp'
            }, {
                name: 'Republic Assault ship',
                img: './assets/img/Acclamator-TCWIV.webp'
            }, {
                name: 'Solar Sailer',
                img: './assets/img/CountDookusSolarSailer-WotF.webp'
            }, {
                name: 'Trade Federation cruiser',
                img: './assets/img/InvisibleHandStarboard-FF.webp'
            }, {
                name: 'Theta-class T-2c shuttle',
                img: './assets/img/Theta-class_shuttle.webp'
            }, {
                name: 'Republic attack cruiser',
                img: './assets/img/Imperialattackcruisers.webp'
            }, {
                name: 'Naboo star skiff',
                img: './assets/img/Nabooskiff-SWCTP.webp'
            }, {
                name: 'Jedi Interceptor',
                img: './assets/img/Jedi_Starfighter_EpII.webp'
            }, {
                name: 'arc-170',
                img: './assets/img/Starfigher.webp'
            }, {
                name: 'Banking clan frigte',
                img: './assets/img/Munificent_TCW.webp'
            }, {
                name: 'Belbullab-22 starfighter',
                img: './assets/img/Soulless_One2_TCW.webp'
            }, {
                name: 'V-wing',
                img: './assets/img/V-wing_BF2.webp'
            }]
        },
        peliculas: {
            peli: [{
                number: 1,
                img: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest/scale-to-width-down/500?cb=20130822171446'
            }, {
                number: 2,
                img: 'https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest/scale-to-width-down/500?cb=20180318125654'
            }, {
                number: 3,
                img: 'https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png/revision/latest/scale-to-width-down/500?cb=20130822174232'
            }, {
                number: 4,
                img: 'https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg/revision/latest/scale-to-width-down/500?cb=20100708051712'
            }, {
                number: 5,
                img: 'https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest/scale-to-width-down/499?cb=20161114072554'
            }, {
                number: 6,
                img: 'https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/500?cb=20170926193831'
            }, {
                number: 7,
                img: 'https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg/revision/latest/scale-to-width-down/499?cb=20151018162823'
            }, {
                number: 8,
                img: 'https://static.wikia.nocookie.net/starwars/images/1/12/TheLastJediTheatricalPoster.jpg/revision/latest/scale-to-width-down/499?cb=20171010002420'
            }]
        }
    })
});
router.get('/starpi/starships', (req, res) => { res.redirect('/starpi/starships/1'); })
router.get('/starpi/starships/1', (req, res) => {
    res.send({
        "count": 36,
        "next": "/starpi/starships/2",
        "previous": null,
        "results": [{
                "name": "CR90 corvette",
                'img': './assets/img/Corvette_negvv.webp',
                "desc": "Corvettes were a type of small starship used during the final days of the Galactic Republic and the reign of the Galactic Empire. They typically measured around 100-200 meters in length, and were considered the smallest type of capital ship.",
                "model": "CR90 corvette",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "3500000",
                "length": "150",
                "max_atmosphering_speed": "950",
                "crew": "30-165",
                "passengers": "600",
                "cargo_capacity": "3000000",
                "consumables": "1 year",
                "hyperdrive_rating": "2.0",
                "MGLT": "60",
                "starship_class": "corvette",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T14:20:33.369000Z",
                "edited": "2014-12-20T21:23:49.867000Z",
                "url": "https://swapi.dev/api/starships/2/"
            },
            {
                "name": "Star Destroyer",
                "desc": "The Imperial I-class Star Destroyer was a model of Imperial-class Star Destroyer in the service of the Imperial Navy. A wedge-shaped capital ship, it bristled with weapons emplacements, assault troops, boarding craft, and TIE line starfighters. In the era of the Galactic Empire, its command bridge was staffed by the finest crewmen in the navy.",
                "img": './assets/img/ImperialClassStarDestroyer-TSWB.webp',
                "model": "Imperial I-class Star Destroyer",
                "manufacturer": "Kuat Drive Yards",
                "cost_in_credits": "150000000",
                "length": "1,600",
                "max_atmosphering_speed": "975",
                "crew": "47,060",
                "passengers": "n/a",
                "cargo_capacity": "36000000",
                "consumables": "2 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "60",
                "starship_class": "Star Destroyer",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T15:08:19.848000Z",
                "edited": "2014-12-20T21:23:49.870000Z",
                "url": "https://swapi.dev/api/starships/3/"
            },
            {
                "name": "Sentinel-class landing craft",
                "model": "Sentinel-class landing craft",
                "desc": "A Sentinel-class landing craft, also known as a Sentinel-class shuttle, Sentinel assault shuttle or Imperial landing craft, was a large-scale troop transport utilized by the Galactic Empire. During the early stages of the Galactic Civil War, Imperials such as Agent Alexsandr Kallus and the Grand Inquisitor utilized these transports to either deploy stormtroopers or to travel to a planet. Imperial Star Destroyers carried these shuttles.",
                "img": './assets/img/Imperial_Sentinel-class_shuttle.webp',
                "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
                "cost_in_credits": "240000",
                "length": "38",
                "max_atmosphering_speed": "1000",
                "crew": "5",
                "passengers": "75",
                "cargo_capacity": "180000",
                "consumables": "1 month",
                "hyperdrive_rating": "1.0",
                "MGLT": "70",
                "starship_class": "landing craft",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T15:48:00.586000Z",
                "edited": "2014-12-20T21:23:49.873000Z",
                "url": "https://swapi.dev/api/starships/5/"
            },
            {
                "name": "Death Star",
                "model": "DS-1 Orbital Battle Station",
                "img": './assets/img/DSI-HDapproach.webp',
                "desc": "A Death Star was a gargantuan space station armed with a planet-destroying superlaser.",
                "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
                "cost_in_credits": "1000000000000",
                "length": "120000",
                "max_atmosphering_speed": "n/a",
                "crew": "342,953",
                "passengers": "843,342",
                "cargo_capacity": "1000000000000",
                "consumables": "3 years",
                "hyperdrive_rating": "4.0",
                "MGLT": "10",
                "starship_class": "Deep Space Mobile Battlestation",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T16:36:50.509000Z",
                "edited": "2014-12-20T21:26:24.783000Z",
                "url": "https://swapi.dev/api/starships/9/"
            },
            {
                "name": "Millennium Falcon",
                "img": './assets/img/Millennium_Falcon_Fathead_TROS.webp',
                "desc": "The Millennium Falcon, originally known as YT-1300 492727ZED, was a YT-1300 Corellian light freighter used by smugglers Han Solo and Chewbacca during the Galactic Civil War. Previously, it was owned by Landonis Balthazar Calrissian, who lost to Solo in a sabacc game.",
                "model": "YT-1300 light freighter",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "100000",
                "length": "34.37",
                "max_atmosphering_speed": "1050",
                "crew": "4",
                "passengers": "6",
                "cargo_capacity": "100000",
                "consumables": "2 months",
                "hyperdrive_rating": "0.5",
                "MGLT": "75",
                "starship_class": "Light freighter",
                "pilots": [
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/14/",
                    "https://swapi.dev/api/people/25/",
                    "https://swapi.dev/api/people/31/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T16:59:45.094000Z",
                "edited": "2014-12-20T21:23:49.880000Z",
                "url": "https://swapi.dev/api/starships/10/"
            },
            {
                "name": "Y-wing",
                "img": './assets/img/Y-wing.webp',
                "desc": "The BTL Y-wing starfighter was a series of multirole starfighter-bombers manufactured by Koensayr Fabrications. Notable models included the single-pilot BTL-A4 Y-wing assault starfighter/bomber and the two-seat BTL-S3, which had room for a gunner or passenger.",
                "model": "BTL Y-wing",
                "manufacturer": "Koensayr Manufacturing",
                "cost_in_credits": "134999",
                "length": "14",
                "max_atmosphering_speed": "1000km",
                "crew": "2",
                "passengers": "0",
                "cargo_capacity": "110",
                "consumables": "1 week",
                "hyperdrive_rating": "1.0",
                "MGLT": "80",
                "starship_class": "assault starfighter",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-12T11:00:39.817000Z",
                "edited": "2014-12-20T21:23:49.883000Z",
                "url": "https://swapi.dev/api/starships/11/"
            },
            {
                "name": "X-wing",
                "img": './assets/img/X-wing_Fathead.webp',
                "desc": "Incom's T-65 X-wing starfighter was the primary multirole starfighter of the Rebel Alliance and its successor governments. Known for its versatility and exceptional combat performance, it was a favorite among Rebel and New Republic pilots. Possessing deflector shields, a hyperdrive, an R2 astromech for repairs and navigation, and a complement of proton torpedoes, the X-wing enabled the Rebellion to launch raids into Imperial space with better chances of success.",
                "model": "T-65 X-wing",
                "manufacturer": "Incom Corporation",
                "cost_in_credits": "149999",
                "length": "12.5",
                "max_atmosphering_speed": "1050",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "110",
                "consumables": "1 week",
                "hyperdrive_rating": "1.0",
                "MGLT": "100",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/1/",
                    "https://swapi.dev/api/people/9/",
                    "https://swapi.dev/api/people/18/",
                    "https://swapi.dev/api/people/19/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-12T11:19:05.340000Z",
                "edited": "2014-12-20T21:23:49.886000Z",
                "url": "https://swapi.dev/api/starships/12/"
            },
            {
                "name": "TIE Advanced x1",
                "img": './assets/img/TIE_Avanzado_X1.webp',
                "desc": "The TIE Advanced x1, or TIE/av, was a prototype advanced starfighter that was part of the TIE Line manufactured by Sienar Fleet Systems.",
                "model": "Twin Ion Engine Advanced x1",
                "manufacturer": "Sienar Fleet Systems",
                "cost_in_credits": "unknown",
                "length": "9.2",
                "max_atmosphering_speed": "1200",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "150",
                "consumables": "5 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "105",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/4/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-12T11:21:32.991000Z",
                "edited": "2014-12-20T21:23:49.889000Z",
                "url": "https://swapi.dev/api/starships/13/"
            },
            {
                "name": "Executor",
                "img": './assets/img/Executor_BF2.webp',
                "desc": "The Executor was an Executor-class Star Dreadnought that was the personal flagship of the Dark Lord of the Sith Darth Vader and one of the largest and most powerful Imperial ships ever built. Under Vader's command, the Executor led the Death Squad after the Battle of Yavin and oversaw the Imperial assault on the Rebel Alliance's Echo Base during the Battle of Hoth. While serving as the Imperial command ship during the Battle of Endor under the command of Admiral Firmus Piett, the ship was destroyed after a Rebel A-wing starfighter piloted by Arvel Crynyd crashed into its bridge, causing the Super Star Destroyer to lose control and crashed into the Death Star II.",
                "model": "Executor-class star dreadnought",
                "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
                "cost_in_credits": "1143350000",
                "length": "19000",
                "max_atmosphering_speed": "n/a",
                "crew": "279,144",
                "passengers": "38000",
                "cargo_capacity": "250000000",
                "consumables": "6 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "40",
                "starship_class": "Star dreadnought",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-15T12:31:42.547000Z",
                "edited": "2014-12-20T21:23:49.893000Z",
                "url": "https://swapi.dev/api/starships/15/"
            },
            {
                "name": "Rebel transport",
                "img": './assets/img/GR-75_Medium_Transport_TAEtrivia.webp',
                "desc": "The GR-75 medium transport, sometimes known as the Gallofree transport, was a transport designed and built by Gallofree Shipyards, Inc.. They were lightly armed with a canopy-like hull to protect the cargo pods it carried. They couldn't do more than 400 miles per hour and had a class 4 hyperdrive.",
                "model": "GR-75 medium transport",
                "manufacturer": "Gallofree Yards, Inc.",
                "cost_in_credits": "unknown",
                "length": "90",
                "max_atmosphering_speed": "650",
                "crew": "6",
                "passengers": "90",
                "cargo_capacity": "19000000",
                "consumables": "6 months",
                "hyperdrive_rating": "4.0",
                "MGLT": "20",
                "starship_class": "Medium transport",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-15T12:34:52.264000Z",
                "edited": "2014-12-20T21:23:49.895000Z",
                "url": "https://swapi.dev/api/starships/17/"
            }
        ]
    })

});
router.get('/starpi/starships/2', (req, res) => {
    res.send({
        "count": 36,
        "next": "/starpi/starships/3",
        "previous": "/starpi/starships/1",
        "results": [{
                "name": "Slave 1",
                "model": "Firespray-31-class patrol and attack",
                "manufacturer": "Kuat Systems Engineering",
                "cost_in_credits": "unknown",
                "length": "21.5",
                "max_atmosphering_speed": "1000",
                "crew": "1",
                "passengers": "6",
                "cargo_capacity": "70000",
                "consumables": "1 month",
                "hyperdrive_rating": "3.0",
                "MGLT": "70",
                "starship_class": "Patrol craft",
                "pilots": [
                    "https://swapi.dev/api/people/22/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-15T13:00:56.332000Z",
                "edited": "2014-12-20T21:23:49.897000Z",
                "url": "https://swapi.dev/api/starships/21/"
            },
            {
                "name": "Imperial shuttle",
                "model": "Lambda-class T-4a shuttle",
                "manufacturer": "Sienar Fleet Systems",
                "cost_in_credits": "240000",
                "length": "20",
                "max_atmosphering_speed": "850",
                "crew": "6",
                "passengers": "20",
                "cargo_capacity": "80000",
                "consumables": "2 months",
                "hyperdrive_rating": "1.0",
                "MGLT": "50",
                "starship_class": "Armed government transport",
                "pilots": [
                    "https://swapi.dev/api/people/1/",
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/14/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-15T13:04:47.235000Z",
                "edited": "2014-12-20T21:23:49.900000Z",
                "url": "https://swapi.dev/api/starships/22/"
            },
            {
                "name": "EF76 Nebulon-B escort frigate",
                "model": "EF76 Nebulon-B escort frigate",
                "manufacturer": "Kuat Drive Yards",
                "cost_in_credits": "8500000",
                "length": "300",
                "max_atmosphering_speed": "800",
                "crew": "854",
                "passengers": "75",
                "cargo_capacity": "6000000",
                "consumables": "2 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "40",
                "starship_class": "Escort ship",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-15T13:06:30.813000Z",
                "edited": "2014-12-20T21:23:49.902000Z",
                "url": "https://swapi.dev/api/starships/23/"
            },
            {
                "name": "Calamari Cruiser",
                "model": "MC80 Liberty type Star Cruiser",
                "manufacturer": "Mon Calamari shipyards",
                "cost_in_credits": "104000000",
                "length": "1200",
                "max_atmosphering_speed": "n/a",
                "crew": "5400",
                "passengers": "1200",
                "cargo_capacity": "unknown",
                "consumables": "2 years",
                "hyperdrive_rating": "1.0",
                "MGLT": "60",
                "starship_class": "Star Cruiser",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T10:54:57.804000Z",
                "edited": "2014-12-20T21:23:49.904000Z",
                "url": "https://swapi.dev/api/starships/27/"
            },
            {
                "name": "A-wing",
                "model": "RZ-1 A-wing Interceptor",
                "manufacturer": "Alliance Underground Engineering, Incom Corporation",
                "cost_in_credits": "175000",
                "length": "9.6",
                "max_atmosphering_speed": "1300",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "40",
                "consumables": "1 week",
                "hyperdrive_rating": "1.0",
                "MGLT": "120",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/29/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:16:34.542000Z",
                "edited": "2014-12-20T21:23:49.907000Z",
                "url": "https://swapi.dev/api/starships/28/"
            },
            {
                "name": "B-wing",
                "model": "A/SF-01 B-wing starfighter",
                "manufacturer": "Slayn & Korpil",
                "cost_in_credits": "220000",
                "length": "16.9",
                "max_atmosphering_speed": "950",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "45",
                "consumables": "1 week",
                "hyperdrive_rating": "2.0",
                "MGLT": "91",
                "starship_class": "Assault Starfighter",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:18:04.763000Z",
                "edited": "2014-12-20T21:23:49.909000Z",
                "url": "https://swapi.dev/api/starships/29/"
            },
            {
                "name": "Republic Cruiser",
                "model": "Consular-class cruiser",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "unknown",
                "length": "115",
                "max_atmosphering_speed": "900",
                "crew": "9",
                "passengers": "16",
                "cargo_capacity": "unknown",
                "consumables": "unknown",
                "hyperdrive_rating": "2.0",
                "MGLT": "unknown",
                "starship_class": "Space cruiser",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/4/"
                ],
                "created": "2014-12-19T17:01:31.488000Z",
                "edited": "2014-12-20T21:23:49.912000Z",
                "url": "https://swapi.dev/api/starships/31/"
            },
            {
                "name": "Droid control ship",
                "model": "Lucrehulk-class Droid Control Ship",
                "manufacturer": "Hoersch-Kessel Drive, Inc.",
                "cost_in_credits": "unknown",
                "length": "3170",
                "max_atmosphering_speed": "n/a",
                "crew": "175",
                "passengers": "139000",
                "cargo_capacity": "4000000000",
                "consumables": "500 days",
                "hyperdrive_rating": "2.0",
                "MGLT": "unknown",
                "starship_class": "Droid control ship",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-19T17:04:06.323000Z",
                "edited": "2014-12-20T21:23:49.915000Z",
                "url": "https://swapi.dev/api/starships/32/"
            },
            {
                "name": "Naboo fighter",
                "model": "N-1 starfighter",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps",
                "cost_in_credits": "200000",
                "length": "11",
                "max_atmosphering_speed": "1100",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "65",
                "consumables": "7 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/11/",
                    "https://swapi.dev/api/people/35/",
                    "https://swapi.dev/api/people/60/"
                ],
                "films": [
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-19T17:39:17.582000Z",
                "edited": "2014-12-20T21:23:49.917000Z",
                "url": "https://swapi.dev/api/starships/39/"
            },
            {
                "name": "Naboo Royal Starship",
                "model": "J-type 327 Nubian royal starship",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
                "cost_in_credits": "unknown",
                "length": "76",
                "max_atmosphering_speed": "920",
                "crew": "8",
                "passengers": "unknown",
                "cargo_capacity": "unknown",
                "consumables": "unknown",
                "hyperdrive_rating": "1.8",
                "MGLT": "unknown",
                "starship_class": "yacht",
                "pilots": [
                    "https://swapi.dev/api/people/39/"
                ],
                "films": [
                    "https://swapi.dev/api/films/4/"
                ],
                "created": "2014-12-19T17:45:03.506000Z",
                "edited": "2014-12-20T21:23:49.919000Z",
                "url": "https://swapi.dev/api/starships/40/"
            }
        ]
    })

});

router.get('/starpi/starships/3', (req, res) => {
    res.send({
        "count": 36,
        "next": "/starpi/starships/4",
        "previous": "/starpi/starships/2",
        "results": [{
                "name": "Scimitar",
                "model": "Star Courier",
                "manufacturer": "Republic Sienar Systems",
                "cost_in_credits": "55000000",
                "length": "26.5",
                "max_atmosphering_speed": "1180",
                "crew": "1",
                "passengers": "6",
                "cargo_capacity": "2500000",
                "consumables": "30 days",
                "hyperdrive_rating": "1.5",
                "MGLT": "unknown",
                "starship_class": "Space Transport",
                "pilots": [
                    "https://swapi.dev/api/people/44/"
                ],
                "films": [
                    "https://swapi.dev/api/films/4/"
                ],
                "created": "2014-12-20T09:39:56.116000Z",
                "edited": "2014-12-20T21:23:49.922000Z",
                "url": "https://swapi.dev/api/starships/41/"
            },
            {
                "name": "J-type diplomatic barge",
                "model": "J-type diplomatic barge",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
                "cost_in_credits": "2000000",
                "length": "39",
                "max_atmosphering_speed": "2000",
                "crew": "5",
                "passengers": "10",
                "cargo_capacity": "unknown",
                "consumables": "1 year",
                "hyperdrive_rating": "0.7",
                "MGLT": "unknown",
                "starship_class": "Diplomatic barge",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-20T11:05:51.237000Z",
                "edited": "2014-12-20T21:23:49.925000Z",
                "url": "https://swapi.dev/api/starships/43/"
            },
            {
                "name": "AA-9 Coruscant freighter",
                "model": "Botajef AA-9 Freighter-Liner",
                "manufacturer": "Botajef Shipyards",
                "cost_in_credits": "unknown",
                "length": "390",
                "max_atmosphering_speed": "unknown",
                "crew": "unknown",
                "passengers": "30000",
                "cargo_capacity": "unknown",
                "consumables": "unknown",
                "hyperdrive_rating": "unknown",
                "MGLT": "unknown",
                "starship_class": "freighter",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-20T17:24:23.509000Z",
                "edited": "2014-12-20T21:23:49.928000Z",
                "url": "https://swapi.dev/api/starships/47/"
            },
            {
                "name": "Jedi starfighter",
                "model": "Delta-7 Aethersprite-class interceptor",
                "manufacturer": "Kuat Systems Engineering",
                "cost_in_credits": "180000",
                "length": "8",
                "max_atmosphering_speed": "1150",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "60",
                "consumables": "7 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/10/",
                    "https://swapi.dev/api/people/58/"
                ],
                "films": [
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T17:35:23.906000Z",
                "edited": "2014-12-20T21:23:49.930000Z",
                "url": "https://swapi.dev/api/starships/48/"
            },
            {
                "name": "H-type Nubian yacht",
                "model": "H-type Nubian yacht",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps",
                "cost_in_credits": "unknown",
                "length": "47.9",
                "max_atmosphering_speed": "8000",
                "crew": "4",
                "passengers": "unknown",
                "cargo_capacity": "unknown",
                "consumables": "unknown",
                "hyperdrive_rating": "0.9",
                "MGLT": "unknown",
                "starship_class": "yacht",
                "pilots": [
                    "https://swapi.dev/api/people/35/"
                ],
                "films": [
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-20T17:46:46.847000Z",
                "edited": "2014-12-20T21:23:49.932000Z",
                "url": "https://swapi.dev/api/starships/49/"
            },
            {
                "name": "Republic Assault ship",
                "model": "Acclamator I-class assault ship",
                "manufacturer": "Rothana Heavy Engineering",
                "cost_in_credits": "unknown",
                "length": "752",
                "max_atmosphering_speed": "unknown",
                "crew": "700",
                "passengers": "16000",
                "cargo_capacity": "11250000",
                "consumables": "2 years",
                "hyperdrive_rating": "0.6",
                "MGLT": "unknown",
                "starship_class": "assault ship",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-20T18:08:42.926000Z",
                "edited": "2014-12-20T21:23:49.935000Z",
                "url": "https://swapi.dev/api/starships/52/"
            },
            {
                "name": "Solar Sailer",
                "model": "Punworcca 116-class interstellar sloop",
                "manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
                "cost_in_credits": "35700",
                "length": "15.2",
                "max_atmosphering_speed": "1600",
                "crew": "3",
                "passengers": "11",
                "cargo_capacity": "240",
                "consumables": "7 days",
                "hyperdrive_rating": "1.5",
                "MGLT": "unknown",
                "starship_class": "yacht",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/5/"
                ],
                "created": "2014-12-20T18:37:56.969000Z",
                "edited": "2014-12-20T21:23:49.937000Z",
                "url": "https://swapi.dev/api/starships/58/"
            },
            {
                "name": "Trade Federation cruiser",
                "model": "Providence-class carrier/destroyer",
                "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
                "cost_in_credits": "125000000",
                "length": "1088",
                "max_atmosphering_speed": "1050",
                "crew": "600",
                "passengers": "48247",
                "cargo_capacity": "50000000",
                "consumables": "4 years",
                "hyperdrive_rating": "1.5",
                "MGLT": "unknown",
                "starship_class": "capital ship",
                "pilots": [
                    "https://swapi.dev/api/people/10/",
                    "https://swapi.dev/api/people/11/"
                ],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T19:40:21.902000Z",
                "edited": "2014-12-20T21:23:49.941000Z",
                "url": "https://swapi.dev/api/starships/59/"
            },
            {
                "name": "Theta-class T-2c shuttle",
                "model": "Theta-class T-2c shuttle",
                "manufacturer": "Cygnus Spaceworks",
                "cost_in_credits": "1000000",
                "length": "18.5",
                "max_atmosphering_speed": "2000",
                "crew": "5",
                "passengers": "16",
                "cargo_capacity": "50000",
                "consumables": "56 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "transport",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T19:48:40.409000Z",
                "edited": "2014-12-20T21:23:49.944000Z",
                "url": "https://swapi.dev/api/starships/61/"
            },
            {
                "name": "Republic attack cruiser",
                "model": "Senator-class Star Destroyer",
                "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
                "cost_in_credits": "59000000",
                "length": "1137",
                "max_atmosphering_speed": "975",
                "crew": "7400",
                "passengers": "2000",
                "cargo_capacity": "20000000",
                "consumables": "2 years",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "star destroyer",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T19:52:56.232000Z",
                "edited": "2014-12-20T21:23:49.946000Z",
                "url": "https://swapi.dev/api/starships/63/"
            }
        ]

    })

});

router.get('/starpi/starships/4', (req, res) => {
    res.send({
        "count": 36,
        "next": null,
        "previous": "/starpi/starships/4",
        "results": [{
                "name": "Naboo star skiff",
                "model": "J-type star skiff",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
                "cost_in_credits": "unknown",
                "length": "29.2",
                "max_atmosphering_speed": "1050",
                "crew": "3",
                "passengers": "3",
                "cargo_capacity": "unknown",
                "consumables": "unknown",
                "hyperdrive_rating": "0.5",
                "MGLT": "unknown",
                "starship_class": "yacht",
                "pilots": [
                    "https://swapi.dev/api/people/10/",
                    "https://swapi.dev/api/people/35/"
                ],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T19:55:15.396000Z",
                "edited": "2014-12-20T21:23:49.948000Z",
                "url": "https://swapi.dev/api/starships/64/"
            },
            {
                "name": "Jedi Interceptor",
                "model": "Eta-2 Actis-class light interceptor",
                "manufacturer": "Kuat Systems Engineering",
                "cost_in_credits": "320000",
                "length": "5.47",
                "max_atmosphering_speed": "1500",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "60",
                "consumables": "2 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/10/",
                    "https://swapi.dev/api/people/11/"
                ],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T19:56:57.468000Z",
                "edited": "2014-12-20T21:23:49.951000Z",
                "url": "https://swapi.dev/api/starships/65/"
            },
            {
                "name": "arc-170",
                "model": "Aggressive Reconnaissance-170 starfighte",
                "manufacturer": "Incom Corporation, Subpro Corporation",
                "cost_in_credits": "155000",
                "length": "14.5",
                "max_atmosphering_speed": "1000",
                "crew": "3",
                "passengers": "0",
                "cargo_capacity": "110",
                "consumables": "5 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "100",
                "starship_class": "starfighter",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T20:03:48.603000Z",
                "edited": "2014-12-20T21:23:49.953000Z",
                "url": "https://swapi.dev/api/starships/66/"
            },
            {
                "name": "Banking clan frigte",
                "model": "Munificent-class star frigate",
                "manufacturer": "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries",
                "cost_in_credits": "57000000",
                "length": "825",
                "max_atmosphering_speed": "unknown",
                "crew": "200",
                "passengers": "unknown",
                "cargo_capacity": "40000000",
                "consumables": "2 years",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "cruiser",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T20:07:11.538000Z",
                "edited": "2014-12-20T21:23:49.956000Z",
                "url": "https://swapi.dev/api/starships/68/"
            },
            {
                "name": "Belbullab-22 starfighter",
                "model": "Belbullab-22 starfighter",
                "manufacturer": "Feethan Ottraw Scalable Assemblies",
                "cost_in_credits": "168000",
                "length": "6.71",
                "max_atmosphering_speed": "1100",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "140",
                "consumables": "7 days",
                "hyperdrive_rating": "6",
                "MGLT": "unknown",
                "starship_class": "starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/10/",
                    "https://swapi.dev/api/people/79/"
                ],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T20:38:05.031000Z",
                "edited": "2014-12-20T21:23:49.959000Z",
                "url": "https://swapi.dev/api/starships/74/"
            },
            {
                "name": "V-wing",
                "model": "Alpha-3 Nimbus-class V-wing starfighter",
                "manufacturer": "Kuat Systems Engineering",
                "cost_in_credits": "102500",
                "length": "7.9",
                "max_atmosphering_speed": "1050",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "60",
                "consumables": "15 hours",
                "hyperdrive_rating": "1.0",
                "MGLT": "unknown",
                "starship_class": "starfighter",
                "pilots": [],
                "films": [
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-20T20:43:04.349000Z",
                "edited": "2014-12-20T21:23:49.961000Z",
                "url": "https://swapi.dev/api/starships/75/"
            }
        ]
    })

});

router.post('/signup', async(req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, 'secretKey', {
        expiresIn: 60 * 1
    });
    res.status(200).json({ token });
});

router.post('/signin', async(req, res) => {
    const user = await User.findOne({ email })
    if (!user) return res.status(401).send("El email no existe");
    if (user.password !== password) return res.status(401).send("Contraseña Incorrecta");
    const token = jwt.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({ token });
});
module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("No Autorizado");
    }
    const token = req.headers.authorization.split('')[1];
    if (token == 'null') {
        return res.status(401).send("No Autorizado");
    }
    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();
}