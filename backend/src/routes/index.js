const { Router } = require('express');
const router = Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

const file_system = require('fs');
const admz = require('adm-zip');
var to_zip = file_system.readdirSync(__dirname+'/../upload_data')


router.get('/imgs',(req,res)=>{
    var zp = new admz();
    for(var k=0 ; k<to_zip.length ; k++){
        zp.addLocalFile(__dirname+'/../upload_data/'+to_zip[k])
    }
    const file_after_download = 'img.zip';
      // toBuffer() is used to read the data and save it
    // for downloading process!
    const data = zp.toBuffer();
    // this is the code for downloading!
    // here we have to specify 3 things:
        // 1. type of content that we are downloading
        // 2. name of file to be downloaded
        // 3. length or size of the downloaded file!
  
    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${file_after_download}`);
    res.set('Content-Length',data.length);
    res.send(data);

});

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
            }, {
                "name": "Slave 1",
                "model": "Firespray-31-class patrol and attack",
                "img": './assets/img/Slave_I_DICE.webp',
                "desc":"Slave I, also spelled Slave One, was a modified Firespray-31-class patrol and attack craft used by the infamous Mandalorian bounty hunter Jango Fett before the Clone Wars and later his unaltered cloned son Boba Fett just prior to the Fall of the Republic and during the reign of the Galactic Empire. The ship in its original form was produced by a subsidiary company of Kuat Drive Yards, based on the planet Kuat.",
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
            }, {
                "name": "Imperial shuttle",
                "model": "Lambda-class T-4a shuttle",
                "img": './assets/img/ImperialShuttle-DB.webp',
                "desc":"The Lambda-class T-4a shuttle, also known as the Lambda-class shuttle, Imperial Lambda, Imperial Transport or the Imperial Shuttle, was a multi-purpose transport with a trihedral foil design used by the Galactic Empire during the Galactic Civil War, and was considered an elegant departure from the standards of brutish Imperial engineering. The shuttles were often used by high-ranking Imperial officers and such dignitaries as Darth Vader and Emperor Sheev Palpatine, but were more commonly found ferrying stormtroopers or cargo.",
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
            }, {
                "name": "EF76 Nebulon-B escort frigate",
                "model": "EF76 Nebulon-B escort frigate",
                "img": './assets/img/NebulonB-SWS.webp',
                "desc":"The EF76 Nebulon-B escort frigate, also known as the Nebulon-B frigate, was a class of frigate manufactured by Kuat Drive Yards. Despite being intended for Imperial Navy service, it gained more fame as a Rebel Cruiser used by the Alliance to Restore the Republic and its successor, the New Republic, throughout the Galactic Civil War.",
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
            }, {
                "name": "Calamari Cruiser",
                "model": "MC80 Liberty type Star Cruiser",
                "img": './assets/img/MCLiberty.webp',
                "desc":"The MC80 Liberty type Star Cruiser was an early type of Mon Calamari Star Cruiser put into service for the Rebel Alliance during the Galactic Civil War.",
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
            }, {
                "name": "A-wing",
                "model": "RZ-1 A-wing Interceptor",
                "manufacturer": "Alliance Underground Engineering, Incom Corporation",
                "img": './assets/img/A-wing_DICE.webp',
                "desc":"The RZ-1 A-wing interceptor, also known as the RZ-1 A-wing starfighter, was a wedge-shaped starfighter manufactured by Kuat Systems Engineering, which took design inspiration from the Republic starfighters of the Clone Wars. Based on the original R-22 prototype, the early rebel movement adopted the fighter against the Galactic Empire, letting these so-called RZ-1s see action during the Age of the Empire and the Galactic Civil War. The updated RZ-2 variant would replace the RZ-1 after the Battle of Endor, and would see use thirty years later during the conflict between the Resistance and the First Order.",
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
            }, {
                "name": "B-wing",
                "model": "A/SF-01 B-wing starfighter",
                "manufacturer": "Slayn & Korpil",
                "img": './assets/img/Ala-_B.webp',
                "desc": "The A/SF-01 B-wing heavy assault starfighter, known simply as the B-wing starfighter, was one of the largest and most heavily armed starfighters/bombers in the Rebel Alliance's fleet. The name B-wing came from the craft's appearance to a 'B', when upright, the outline of the upper half and the lower half makes a B shape, although its swordlike shape in attack mode has earned it the nickname 'Blade-wing', which may be another reason for the 'B' prefix.",
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
            }, {
                "name": "Republic Cruiser",
                "model": "Consular-class cruiser",
                "manufacturer": "Corellian Engineering Corporation",
                "img": './assets/img/Republic_Cruiser.webp',
                "desc":"The Consular-class space cruiser, also known as the Consular-class Light Cruiser, and commonly referred to as the Republic Cruiser, was a starship used by the Galactic Republic during the events leading up to the Invasion of Naboo and during the Clone Wars.",
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
            }, {
                "name": "Droid control ship",
                "model": "Lucrehulk-class Droid Control Ship",
                "manufacturer": "Hoersch-Kessel Drive, Inc.",
                "img": './assets/img/Lucrehulk_battleship_TCW.webp',
                "desc":"The Lucrehulk-class Battleship, also known as a Droid Control Ship, or Trade Federation battleship, was a modified Lucrehulk-class LH-3210 cargo freighter that was used by the Trade Federation and the Confederacy of Independent Systems and manufactured by Hoersch-Kessel Drive Inc.",
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
            }, {
                "name": "Naboo fighter",
                "model": "N-1 starfighter",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps",
                "img": './assets/img/N-1_BF2.webp',
                "desc":"The N-1 starfighter, also referred to as the Royal Naboo N-1 starfighter, Naboo N-1 starfighter, Naboo starfighter, N-1 fighter, or more simply, the N-1,was a single-seat patrol craft developed by the Theed Palace Space Vessel Engineering Corps and used by the Royal Naboo Security Forces for duties such as defense, patrol, and escorting.",
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
            }, {
                "name": "Naboo Royal Starship",
                "model": "J-type 327 Nubian royal starship",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
                "img": './assets/img/Naboo_Royal_Starship.webp',
                "desc":"The Naboo Royal Starship, a modified J-type 327 Nubian starship, was the royal starship of Queen Padmé Amidala during the Invasion of Naboo. She used it to escape from the Trade Federation's occupation of Naboo, where it landed on Tatooine for repairs, before making its way to Coruscant and, eventually, back to Naboo.",
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
            }, {
                "name": "Scimitar",
                "model": "Star Courier",
                "manufacturer": "Republic Sienar Systems",
                "img": './assets/img/Scimitar-USC.webp',
                "desc":"The Scimitar, also known as the Sith Infiltrator, was a heavily modified Star Courier and the personal starship of Darth Maul. After his defeat during the Battle of Naboo, the experimental starfighter was appropriated by Maul's master, Darth Sidious.",
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
            }, {
                "name": "J-type diplomatic barge",
                "model": "J-type diplomatic barge",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
                "img": './assets/img/J-type_Diplomatic_Barge_TCW.webp',
                "desc":"The J-type diplomatic barge, also called the Naboo Royal Cruiser or simply the Naboo cruiser, was a diplomatic transport used by representatives of the planet Naboo. Senator Padmé Amidala utilized a custom-built cruiser during the Separatist Crisis, which was destroyed on Coruscant in an attempt on her life. She later used another J-type during the Clone Wars, when she was targeted by the bounty hunter Aurra Sing.",
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
            }, {
                "name": "AA-9 Coruscant freighter",
                "model": "Botajef AA-9 Freighter-Liner",
                "manufacturer": "Botajef Shipyards",
                "img":'./assets/img/Aa9coruscantfreighter.webp',
                "desc":"The AA-9 Coruscant freighter, also known as the Botajef Freighter-Liner, was a massive freighter model used to transport large groups of people to and from Coruscant.",
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
            }, {
                "name": "Jedi starfighter",
                "model": "Delta-7 Aethersprite-class interceptor",
                "manufacturer": "Kuat Systems Engineering",
                "img": './assets/img/Jedi_Starfighter_EpII.webp',
                "desc": "The Delta-7 Aethersprite-class light interceptor, also known as the Delta-7 Aethersprite-class Jedi starfighter, Delta-7 Jedi starfighter, or Delta-7 Jedi Interceptor, and commonly referred to as the Jedi starfighter, was a starfighter model designed by Kuat Systems Engineering and used by the Jedi Order before and during the Clone Wars. The variant Delta-7B Aethersprite-class light interceptor was also used by the Jedi during the Clone Wars. The Delta-7 would also be used by the Alliance to Restore the Republic in their early campaigns against the Galactic Empire.",
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
            }, {
                "name": "H-type Nubian yacht",
                "model": "H-type Nubian yacht",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps",
                "img": './assets/img/Nabooyacht.webp',
                "desc": "The H-type Nubian yacht was a sleek, rocket-shaped yacht created by the Nubian Design Collective, and customized by the Theed Palace Space Vessel Engineering Corps for the Royal House of Naboo.",
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
            }, {
                "name": "Republic Assault ship",
                "model": "Acclamator I-class assault ship",
                "img": './assets/img/Acclamator-TCWIV.webp',
                "desc": "The Acclamator-class transgalactic military assault ship, also known as Acclamator-class Republic assault ship, Acclamator-class Planetary Assault Ship, Acclamator-class battleship, or Acclamator-class cruiser, was a type of cruiser-class proto-Star Destroyer utilized by the Galactic Republic for ferrying clone troopers across the galaxy. They were first deployed at the First Battle of Geonosis after transporting the clone army from Kamino, and subsequently carried the Grand Army of the Republic from Coruscant to the various arenas of the Clone Wars, a conflict in which they would see extensive use.",
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
            }, {
                "name": "Solar Sailer",
                "model": "Punworcca 116-class interstellar sloop",
                "manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
                "img": './assets/img/CountDookusSolarSailer-WotF.webp',
                "desc":"A solar sailer was a class of starship yacht that used sails to absorb stray space energies as a source of almost limitless fuel. Count Dooku owned a Punworcca 116-class solar sailer during the Clone Wars.",
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
            }, {
                "name": "Trade Federation cruiser",
                "model": "Providence-class carrier/destroyer",
                "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
                "img": './assets/img/InvisibleHandStarboard-FF.webp',
                "desc":"The Providence-class Dreadnought, otherwise referred to as the Providence-class carrier/destroyer, Providence-class cruiser-carrier, or simply the Separatist dreadnought, was a model of dreadnought designed by Quarren engineers on the planet Pammant, seeing extensive deployment by the Confederacy of Independent Systems naval branch throughout the duration of the Clone Wars. Initially utilized as command ships by the private fleet of the Trade Federation, where it was debuted with the Invisible Hand, the personal flagship of Viceroy Nute Gunray. The warship was cautiously deployed by the Confederacy's naval admiralty, due to the high operational costs for such a vessel, but was utilized in situations where its capabilities were necessary.",
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
            }, {
                "name": "Theta-class T-2c shuttle",
                "model": "Theta-class T-2c shuttle",
                "manufacturer": "Cygnus Spaceworks",
                "img": './assets/img/Theta-class_shuttle.webp',
                "desc": "The Cygnus Spaceworks Theta-class T-2c shuttle, also known as the Theta-class T-2c Personnel Transport, was a tri-winged personnel transport craft, most often used by influential senators, officers, and courtiers to travel between planets and starships while maintaining high levels of security.[1] Newly appointed Emperor Palpatine used one to save the maimed and burned Darth Vader from the volcanic world of Mustafar.",
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
            }, {
                "name": "Republic attack cruiser",
                "model": "Senator-class Star Destroyer",
                "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
                "img": "./assets/img/databank_republicattackcruiser_01_169_812f153d.jpeg",
                "desc":"The Republic attack cruiser was not primarily a cargo transport, troop carrier or other replenishment or supply vessel; it was developed and honed for ship-to-ship combat. Its huge armored shape had an aggressive, dagger-like profile, studded with heavy weapons emplacements capable of punching through powerful shields and sturdy armor. The front half of the ship's spine contained a massive flight deck capable of scrambling the latest in Republic starfighters. The huge hangar doors opened to allow ships to land or takeoff from the deck; the vessel also had a smaller docking bay entrance on its lower side.",
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
            }, {
                "name": "Naboo star skiff",
                "model": "J-type star skiff",
                "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
                "img": './assets/img/Nabooskiff-SWCTP.webp',
                "desc":"The J-type star skiff (sometimes called the Naboo star skiff) was a yacht starship created by the Theed Palace Space Vessel Engineering Corps for the Royal House of Naboo. It was referred to as a star skiff due to its primary purpose as a passenger transport, a role often shared by the common repulsorlift surface vehicles known as skiffs.",
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
            }, {
                "name": "Jedi Interceptor",
                "model": "Eta-2 Actis-class light interceptor",
                "manufacturer": "Kuat Systems Engineering",
                "img": './assets/img/Jedi_Starfighter_EpII.webp',
                "desc":"The Eta-2 Actis-class light interceptor, also known as the Eta-2 Actis Jedi Interceptor, Jedi starfighter, or Jedi interceptor, was a starfighter used by the Jedi during the Clone Wars. Designed to replace the Delta-7 Aethersprite-class light interceptor, the Eta-2 was a smaller vessel but possessed superior firepower.",
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
            }, {
                "name": "arc-170",
                "model": "Aggressive Reconnaissance-170 starfighte",
                "manufacturer": "Incom Corporation, Subpro Corporation",
                "img": './assets/img/Starfigher.webp',
                "desc":"The Aggressive ReConnaissance-170 starfighter, also known simply as the ARC-170 starfighter, was a heavy-duty model of starfighter used by the Galactic Republic during the Clone Wars and was considered the latest in fighter technology. Jointly manufactured by Incom Corporation and Subpro, it continued to see usage into the reign of the Galactic Empire, but was eventually phased out by the newer TIE line, though some found their way into the hands of the Alliance to Restore the Republic.",
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
            }, {
                "name": "Banking clan frigte",
                "model": "Munificent-class star frigate",
                "manufacturer": "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries",
                "img": './assets/img/Munificent_TCW.webp',
                "desc":"The Munificent-class star frigate, commonly referred to as the Banking Clan frigate or the Banking Clan comms ship, was a warship used by the InterGalactic Banking Clan and by extension the Confederacy of Independent Systems.",
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
            }, {
                "name": "Belbullab-22 starfighter",
                "model": "Belbullab-22 starfighter",
                "manufacturer": "Feethan Ottraw Scalable Assemblies",
                "img": './assets/img/SoullessOne-TCW.webp',
                "desc":"The Belbullab-22 starfighter was a heavy starfighter constructed by Feethan Ottraw Scalable Assemblies for the Confederacy of Independent Systems. General Grievous flew a heavily-modified and battle-worn Belbullab-22, Soulless One, during the Clone Wars.",
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
            }, {
                "name": "V-wing",
                "model": "Alpha-3 Nimbus-class V-wing starfighter",
                "manufacturer": "Kuat Systems Engineering",
                "img": './assets/img/V-wing_BF2.webp',
                "desc":"The Alpha-3 Nimbus-class V-wing starfighter, also known as the Alpha-3 Nimbus, V-wing starfighter, or Nimbus fighter, was a starfighter model manufactured by Kuat Systems Engineering.",
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
                "img": './assets/img/Slave_I_DICE.webp',
                "desc":"Slave I, also spelled Slave One, was a modified Firespray-31-class patrol and attack craft used by the infamous Mandalorian bounty hunter Jango Fett before the Clone Wars and later his unaltered cloned son Boba Fett just prior to the Fall of the Republic and during the reign of the Galactic Empire. The ship in its original form was produced by a subsidiary company of Kuat Drive Yards, based on the planet Kuat.",
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
                "img": './assets/img/ImperialShuttle-DB.webp',
                "desc":"The Lambda-class T-4a shuttle, also known as the Lambda-class shuttle, Imperial Lambda, Imperial Transport or the Imperial Shuttle, was a multi-purpose transport with a trihedral foil design used by the Galactic Empire during the Galactic Civil War, and was considered an elegant departure from the standards of brutish Imperial engineering. The shuttles were often used by high-ranking Imperial officers and such dignitaries as Darth Vader and Emperor Sheev Palpatine, but were more commonly found ferrying stormtroopers or cargo.",
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
                "img": './assets/img/NebulonB-SWS.webp',
                "desc":"The EF76 Nebulon-B escort frigate, also known as the Nebulon-B frigate, was a class of frigate manufactured by Kuat Drive Yards. Despite being intended for Imperial Navy service, it gained more fame as a Rebel Cruiser used by the Alliance to Restore the Republic and its successor, the New Republic, throughout the Galactic Civil War.",
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
                "img": './assets/img/MCLiberty.webp',
                "desc":"The MC80 Liberty type Star Cruiser was an early type of Mon Calamari Star Cruiser put into service for the Rebel Alliance during the Galactic Civil War.",
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
                "img": './assets/img/A-wing_DICE.webp',
                "desc":"The RZ-1 A-wing interceptor, also known as the RZ-1 A-wing starfighter, was a wedge-shaped starfighter manufactured by Kuat Systems Engineering, which took design inspiration from the Republic starfighters of the Clone Wars. Based on the original R-22 prototype, the early rebel movement adopted the fighter against the Galactic Empire, letting these so-called RZ-1s see action during the Age of the Empire and the Galactic Civil War. The updated RZ-2 variant would replace the RZ-1 after the Battle of Endor, and would see use thirty years later during the conflict between the Resistance and the First Order.",
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
                "img": './assets/img/Ala-_B.webp',
                "desc": "The A/SF-01 B-wing heavy assault starfighter, known simply as the B-wing starfighter, was one of the largest and most heavily armed starfighters/bombers in the Rebel Alliance's fleet. The name B-wing came from the craft's appearance to a 'B', when upright, the outline of the upper half and the lower half makes a B shape, although its swordlike shape in attack mode has earned it the nickname 'Blade-wing', which may be another reason for the 'B' prefix.",
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
                "img": './assets/img/Republic_Cruiser.webp',
                "desc":"The Consular-class space cruiser, also known as the Consular-class Light Cruiser, and commonly referred to as the Republic Cruiser, was a starship used by the Galactic Republic during the events leading up to the Invasion of Naboo and during the Clone Wars.",
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
                "img": './assets/img/Lucrehulk_battleship_TCW.webp',
                "desc":"The Lucrehulk-class Battleship, also known as a Droid Control Ship, or Trade Federation battleship, was a modified Lucrehulk-class LH-3210 cargo freighter that was used by the Trade Federation and the Confederacy of Independent Systems and manufactured by Hoersch-Kessel Drive Inc.",
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
                "img": './assets/img/N-1_BF2.webp',
                "desc":"The N-1 starfighter, also referred to as the Royal Naboo N-1 starfighter, Naboo N-1 starfighter, Naboo starfighter, N-1 fighter, or more simply, the N-1,was a single-seat patrol craft developed by the Theed Palace Space Vessel Engineering Corps and used by the Royal Naboo Security Forces for duties such as defense, patrol, and escorting.",
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
                "img": './assets/img/Naboo_Royal_Starship.webp',
                "desc":"The Naboo Royal Starship, a modified J-type 327 Nubian starship, was the royal starship of Queen Padmé Amidala during the Invasion of Naboo. She used it to escape from the Trade Federation's occupation of Naboo, where it landed on Tatooine for repairs, before making its way to Coruscant and, eventually, back to Naboo.",
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
                "img": './assets/img/Scimitar-USC.webp',
                "desc":"The Scimitar, also known as the Sith Infiltrator, was a heavily modified Star Courier and the personal starship of Darth Maul. After his defeat during the Battle of Naboo, the experimental starfighter was appropriated by Maul's master, Darth Sidious.",
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
                "img": './assets/img/J-type_Diplomatic_Barge_TCW.webp',
                "desc":"The J-type diplomatic barge, also called the Naboo Royal Cruiser or simply the Naboo cruiser, was a diplomatic transport used by representatives of the planet Naboo. Senator Padmé Amidala utilized a custom-built cruiser during the Separatist Crisis, which was destroyed on Coruscant in an attempt on her life. She later used another J-type during the Clone Wars, when she was targeted by the bounty hunter Aurra Sing.",
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
                "img":'./assets/img/Aa9coruscantfreighter.webp',
                "desc":"The AA-9 Coruscant freighter, also known as the Botajef Freighter-Liner, was a massive freighter model used to transport large groups of people to and from Coruscant.",
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
                "img": './assets/img/Jedi_Starfighter_EpII.webp',
                "desc": "The Delta-7 Aethersprite-class light interceptor, also known as the Delta-7 Aethersprite-class Jedi starfighter, Delta-7 Jedi starfighter, or Delta-7 Jedi Interceptor, and commonly referred to as the Jedi starfighter, was a starfighter model designed by Kuat Systems Engineering and used by the Jedi Order before and during the Clone Wars. The variant Delta-7B Aethersprite-class light interceptor was also used by the Jedi during the Clone Wars. The Delta-7 would also be used by the Alliance to Restore the Republic in their early campaigns against the Galactic Empire.",
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
                "img": './assets/img/Nabooyacht.webp',
                "desc": "The H-type Nubian yacht was a sleek, rocket-shaped yacht created by the Nubian Design Collective, and customized by the Theed Palace Space Vessel Engineering Corps for the Royal House of Naboo.",
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
                "img": './assets/img/Acclamator-TCWIV.webp',
                "desc": "The Acclamator-class transgalactic military assault ship, also known as Acclamator-class Republic assault ship, Acclamator-class Planetary Assault Ship, Acclamator-class battleship, or Acclamator-class cruiser, was a type of cruiser-class proto-Star Destroyer utilized by the Galactic Republic for ferrying clone troopers across the galaxy. They were first deployed at the First Battle of Geonosis after transporting the clone army from Kamino, and subsequently carried the Grand Army of the Republic from Coruscant to the various arenas of the Clone Wars, a conflict in which they would see extensive use.",
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
                "img": './assets/img/CountDookusSolarSailer-WotF.webp',
                "desc":"A solar sailer was a class of starship yacht that used sails to absorb stray space energies as a source of almost limitless fuel. Count Dooku owned a Punworcca 116-class solar sailer during the Clone Wars.",
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
                "img": './assets/img/InvisibleHandStarboard-FF.webp',
                "desc":"The Providence-class Dreadnought, otherwise referred to as the Providence-class carrier/destroyer, Providence-class cruiser-carrier, or simply the Separatist dreadnought, was a model of dreadnought designed by Quarren engineers on the planet Pammant, seeing extensive deployment by the Confederacy of Independent Systems naval branch throughout the duration of the Clone Wars. Initially utilized as command ships by the private fleet of the Trade Federation, where it was debuted with the Invisible Hand, the personal flagship of Viceroy Nute Gunray. The warship was cautiously deployed by the Confederacy's naval admiralty, due to the high operational costs for such a vessel, but was utilized in situations where its capabilities were necessary.",
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
                "img": './assets/img/Theta-class_shuttle.webp',
                "desc": "The Cygnus Spaceworks Theta-class T-2c shuttle, also known as the Theta-class T-2c Personnel Transport, was a tri-winged personnel transport craft, most often used by influential senators, officers, and courtiers to travel between planets and starships while maintaining high levels of security.[1] Newly appointed Emperor Palpatine used one to save the maimed and burned Darth Vader from the volcanic world of Mustafar.",
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
                "img": "./assets/img/databank_republicattackcruiser_01_169_812f153d.jpeg",
                "desc":"The Republic attack cruiser was not primarily a cargo transport, troop carrier or other replenishment or supply vessel; it was developed and honed for ship-to-ship combat. Its huge armored shape had an aggressive, dagger-like profile, studded with heavy weapons emplacements capable of punching through powerful shields and sturdy armor. The front half of the ship's spine contained a massive flight deck capable of scrambling the latest in Republic starfighters. The huge hangar doors opened to allow ships to land or takeoff from the deck; the vessel also had a smaller docking bay entrance on its lower side.",
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
                "img": './assets/img/Nabooskiff-SWCTP.webp',
                "desc":"The J-type star skiff (sometimes called the Naboo star skiff) was a yacht starship created by the Theed Palace Space Vessel Engineering Corps for the Royal House of Naboo. It was referred to as a star skiff due to its primary purpose as a passenger transport, a role often shared by the common repulsorlift surface vehicles known as skiffs.",
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
                "img": './assets/img/Jedi_Starfighter_EpII.webp',
                "desc":"The Eta-2 Actis-class light interceptor, also known as the Eta-2 Actis Jedi Interceptor, Jedi starfighter, or Jedi interceptor, was a starfighter used by the Jedi during the Clone Wars. Designed to replace the Delta-7 Aethersprite-class light interceptor, the Eta-2 was a smaller vessel but possessed superior firepower.",
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
                "img": './assets/img/Starfigher.webp',
                "desc":"The Aggressive ReConnaissance-170 starfighter, also known simply as the ARC-170 starfighter, was a heavy-duty model of starfighter used by the Galactic Republic during the Clone Wars and was considered the latest in fighter technology. Jointly manufactured by Incom Corporation and Subpro, it continued to see usage into the reign of the Galactic Empire, but was eventually phased out by the newer TIE line, though some found their way into the hands of the Alliance to Restore the Republic.",
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
                "img": './assets/img/Munificent_TCW.webp',
                "desc":"The Munificent-class star frigate, commonly referred to as the Banking Clan frigate or the Banking Clan comms ship, was a warship used by the InterGalactic Banking Clan and by extension the Confederacy of Independent Systems.",
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
                "img": './assets/img/SoullessOne-TCW.webp',
                "desc":"The Belbullab-22 starfighter was a heavy starfighter constructed by Feethan Ottraw Scalable Assemblies for the Confederacy of Independent Systems. General Grievous flew a heavily-modified and battle-worn Belbullab-22, Soulless One, during the Clone Wars.",
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
                "img": './assets/img/V-wing_BF2.webp',
                "desc":"The Alpha-3 Nimbus-class V-wing starfighter, also known as the Alpha-3 Nimbus, V-wing starfighter, or Nimbus fighter, was a starfighter model manufactured by Kuat Systems Engineering.",
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
    newUser.save();
    const token = jwt.sign({ _id: newUser._id }, 'secretKey', {
        expiresIn: 60 * 1
    });
    res.status(200).json({ token });
});
router.post('/signin', async(req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err,user) =>{
            if(err){
                res.status(500).send('Error en la Autenticacion');
            }
            else if(!user){
                res.status(500).send("Usuario no encontrado");
            }
            else{
                const token = jwt.sign({ _id: user._id }, 'secretKey');
                 return res.status(200).json({ token });
            }
    });
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