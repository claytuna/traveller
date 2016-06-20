var SkillService = module.exports = {

  list: () => {
    return skillList();
  },

  getBackgroundSkills: ( worldTradeData ) => {
  	return true;
  },
}

function skillList(){
  return [
    { name:'Admin', desc: "", id:1, qty:0 },
    { name:'Advocate', desc: "", id:2, qty:0 },
    { name:'Animals', desc: "", id:3, qty:0, children:[] },
    { name:'Athletics', desc: "", id:4, qty:0, children:[] },
    { name:'Art', desc: "", id:5, qty:0, children:[] },
    { name:'Astrogation', desc: "", id:6, qty:0 },
    { name:'Battle Dress', desc: "", id:7, qty:0 },
    { name:'Broker', desc: "", id:8, qty:0 },
    { name:'Carouse', desc: "", id:9, qty:0 },
    { name:'Comms', desc: "", id:10, qty:0 },
    { name:'Computers', desc: "", id:11, qty:0 },
    { name:'Deception', desc: "", id:12, qty:0 },
    { name:'Diplomat', desc: "", id:13, qty:0 },
    { name:'Drive', desc: "", id:14, qty:0, children:[] },
    { name:'Engineer', desc: "", id:15, qty:0, children:[] },
    { name:'Explosives', desc: "", id:16, qty:0 },
    { name:'Flyer', desc: "", id:17, qty:0, children:[] },
    { name:'Gambler', desc: "", id:18, qty:0 },
    { name:'Gunner', desc: "", id:19, qty:0, children:[] },
    { name:'Gun Combat', desc: "", id:20, qty:0, children:[] },
    { name:'Heavy Weapons', desc: "", id:21, qty:0, children:[] },
    { name:'Investigate', desc: "", id:22, qty:0 },
    { name:'Jack of All Trades', desc: "", id:23, qty:0 },
    { name:'Language', desc: "", id:24, qty:0, children:[] },
    { name:'Leadership', desc: "", id:25, qty:0 },
    { name:'Mechanic', desc: "", id:26, qty:0 },
    { name:'Medic', desc: "", id:27, qty:0 },
    { name:'Melee', desc: "", id:28, qty:0, children:[] },
    { name:'Navigation', desc: "", id:29, qty:0 },
    { name:'Persuade', desc: "", id:30, qty:0 },
    { name:'Pilot', desc: "", id:31, qty:0, children:[] },
    { name:'Recon', desc: "", id:32, qty:0 },
    { name:'Remote Operations', desc: "", id:33, qty:0 },
    { name:'Science', desc: "", id:34, qty:0, children:[] },
    { name:'Physical Sciences', desc: "", id:35, qty:0, children:[] },
    { name:'Life Sciences', desc: "", id:36, qty:0, children:[] },
    { name:'Social Sciences', desc: "", id:37, qty:0, children:[] },
    { name:'Space Sciences', desc: "", id:38, qty:0, children:[] },
    { name:'Seafarer', desc: "", id:39, qty:0, children:[] },
    { name:'Sensors', desc: "", id:40, qty:0 },
    { name:'Stealth', desc: "", id:41, qty:0 },
    { name:'Steward', desc: "", id:42, qty:0 },
    { name:'Streetwise', desc: "", id:43, qty:0 },
    { name:'Survival', desc: "", id:44, qty:0 },
    { name:'Tactics', desc: "", id:45, qty:0, children:[] },
    { name:'Trade', desc: "", id:46, qty:0, children:[] },
    { name:'Vacc Suit', desc: "", id:47, qty:0 },
    { name:'Zero-G', desc: "", id:48, qty:0 },
    { name:'Riding', desc: "", id:49, qty:0 },
    { name:'Veterinary', desc: "", id:50, qty:0 },
    { name:'Training', desc: "", id:51, qty:0 },
    { name:'Farming', desc: "", id:52, qty:0 },
    { name:'Coordination', desc: "", id:53, qty:0 },
    { name:'Endurance', desc: "", id:54, qty:0 },
    { name:'Strength', desc: "", id:55, qty:0 },
    { name:'Flying', desc: "", id:56, qty:0 },
    { name:'Acting', desc: "", id:57, qty:0 },
    { name:'Dance', desc: "", id:58, qty:0 },
    { name:'Holography', desc: "", id:59, qty:0 },
    { name:'Instrument', desc: "", id:60, qty:0 },
    { name:'Sculpting', desc: "", id:61, qty:0 },
    { name:'Writing', desc: "", id:62, qty:0 },
    { name:'Mole', desc: "", id:63, qty:0 },
    { name:'Tracked', desc: "", id:64, qty:0 },
    { name:'Wheeled', desc: "", id:65, qty:0 },
    { name:'Manoeuvre Drive (M-Drive)', desc: "", id:66, qty:0 },
    { name:'Jump Drive (J-Drive)', desc: "", id:67, qty:0 },
    { name:'Electronics', desc: "", id:68, qty:0 },
    { name:'Life Support', desc: "", id:69, qty:0 },
    { name:'Power', desc: "", id:70, qty:0 },
    { name:'Grav', desc: "", id:71, qty:0 },
    { name:'Rotor', desc: "", id:72, qty:0 },
    { name:'Wing', desc: "", id:73, qty:0 },
    { name:'Turrets', desc: "", id:74, qty:0 },
    { name:'Ortillery', desc: "", id:75, qty:0 },
    { name:'Screens', desc: "", id:76, qty:0 },
    { name:'Capital Weapons', desc: "", id:77, qty:0 },
    { name:'Slug Rifle', desc: "", id:78, qty:0 },
    { name:'Slug Pistol', desc: "", id:79, qty:0 },
    { name:'Shotgun', desc: "", id:80, qty:0 },
    { name:'Energy Rifle', desc: "", id:81, qty:0 },
    { name:'Energy Pistol', desc: "", id:82, qty:0 },
    { name:'Launchers', desc: "", id:83, qty:0 },
    { name:'Man Portable Artillery', desc: "", id:84, qty:0 },
    { name:'Field Artillery', desc: "", id:85, qty:0 },
    { name:'Anglic', desc: "Common trade language of the Third Imperium", id:86, qty:0 },
    { name:'Vilani', desc: "Language spoken by the Vilan of the First Imperium", id:87, qty:0 },
    { name:'Zdeti', desc: "Zhodani spoken language", id:88, qty:0 },
    { name:'Oynprith', desc: "Droyne ritual language", id:89, qty:0 },
    { name:'Unarmed Combat', desc: "", id:90, qty:0 },
    { name:'Blade', desc: "", id:91, qty:0 },
    { name:'Bludgeon', desc: "", id:92, qty:0 },
    { name:'Natural Weapons', desc: "", id:93, qty:0 },
    { name:'Small Creaft', desc: "", id:94, qty:0 },
    { name:'Spacecraft', desc: "", id:95, qty:0 },
    { name:'Capital Ships', desc: "", id:96, qty:0 },
    { name:'Physics', desc: "", id:97, qty:0 },
    { name:'Chemistry', desc: "", id:98, qty:0 },
    { name:'Electronics', desc: "", id:99, qty:0 },
    { name:'Biology', desc: "", id:100, qty:0 },
    { name:'Cybernetics', desc: "Study of blending living and synthetic life", id:101, qty:0 },
    { name:'Genetics', desc: "", id:102, qty:0 },
    { name:'Psionicology', desc: "", id:103, qty:0 },
    { name:'Archeology', desc: "", id:104, qty:0 },
    { name:'Economics', desc: "", id:105, qty:0 },
    { name:'History', desc: "", id:106, qty:0 },
    { name:'Linguistics', desc: "", id:107, qty:0 },
    { name:'Philosophy', desc: "", id:108, qty:0 },
    { name:'Psychology', desc: "Study of psionic powers and phenomena", id:109, qty:0 },
    { name:'Sophontology', desc: "Study of intelligent living creatures", id:110, qty:0 },
    { name:'Planetology', desc: "", id:111, qty:0 },
    { name:'Robotics', desc: "", id:112, qty:0 },
    { name:'Xenology', desc: "", id:113, qty:0 },
    { name:'Sail', desc: "", id:114, qty:0 },
    { name:'Submarine', desc: "", id:115, qty:0 },
    { name:'Ocean Ships', desc: "", id:116, qty:0 },
    { name:'Motorboats', desc: "", id:117, qty:0 },
    { name:'Military Tactics', desc: "", id:118, qty:0 },
    { name:'Naval Tactics', desc: "", id:119, qty:0 },
    { name:'Biologicals', desc: "", id:120, qty:0 },
    { name:'Civil Engineering', desc: "", id:121, qty:0 },
    { name:'Space Construction', desc: "", id:122, qty:0 },
    { name:'Hydroponics', desc: "", id:123, qty:0 },
    { name:'Polymers', desc: "", id:124, qty:0 },
  ];
}
