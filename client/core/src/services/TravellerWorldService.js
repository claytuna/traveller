var DiceRollService = require("services/DiceRollService");
var RandomWordService = require("services/RandomWordService");
var MS = require("services/MathService");

global.DiceRollService = DiceRollService;

const TravellerWorldService = {

	generate: () => {
		let name = RandomWordService.getRandomWord().toUpperCase();
		let tws = TravellerWorldService;
		let size = tws.getSize( DiceRollService.roll([ 11 ]) );
		let atmos = tws.getAtmosphere( (DiceRollService.roll([ 6, 6 ]) - 7) + size.values.digit );
		let temp = tws.getTemperature( DiceRollService.roll([ 6, 6 ]), atmos.values.digit );
		let hydro = tws.getHydrosphere( (DiceRollService.roll([ 6, 6 ]) - 7) + size.values.digit, size.values.digit, atmos.values.digit, temp.name );
		let pop = tws.getPopulation( (DiceRollService.roll([ 6, 6 ]) - 2) );
		let govt = tws.getGovernment( (DiceRollService.roll([ 6, 6 ]) - 7), size.values.digit, pop.value );
		let factions = tws.getFactions( (DiceRollService.roll([ 3 ]) ), pop.value, govt.values.digit );
		let law = tws.getLawLevel( (DiceRollService.roll([ 6, 6 ]) - 7), govt.values.digit );
		let sp = tws.getStarPort( DiceRollService.roll([ 6, 6 ]) );
		let tech = tws.getTechnology( DiceRollService.roll([ 6 ]), sp.name, size.values.digit, atmos.values.digit, hydro.values.digit, pop.values.digit, govt.values.digit );
		let travels = tws.getTravelCode( atmos.values.digit, tech.values.digit, law.values.digit );
		let trades = tws.getTradeCodes( size.values.digit, atmos.values.digit, hydro.values.digit, pop.values.digit, govt.values.digit , law.values.digit, tech.values.digit);
		let s = '_';

		return {
			name: name,
			uwp: `${name}${s}${s}${q.call()}${q.call()}${q.call()}${q.call()}${s}${s}${sp.name}${size.name}${atmos.name}${hydro.name}${pop.name}${govt.name}${law.name}-${tech.values.digit} ${ _.join( _.map(trades, (o)=>o.values.code), "") }`,
			size: size,
			atmosphere: atmos,
			temperature: temp,
			hydrosphere: hydro,
			population: pop,
			governments: govt,
			factions: factions,
			laws: law,
			culture: tws.getCulture( DiceRollService.roll([ 6 ]), DiceRollService.roll([ 6 ]) ),
			starport: sp,
			technologyLevel: tech,
			atmosphericWarning: tws.getAtmosphericWarning( tech.values.digit, atmos.values.digit ),
			communications: tws.getCommunications( tech.values.digit ),
			travelCodes: travels,
			tradeCodes: trades,
		};

		function q(){
			return MS.random(9, 0);
		}
	},

	getSize: ( roll ) => {
		const sizeOptions = [
			{ name: "0", id: 1, desc: "<800km; Asteroid; negligible gravity", qty: 1, type: 'SIZE', values: { digit: 0, diameter: MS.random.call(null, 1600, 0) , gravity: 0.001 } },
			{ name: "1", id: 2, desc: "800-1,600km", qty: 1, type: 'SIZE', values: { digit: 1, diameter: MS.random.call(null, 1600, 800) , gravity: 0.05 } },
			{ name: "2", id: 3, desc: "1600-3,200km; Triton", qty: 1, type: 'SIZE', values: { digit: 2, diameter: MS.random.call(null, 3200, 1600) , gravity: 0.15 } },
			{ name: "3", id: 4, desc: "3,200-4,800km; Mercury", qty: 1, type: 'SIZE', values: { digit: 3, diameter: MS.random.call(null, 4800, 3200) , gravity: 0.25 } },
			{ name: "4", id: 5, desc: "4,800-6,400km; Mars", qty: 1, type: 'SIZE', values: { digit: 4, diameter: MS.random.call(null, 6400, 4800) , gravity: 0.35 } },
			{ name: "5", id: 6, desc: "6,400-8,000km", qty: 1, type: 'SIZE', values: { digit: 5, diameter: MS.random.call(null, 8000, 6400) , gravity: 0.45 } },
			{ name: "6", id: 7, desc: "8,000-9,600km", qty: 1, type: 'SIZE', values: { digit: 6, diameter: MS.random.call(null, 9600, 8000) , gravity: 0.7 } },
			{ name: "7", id: 8, desc: "9,600-11,200km", qty: 1, type: 'SIZE', values: { digit: 7, diameter: MS.random.call(null, 11200, 9600) , gravity: 0.9 } },
			{ name: "8", id: 9, desc: "11,200-12,800km; Earth-like", qty: 1, type: 'SIZE', values: { digit: 8, diameter: MS.random.call(null, 12800, 11200) , gravity: 1.0 } },
			{ name: "9", id: 10, desc: "12,800-14,000km", qty: 1, type: 'SIZE', values: { digit: 9, diameter: MS.random.call(null, 14000, 12800) , gravity: 1.25 } },
			{ name: "A", id: 11, desc: ">16,000km.", qty: 1, type: 'SIZE', values: { digit: 10, diameter: MS.random.call(null, 500000, 14000) , gravity: 1.4 } }
		];

		return sizeOptions[roll - 1];
	},

	getAtmosphere: ( roll ) => {
		const atmosOptions = [
			{ name: "0", id: 1, desc: "None", qty: 1, type: 'ATMOSPHERE', values: { digit: 0, pressure: '0.00', gear: "VaccSuit" } },
			{ name: "1", id: 2, desc: "Trace", qty: 1, type: 'ATMOSPHERE', values: { digit: 1, pressure: '0.001-0.09', gear: "VaccSuit" } },
			{ name: "2", id: 3, desc: "Very Thin, Tainted", qty: 1, type: 'ATMOSPHERE', values: { digit: 2, pressure: '0.1-0.42', gear: "Respirator, Filter" } },
			{ name: "3", id: 4, desc: "Very Thin", qty: 1, type: 'ATMOSPHERE', values: { digit: 3, pressure: '0.1-0.42', gear: "Respirator" } },
			{ name: "4", id: 5, desc: "Thin, Tainted", qty: 1, type: 'ATMOSPHERE', values: { digit: 4, pressure: '0.43-0.7', gear: "Filter" } },
			{ name: "5", id: 6, desc: "Thin", qty: 1, type: 'ATMOSPHERE', values: { digit: 5, pressure: '0.43-0.7', gear: "" } },
			{ name: "6", id: 7, desc: "Standard", qty: 1, type: 'ATMOSPHERE', values: { digit: 6, pressure: '0.71-1.49', gear: "" } },
			{ name: "7", id: 8, desc: "Standard, Tainted", qty: 1, type: 'ATMOSPHERE', values: { digit: 7, pressure: '0.71-1.49', gear: "Filter" } },
			{ name: "8", id: 9, desc: "Dense", qty: 1, type: 'ATMOSPHERE', values: { digit: 8, pressure: '1.5-2.49', gear: "" } },
			{ name: "9", id: 10, desc: "Dense, Tainted", qty: 1, type: 'ATMOSPHERE', values: { digit: 9, pressure: '1.5-2.49', gear: "Filter" } },
			{ name: "A", id: 11, desc: "Exotic", qty: 1, type: 'ATMOSPHERE', values: { digit: 10, pressure: 'Varies', gear: "AirSupply" } },
			{ name: "B", id: 12, desc: "Corrosive", qty: 1, type: 'ATMOSPHERE', values: { digit: 11, pressure: 'Varies', gear: "VaccSuit" } },
			{ name: "C", id: 13, desc: "Insidious", qty: 1, type: 'ATMOSPHERE', values: { digit: 12, pressure: 'Varies', gear: "VaccSuit" } },
			{ name: "D", id: 14, desc: "Dense, High", qty: 1, type: 'ATMOSPHERE', values: { digit: 13, pressure: '2.5+', gear: "" } },
			{ name: "E", id: 15, desc: "Thin, Low", qty: 1, type: 'ATMOSPHERE', values: { digit: 14, pressure: '<0.5', gear: "" } },
			{ name: "F", id: 16, desc: "Unusual", qty: 1, type: 'ATMOSPHERE', values: { digit: 15, pressure: 'Varies', gear: "Varies" } },
		];

		return atmosOptions[ roll < 0 ? 0 : roll ];
	},

	getTemperature: ( roll, atmosVal, habitableZone = 1 ) => {
		const tempOptions = [
			{ name: "Extreme", id: 0, desc: "Temperatures range from roasting during the day, frozen at night.", qty: 1, type: 'TEMPERATURE', values: { maxTemp: ">81° C" , minTemp: "<-51° C" } },
			{ name: "Frozen", id: 1, desc: "Frozen world. No liquid water, very dry atmosphere.", qty: 1, type: 'TEMPERATURE', values: { maxTemp: "-51° C" , minTemp: "<-51° C" } },
			{ name: "Cold", id: 2, desc: "Icy world. Little liquid water, extensive ice caps, few clouds.", qty: 1, type: 'TEMPERATURE', values: { maxTemp: "0° C" , minTemp: "-50° C" } },
			{ name: "Temperate", id: 3, desc: "Temperate world. Liquid and vaporized water are common, moderate ice caps.", qty: 1, type: 'TEMPERATURE', values: { maxTemp: "30° C" , minTemp: "0° C" } },
			{ name: "Hot", id: 4, desc: "Hot world. Small or no ice caps, little liquid water. Most water in the form of clouds", qty: 1, type: 'TEMPERATURE', values: { maxTemp: "80° C" , minTemp: "31° C" } },
			{ name: "Roasting", id: 5, desc: "Boiling world. No ice caps, little to no liquid water.", qty: 1, type: 'TEMPERATURE', values: { maxTemp: ">81° C" , minTemp: "81° C" } },
		];

		/*Atmosphere modifiers*/
		if (atmosVal === 0 || atmosVal === 1) return tempOptions[0];
		if (atmosVal === 2 || atmosVal === 3) roll = roll - 2;
		if (atmosVal === 4 || atmosVal === 5 || atmosVal === 14) roll = roll - 1;
		if (atmosVal === 6 || atmosVal === 7) roll = roll;
		if (atmosVal === 8 || atmosVal === 9) roll = roll + 1;
		if (atmosVal === 10 || atmosVal === 13 || atmosVal === 15) roll = roll + 2;
		if (atmosVal === 11 || atmosVal === 12) roll = roll + 6;

		/*habitableZone is the proximity to the system's star; 0 is hot edge, 1 is normal, 2 is cold edge*/
		if (habitableZone === 0) roll = roll + 4;
		if (habitableZone === 2) roll = roll - 4;

		if (roll <= 2) return tempOptions[1];
		if (roll >= 3 && roll <= 4) return tempOptions[2];
		if (roll >= 5 && roll <= 9) return tempOptions[3];
		if (roll >= 10 && roll <= 11) return tempOptions[4];
		if (roll >= 12) return tempOptions[5];
	},

	getHydrosphere: ( roll, sizeVal, atmosVal, tempVal ) => {
		var hydroOptions = [
			{ name: "0", id: 0, desc: "Desert world", qty: 1, type: 'HYDROSPHERE', values: {digit: 0, percentRange: "0%-5%", percent: MS.random.call(null, 5, 0) } },
			{ name: "1", id: 1, desc: "Dry world", qty: 1, type: 'HYDROSPHERE', values: {digit: 1, percentRange: "6%-15%", percent: MS.random.call(null, 15, 6)} },
			{ name: "2", id: 2, desc: "A few small seas", qty: 1, type: 'HYDROSPHERE', values: {digit: 2, percentRange: "16%-25%", percent: MS.random.call(null, 25, 16)} },
			{ name: "3", id: 3, desc: "Small seas and oceans", qty: 1, type: 'HYDROSPHERE', values: {digit: 3, percentRange: "26%-35%", percent: MS.random.call(null, 35, 26)} },
			{ name: "4", id: 4, desc: "Wet world", qty: 1, type: 'HYDROSPHERE', values: {digit: 4, percentRange: "36%-45%", percent: MS.random.call(null, 45, 36)} },
			{ name: "5", id: 5, desc: "Large oceans", qty: 1, type: 'HYDROSPHERE', values: {digit: 5, percentRange: "46%-55%", percent: MS.random.call(null, 55, 46)} },
			{ name: "6", id: 6, desc: "Moderate seas and oceans", qty: 1, type: 'HYDROSPHERE', values: {digit: 6, percentRange: "56%-65%", percent: MS.random.call(null, 65, 56)} },
			{ name: "7", id: 7, desc: "Earth-like; large oceans, rivers, seas", qty: 1, type: 'HYDROSPHERE', values: {digit: 7, percentRange: "66%-75%", percent: MS.random.call(null, 75, 66)} },
			{ name: "8", id: 8, desc: "Water world", qty: 1, type: 'HYDROSPHERE', values: {digit: 8, percentRange: "76%-85%", percent: MS.random.call(null, 85, 76)} },
			{ name: "9", id: 9, desc: "Only a few small islands and archipelagoes", qty: 1, type: 'HYDROSPHERE', values: {digit: 9, percentRange: "86%-95%", percent: MS.random.call(null, 95, 86)} },
			{ name: "A", id: 10, desc: "Almost entirely water", qty: 1, type: 'HYDROSPHERE', values: {digit: 10, percentRange: "96%-100%", percent: MS.random.call(null, 100, 96)} },
		];

		if (sizeVal <= 1) return hydroOptions[0];

		if (atmosVal <= 1) roll = roll - 4;
		if (atmosVal >= 10 && atmosVal <= 12) roll = roll - 4;

		if (tempVal === "Hot") roll = roll - 2;
		if (tempVal === "Roasting") roll = roll - 6;

		if (roll <= 0) return hydroOptions[0];
		if (roll >= 11) return hydroOptions[10];

		return hydroOptions[roll - 1];
	},

	getPopulation: ( roll ) => {
		const populationOptions = [
			{ name: "0", id: 0, desc: "Uninhabited", qty: 1, type: 'POPULATION', values: { digit:0, total:0} },
			{ name: "1", id: 1, desc: "Tiny farmstead or single family; 1+", qty: 1, type: 'POPULATION', values: { digit:1, total:MS.random.call(null, 99, 1)} },
			{ name: "2", id: 2, desc: "Village; 100+", qty: 1, type: 'POPULATION', values: { digit:2, total:MS.random.call(null, 999, 100)} },
			{ name: "3", id: 3, desc: "1,000+", qty: 1, type: 'POPULATION', values: { digit:3, total:MS.random.call(null, 9999, 1000)} },
			{ name: "4", id: 4, desc: "Small town; 10,000+", qty: 1, type: 'POPULATION', values: { digit:4, total:MS.random.call(null, 99999, 10000)} },
			{ name: "5", id: 5, desc: "Average City; 100,000+", qty: 1, type: 'POPULATION', values: { digit:5, total:MS.random.call(null, 999999, 100000)} },
			{ name: "6", id: 6, desc: "1,000,000+", qty: 1, type: 'POPULATION', values: { digit:6, total:MS.random.call(null, 9999999, 1000000)} },
			{ name: "7", id: 7, desc: "Large City; 10,000,000", qty: 1, type: 'POPULATION', values: { digit:7, total:MS.random.call(null, 99999999, 10000000)} },
			{ name: "8", id: 8, desc: "100,000,000+", qty: 1, type: 'POPULATION', values: { digit:8, total:MS.random.call(null, 999999999, 100000000)} },
			{ name: "9", id: 9, desc: "Present day Earth; 1,000,000,000+", qty: 1, type: 'POPULATION', values: { digit:9, total:MS.random.call(null, 9999999999, 1000000000)} },
			{ name: "A", id: 10, desc: "10,000,000,000+", qty: 1, type: 'POPULATION', values: { digit:10, total:MS.random.call(null, 99999999999, 10000000000)} },
			{ name: "B", id: 11, desc: "Incredibly crowded world; 100,000,000,000+", qty: 1, type: 'POPULATION', values: { digit:11, total:MS.random.call(null, 999999999999, 100000000000)} },
			{ name: "C", id: 12, desc: "World-city; 1,000,000,000,000+", qty: 1, type: 'POPULATION', values: { digit:12, total:MS.random.call(null, 9999999999999, 1000000000000)} },
		];

		return populationOptions[roll];
	},

	getGovernment: ( roll, sizeVal, popVal ) => {
		const govtOptions = [
			{ name: "0", id: 1, desc: "None: No government structure. In many cases, family bonds predominate", qty: 1, type: 'GOVERNMENT', values:{ digit:0, examples:"Family, Clan, Anarchy", contraband:"None" } },
			{ name: "1", id: 1, desc: "Company/corporation: Ruling functions are performed by a company managerial elite, and most of the citizenry are company employees or dependants", qty: 1, type: 'GOVERNMENT', values:{ digit:1, examples:"Corporate outpost, asteroid mine, feudal domain", contraband: "Weapons, drugs, travellers" } },
			{ name: "2", id: 1, desc: "Participating democracy: Ruling functions are performed under the advice and consent of the citizenry directly", qty: 1, type: 'GOVERNMENT', values:{ digit:2, examples:"Collective, tribal council, comm-linked concensus", contraband: "Drugs" } },
			{ name: "3", id: 1, desc: "Self-perpetuating oligarchy: Ruling functions are performed by a restricted minority, with little or no input from the mass citizenry", qty: 1, type: 'GOVERNMENT', values:{ digit:3, examples:"Plutocracy, hereditary ruling caste", contraband: "Technology, weapons, travellers" } },
			{ name: "4", id: 1, desc: "Representative democracy: Ruling functions are performed by elected representatives", qty: 1, type: 'GOVERNMENT', values:{ digit:4, examples:"Republic, democracy", contraband: "Drugs, weapons, psionics" } },
			{ name: "5", id: 1, desc: "Feudal technochracy: Ruling functions are performed by specific individuals for persons who agree to be ruled by them. Relationships are based on the performance of technical activities which are mutually beneficial", qty: 1, type: 'GOVERNMENT', values:{ digit:5, examples:"Feudalism", contraband: "Technology, weapons, computers" } },
			{ name: "6", id: 1, desc: "Captive government: Ruling functions are performed by an imposed leadership answerable to an outside group", qty: 1, type: 'GOVERNMENT', values:{ digit:6, examples:"A colony or conquered area", contraband: "Weapons, technology, travellers" } },
			{ name: "7", id: 1, desc: "Balkanization: No central authority exists; rival governments compete for control. Law level refers to the government nearest the starport", qty: 1, type: 'GOVERNMENT', values:{ digit:7, examples:"Multiple governments, civil war", contraband: "Varies" } },
			{ name: "8", id: 1, desc: "Civil service bureaucracy: Ruling functions are performed by government agencies employing individuals selected for their expertise", qty: 1, type: 'GOVERNMENT', values:{ digit:8, examples:"Technochracy, Communism", contraband: "Drugs, weapons" } },
			{ name: "9", id: 1, desc: "Impersonal bureaucracy: Ruling functions are performed by agencies that have become insulated from governed citizens", qty: 1, type: 'GOVERNMENT', values:{ digit:9, examples:"Entrenched castes of bureaucrats, decaying empire", contraband: "Technology, weapons, drugs, travellers, psionics" } },
			{ name: "A", id: 1, desc: "Charismatic dictator: Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confidence of the citizenry", qty: 1, type: 'GOVERNMENT', values:{ digit:10, examples:"Revolutionary leader, messiah, emperor", contraband: "None" } },
			{ name: "B", id: 1, desc: "Non-charismatic leader: A previous charismatic dictator has been replaced by a leader through normal channels", qty: 1, type: 'GOVERNMENT', values:{ digit:11, examples:"Military dictatorship, hereditary kingship", contraband: "Weapons, technology, computers" } },
			{ name: "C", id: 1, desc: "Charismatic oligarchy: Ruling functions are performed by a select group of members of an organization or class which enjoys the overwhelming confidence of the citizenry", qty: 1, type: 'GOVERNMENT', values:{ digit:12, examples:"Junta, revolutionary council", contraband: "Weapons" } },
			{ name: "D", id: 1, desc: "Religious dictatorship: Ruling functions are performed by a religious organization without regard to specific individual needs of the citizenry", qty: 1, type: 'GOVERNMENT', values:{ digit:13, examples:"Cult, transcendent philosophy, psionic group mind, hive", contraband: "Varies" } }
		];

		roll = roll + sizeVal;

		if(popVal === 0) roll = 0;

		if(roll >= 13) return govtOptions[13];

		return govtOptions[roll < 0 ? 0 : roll];
	},

	getFactions: ( roll, popVal, govtVal ) => {
		var result = [];

		var factionOptions = [
			{ name: "Obscure group", id: 0, desc: "Few have heard of them; no popular support", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} },
			{ name: "Fringe group", id: 1, desc: "Few supporters; obscure", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} },
			{ name: "Minor group", id: 2, desc: "Some supporters; barely known", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} },
			{ name: "Notable group", id: 3, desc: "Significant support; well-known", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} },
			{ name: "Significant", id: 4, desc: "Nearly as powerful as the government", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} },
			{ name: "Overwhelming popular support", id: 5, desc: "More powerful than the government", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} }
		];

		function getFactionGovt() {
			return TravellerWorldService.getGovernment(DiceRollService.roll([12]), 0, 1);
		}

		if(popVal <= 0) return [];

		if(govtVal === 0 || govtVal === 7) roll = roll + 1;
		if(govtVal >= 10) roll = roll - 1;

		if(roll === 0) return [];

		var sizeRoll;
		for(var i = 0; i < roll; i++){
			sizeRoll = DiceRollService.roll([6, 6]);
			if(sizeRoll >= 1 && sizeRoll <= 3) { result.push({ name: "Obscure group", id: 0, desc: "Few have heard of them; no popular support", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} });}
			if(sizeRoll >= 4 && sizeRoll <= 5) { result.push({ name: "Fringe group", id: 1, desc: "Few supporters; obscure", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} });}
			if(sizeRoll >= 6 && sizeRoll <= 7) { result.push({ name: "Minor group", id: 2, desc: "Some supporters; barely known", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} });}
			if(sizeRoll >= 8 && sizeRoll <= 9) { result.push({ name: "Notable group", id: 3, desc: "Significant support; well-known", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} });}
			if(sizeRoll >= 10 && sizeRoll <= 11) { result.push({ name: "Significant", id: 4, desc: "Nearly as powerful as the government", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} });}
			if(sizeRoll > 11) { result.push({ name: "Overwhelming popular support", id: 5, desc: "More powerful than the government", qty: 1, type: 'FACTION', values:{digit:0, govt: getFactionGovt()} });}
		}

		return result;

	},

	getLawLevel: ( roll, govtVal ) => {
		var lawOptions = [
			{ name: "0", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:0, weapons:"No restrictions", drugs:"No restrictions", information:"No restrictions", technology:"No restrictions", travellers:"No restrictions", psionics:"No restrictions" } },
			{ name: "1", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:1, weapons:"Poison gas, explosives, undetectable weapons, WMD", drugs:"Highly addictive and dangerous narcotics", information:"Intellect programs", technology:"Dangerous technologies such as nanotechnology", travellers:"Visitors must contacat planetary authorities by radio, landing is permitted anywhere", psionics:"Dangerous talents must be registered." } },
			{ name: "2", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:2, weapons:"Portable energy weapons (except ship-mounted weapons)", drugs:"Highly addictive narcotics", information:"Agent programs", technology:"Alien technology", travellers:"Visitors must report passenger manifest, landing is permitted anywhere", psionics:"All psionic powers must be registered; use of dangerous powers forbidden" } },
			{ name: "3", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:3, weapons:"Heavy weapons", drugs:"Combat drugs", information:"Intrusion programs", technology:"TL 15 items", travellers:"Landing only at starport or other authorized sites", psionics:"Use of telepathy restricted to government approved telepaths" } },
			{ name: "4", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:4, weapons:"Light assault weapons and submachine guns", drugs:"Addictive narcotics", information:"Security programs", technology:"TL 13 items", travellers:"Landing only at starport", psionics:"Use of teleportation and clairvoyance restricted" } },
			{ name: "5", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:5, weapons:"Personal concealable weapons", drugs:"Agnathics", information:"Expert programs", technology:"TL 11 items", travellers:"Citizens must register offworld travel, visitors must register all business", psionics:"Use of all psionic powers restricted to government psionicists" } },
			{ name: "6", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:6, weapons:"All firearms except shotguns and stunners; carrying weapons discouraged", drugs:"Fast and Slow drugs", information:"Recent news from offworld", technology:"TL 9 items", travellers:"Visitors discouraged; excessive contact with citizens forbidden", psionics:"Possession of psionic drugs banned" } },
			{ name: "7", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:7, weapons:"Shotguns", drugs:"All narcotics", information:"Library programs, unfiltered data about other worlds. Free speech curtailed", technology:"TL 7 items", travellers:"Citizens may not leave planet; visitors may not leave starport", psionics:"Use of psionics forbidden" } },
			{ name: "8", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:8, weapons:"All bladed weapons, stunners", drugs:"Medicinal drugs", information:"Information technology, any non-critical data from offworld, personal media", technology:"TL 5 items", travellers:"Landing permitted only to imperial agents", psionics:"Psionic-related technology banned" } },
			{ name: "9", id: 1, desc: "", qty: 1, type: 'LAW', values:{ digit:9, weapons:"Any weapons", drugs:"All drugs", information:"Any data from offworld. No free press", technology:"TL 3 items", travellers:"No offworlders permitted", psionics:"All psionics" } }
		];

		roll = roll + govtVal;

		if( roll <= 0 ) return lawOptions[0];
		if( roll >= 9 ) return lawOptions[9];

		return lawOptions[roll];
	},

	getCulture: ( rollA, rollB ) => {
		const cultureOptions = [
			{ name: "Sexist", id: 0, desc: "One gender is considered subservient to the other.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:11} },
			{ name: "Religious", id: 0, desc: "Culture is heavily influenced by a religion or belief system, possibly one unique to this world.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:12} },
			{ name: "Artistic", id: 0, desc: "Art and culture are highly prized. Aesthetic design is important in all artifacts produced onworld.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:13} },
			{ name: "Ritualized", id: 0, desc: "Social interaction and trade is highly formalized. Politeness and adherence to traditional forms is condsidered very important", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:14} },
			{ name: "Conservative", id: 0, desc: "The culture resists change and outside influences.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:15} },
			{ name: "Xenophobic", id: 0, desc: "The culture distrusts outsiders and alien influences. Offworlders will face considerable prejudice.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:16} },
			{ name: "Taboo", id: 0, desc: "A particular topic is forbidden and cannot be discussed. Characters who unwittingly mention this topic will be ostracized.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:21} },
			{ name: "Deceptive", id: 0, desc: "Trickery and equivocation are considered acceptable. Honesty is a sign of weakness.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:22} },
			{ name: "Liberal", id: 0, desc: "The culture welcomes change and offworld influence. Characters who bring new and strange ideas will be welcomed.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:23} },
			{ name: "Honorable", id: 0, desc: "One's word is one's bond in the culture. Lying is both rare and despised.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:24} },
			{ name: "Influenced", id: 0, desc: "The culture is heavily influenced by another, neighboring world.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:25, instructions:"If you have details for the neighboring world, choose a cultural quirk that this world has adopted. If not, roll for one."} },
			{ name: "Fusion", id: 0, desc: "The culture is a merger of two distinct cultures.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:26, instructions:"Roll again twice ot determine the quirks inherited from these cultures. If the quirks are incompatible, then the culture is likely divided."} },
			{ name: "Barbaric", id: 0, desc: "Physical strength and combat prowess are highly valued in the culture. Characters may be challenged to a fight, or dismissed if they seem incapable of defending themselves. Sports tend towards the bloody and violent.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:31} },
			{ name: "Remnant", id: 0, desc: "The culture is a surviving remnant of a one-great and vibrant civilization, clinging to its former glory. The world is filled with crumbling ruins, and every story revolves around the good old days.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:32} },
			{ name: "Degenerate", id: 0, desc: "The culture is falling apart and is on the brink of war or economic collapse. Violent protests are common and the social order is decaying.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:33} },
			{ name: "Progressive", id: 0, desc: "The culture is expanding and vibrant. Fortunes are being made in trade; science is forging bravely ahead.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:34} },
			{ name: "Recovering", id: 0, desc: "A recent trauma, such as a plague, war, disaster, or despotic regime has left scars on the culture.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:35} },
			{ name: "Nexus", id: 0, desc: "Members or many different cultures and species visit here.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:36} },
			{ name: "Tourist attraction", id: 0, desc: "Some aspect of the culture or planet draws visitors from all over charted space.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:41} },
			{ name: "Violent", id: 0, desc: "Physical conflict is common, taking the form of duels, brawls or other contests. Trial by combat is a part of their judicial system.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:42} },
			{ name: "Peaceful", id: 0, desc: "Physical conflict is almost unheard-of. The culture produces few soldiers and diplomacy reigns supreme. Forceful characters will be ostracized.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:43} },
			{ name: "Obsessed", id: 0, desc: "Everyone is obsessed with or addicted to a substance, personality, act or item. This monomania pervades every aspect of the culture.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:44} },
			{ name: "Fashionable", id: 0, desc: "Fine clothing and decoration are considered vitally important in the culture. Underdressed characters have no standing here.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:45} },
			{ name: "Warlike", id: 0, desc: "The culture is at war, either with another planet or polity, or is troubled by terrorists or rebels.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:46} },
			{ name: "Unusual customs: Offworlders", id: 0, desc: "Space travellers hold a unique position in the culture's mythology or beliefs, and travellers will be expected to live up to those myths.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:51} },
			{ name: "Unusual customs: Starport", id: 0, desc: "The planet's starport is more than a commercial center; it might be a temple, or be seen as highly controversial and surrounded by protestors.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:52} },
			{ name: "Unusual customs: Media", id: 0, desc: "News agencies and telecommunications channels are especially strange here. Getting accurate information may be difficult.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:53} },
			{ name: "Unusual customs: Technology", id: 0, desc: "The culture interacts with technology in an unusual way. Telecommunications might be banned, robots might have civil rights, cyborgs might be property, etc.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:54} },
			{ name: "Unusual customs: Lifecycle", id: 0, desc: "There might be a mandatory age of termination, or anagathics might be widely used. Family units might be different, with children being raised by the state or banned in favor of cloning.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:55} },
			{ name: "Unusual customs: Social Standings", id: 0, desc: "The culture has a distinct caste system. Characters of a low social standing who do not behave appropriately will face punishment.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:56} },
			{ name: "Unusual customs: Trade", id: 0, desc: "The culture has an odd attitude towards some aspect of commerce, which may interfere with trade at the spaceport. For example, merchants might expect a gift as part of a deal, or some goods may only be handled by certain families.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:61} },
			{ name: "Unusual customs: Nobility", id: 0, desc: "Those of high social standing have a strange custom associated with them; perhaps nobles are blinded, or must live in gilded cages, or only serve for a single year before being exiled.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:62} },
			{ name: "Unusual customs: Sex", id: 0, desc: "The culture has an unusual attitude towards intercourse and reproduction. Perhaps cloning is used instead, or sex is used to seal commercial deals.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:63} },
			{ name: "Unusual customs: Eating", id: 0, desc: "Food and drink occupies an unusual place in the culture. Perhaps eating is a private affair, or banquets and formal dinners are seen as the highest form of politeness.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:64} },
			{ name: "Unusual customs: Travel", id: 0, desc: "Travellers may be distrusted or feted, or perhaps the culture frowns on those who leave their homes.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:65} },
			{ name: "Unusual customs: Conspiracy", id: 0, desc: "Something strange is going on. The government is being subverted by another group or agency.", qty: 1, type: 'CULTURE_DIFFERENCE', values: {roll:66} },
		];

		var roll = parseInt(String(rollA) + String(rollB));

		return _.filter(cultureOptions, (o)=> o.values.roll == roll)[0];
	},

	getStarPort: ( roll ) => {
		var dr = () => DiceRollService.roll([6, 6]);
		var gb = (baseRoll, baseType, difficulty) => { return baseRoll >= difficulty ? baseType : "No " + baseType };

		var starportOptions = [
			{ name: "A", id: 1, desc: "Excellent", qty: 1, type: 'STARPORT', values:{berthingCost:(DiceRollService.roll([6]) * 1000), fuel:"Refined", facilities: "Shipyard (all), Repair", bases:[ gb(dr(), "Naval", 8), gb(dr(), "Scout", 10), gb(dr(), "Research", 8), gb(dr(), "TAS", 4), gb(dr(), "Imperial Consulate", 6) ] } },
			{ name: "B", id: 1, desc: "Good", qty: 1, type: 'STARPORT', values:{berthingCost:(DiceRollService.roll([6]) * 500), fuel:"Refined", facilities: "Shipyard (spacecraft), Repair", bases:[ gb(dr(), "Naval", 8), gb(dr(), "Scout", 8), gb(dr(), "Research", 10), gb(dr(), "TAS", 6), gb(dr(), "Imperial Consulate", 8), gb(dr(), "Pirate", 12) ] } },
			{ name: "C", id: 1, desc: "Routine", qty: 1, type: 'STARPORT', values:{berthingCost:(DiceRollService.roll([6]) * 100), fuel:"Unrefined", facilities: "Shipyard (small craft), Repair", bases:[ gb(dr(), "Scout", 8), gb(dr(), "Research", 10), gb(dr(), "TAS", 10) , gb(dr(), "Imperial Consulate", 10), gb(dr(), "Pirate", 10) ] } },
			{ name: "D", id: 1, desc: "Poor", qty: 1, type: 'STARPORT', values:{berthingCost:(DiceRollService.roll([6]) * 10), fuel:"Unrefined", facilities: "Limited repair (structural repairs only, not systems)", bases:[ gb(dr(), "Scout", 7), gb(dr(), "Pirate", 12)]} },
			{ name: "E", id: 1, desc: "Frontier", qty: 1, type: 'STARPORT', values:{berthingCost:0, fuel:"None", facilities: "None", bases:[gb(dr(), "Pirate", 12)]} },
			{ name: "X", id: 1, desc: "No starport", qty: 1, type: 'STARPORT', values:{berthingCost:0, fuel:"None", facilities: "None", bases:["None"]} },
		];

		if(roll <= 2) return starportOptions[5];
		if(roll === 3 || roll === 4) return starportOptions[4];
		if(roll === 5 || roll === 6) return starportOptions[3];
		if(roll === 7 || roll === 8) return starportOptions[2];
		if(roll === 9 || roll === 10) return starportOptions[1];
		if(roll >= 11) return starportOptions[0];

		return starportOptions[5];
	},

	getTechnology: ( roll, starportName, sizeVal, atmosVal, hydroVal, popVal, govtVal ) => {
		var techOptions = [
			{ name: "TL 0: (Primitive)", id: 1, desc: "No technology. TL 0 species have only discovered the simplest tools and principles, and are on par with Earth's stone age.", type: 'TECHNOLOGYLEVEL', values:{ digit:0 } },
			{ name: "TL 1: (Primitive)", id: 1, desc: "Roughly on par with Bronze or Iron age technology. TL 1 science is mostly superstition, but they can manufacture weapons and work metals.", type: 'TECHNOLOGYLEVEL', values:{ digit:1 } },
			{ name: "TL 2: (Primitive)", id: 1, desc: "Renaissance technology. TL 2 brings with it a greater understanding of chemistry, physics, biology, and astronomy as well as the scientific method.", type: 'TECHNOLOGYLEVEL', values:{ digit:2 } },
			{ name: "TL 3: (Primitive)", id: 1, desc: "The advances of TL 2 are now applied, bringing the germ of industrial revolution and steam power. Primitive firearms now dominate the battlefield. This is roughly comparable to the early 19th century.", type: 'TECHNOLOGYLEVEL', values:{ digit:3 } },
			{ name: "TL 4: (Industrial)", id: 1, desc: "The transition to industrial revolution is complete, bringing plastics, radio, and other such inventions. Roughly comparable to to the late 19th/early 20th century.", type: 'TECHNOLOGYLEVEL', values:{ digit:4 } },
			{ name: "TL 5: (Industrial)", id: 1, desc: "TL 5 brings widespread electrification, telecommunications, and internal combustion. At the high end of the TL, atomics and primitive computing appear. Roughly on par with the mid-20th century.", type: 'TECHNOLOGYLEVEL', values:{ digit:5 } },
			{ name: "TL 6: (Industrial)", id: 1, desc: "TL 6 brings the development of fision power and more advanced computing. Advances in materials technology and roketry bring about the dawn of the space age.", type: 'TECHNOLOGYLEVEL', values:{ digit:6 } },
			{ name: "TL 7: (Pre-Stellar)", id: 1, desc: "A pre-stellar society can reach orbit reliably and has telecommunications satellites. Computers become common.", type: 'TECHNOLOGYLEVEL', values:{ digit:7 } },
			{ name: "TL 8: (Pre-Stellar)", id: 1, desc: "At TL 8, it is possible to reach other worlds in the same system, although terraforming or full colonization are not within the culture's capacity. Permanent space habitats become possible. Fusion power becomes commercially viable.", type: 'TECHNOLOGYLEVEL', values:{ digit:8 } },
			{ name: "TL 9: (Pre-Stellar)", id: 1, desc: "The defining element of TL 9 is the development of gravity manipulation, which makes space travel vastly safer and faster. This research leads to the development of the jump drive, which occurs near the end of this tech level. TL 9 cultures can colonize other worlds, although going to a colony is generally a one-way trip.", type: 'TECHNOLOGYLEVEL', values:{ digit:9 } },
			{ name: "TL 10: (Early Stellar)", id: 1, desc: "With the advent of jump, nearby systems are opened up. Orbital habitats and factories become common. Interstellar travel and trade lead to an economic boon. Colonies become much more viable.", type: 'TECHNOLOGYLEVEL', values:{ digit:10 } },
			{ name: "TL 11: (Early Stellar)", id: 1, desc: "The first true artificial intelligences become possible as computers are able to model synaptic networks. Grav-supported structures reach to the heavens. Jump-2 travel becomes possible, allowing easier travel beyond the one-Jump stellar mains.", type: 'TECHNOLOGYLEVEL', values:{ digit:11 } },
			{ name: "TL 12: (Average Stellar)", id: 1, desc: "Weather control revolutionizes terraforming and agriculture. Man-portable plasma weapons and carrier-mounted fusion guns make the battlefield untenable for unarmoured combatants. Jump-3 travel is developed.", type: 'TECHNOLOGYLEVEL', values:{ digit:12 } },
			{ name: "TL 13: (Average Stellar)", id: 1, desc: "The battle dress appears on the battlefield in response to the new weapons. Cloning of body parts becomes easy. Advances in hull design and thruster plates means that spacecraft can easily enter atmosphere and even go underwater. Jump-4 travel.", type: 'TECHNOLOGYLEVEL', values:{ digit:13 } },
			{ name: "TL 14: (Average Stellar)", id: 1, desc: "Fusion weapons become man-portable. Flying cities appear. Jump-5 travel.", type: 'TECHNOLOGYLEVEL', values:{ digit:14 } },
			{ name: "TL 15: (High Stellar)", id: 1, desc: "Black globe generators suggest a new direction for defensive technologies, while the development of of synthetic agnathics means that the human lifespan is now widely increased. Jump-6 travel.", type: 'TECHNOLOGYLEVEL', values:{ digit:15 } },
		];

		var total = roll;

		/*starport modifiers*/
		if(starportName === "A") total = total + 6;
		if(starportName === "B") total = total + 4;
		if(starportName === "C") total = total + 2;
		if(starportName === "X") total = total - 4;

		/*size modifiers*/
		if(sizeVal <= 1 ) total = total + 2;
		if(sizeVal >= 2 && sizeVal <= 4) total = total + 1;

		/*atmosphere modifiers*/
		if(atmosVal <= 3) total = total + 1;
		if(atmosVal >= 10) total = total + 1;

		/*hydrology modifiers*/
		if(hydroVal === 0) total = total + 1;
		if(hydroVal === 9) total = total + 1;
		if(hydroVal === 10) total = total + 2;

		/*population modifiers*/
		if(popVal >= 1 && popVal <= 5) total = total + 1;
		if(popVal === 9) total = total + 1;
		if(popVal === 10) total = total + 2;
		if(popVal === 11) total = total + 3;
		if(popVal === 12) total = total + 4;

		/*government modifiers*/
		if(govtVal === 0) total = total + 1;
		if(govtVal === 5) total = total + 1;
		if(govtVal === 7) total = total + 2;
		if(govtVal === 13) total = total - 2;
		if(govtVal === 14) total = total - 2; /*technically impossible?*/

		if (total <=0 ) return techOptions[0];
		if (total >=15 ) return techOptions[15];

		return techOptions[total];
	},

	getCommunications( techLevel ){
		var commOptions = [
			{ name: "No comms", id: 0, desc: "No telecommunication system whatsoever except for what the starport offers.", type: 'TECHCOMMS', values:{digit:0} },
			{ name: "Basic comms", id: 0, desc: "Radio and telephone communications between major cities.", type: 'TECHCOMMS', values:{digit:1} },
			{ name: "Advanced comms", id: 0, desc: "More advanced communications grid with only occasional gaps", type: 'TECHCOMMS', values:{digit:2} },
			{ name: "Universal comms", id: 0, desc: "Communications grid accesible from every point on the surface - satellites cheap and easy to deploy.", type: 'TECHCOMMS', values:{digit:3} }
		];

		if(techLevel <= 3) return commOptions[0];
		if(techLevel >= 4 && techLevel <= 6) return commOptions[1];
		if(techLevel >= 7 && techLevel <= 8) return commOptions[2];
		if(techLevel >= 9) return commOptions[3];
	},

	getAtmosphericWarning( techLevel, atmosVal ){

		if(techLevel <= 7 && atmosVal <=1) return true;
		if(techLevel <= 4 && atmosVal >=2 && atmosVal <=3) return true;
		if(techLevel <= 2 && atmosVal === 4) return true;
		if(techLevel <= 2 && atmosVal === 7) return true;
		if(techLevel <= 2 && atmosVal === 9) return true;
		if(techLevel <= 7 && atmosVal === 10) return true;
		if(techLevel <= 8 && atmosVal === 11) return true;
		if(techLevel <= 9 && atmosVal === 12) return true;
		if(techLevel <= 4 && atmosVal === 13) return true;
		if(techLevel <= 4 && atmosVal === 14) return true;
		if(techLevel <= 7 && atmosVal === 15) return true;

		return false;
	},

	getTravelCode( atmosVal, govtVal, lawVal ){
		var travelOptions = [
			{ name: "Amber", id: 0, desc: "Travel deemed dangerous by the Imperium. Typically undergoing revolution or have naturally hazardous environments", type: 'TRAVELCODE', values:{digit:0} },
			{ name: "Red", id: 0, desc: "Travel forbidden by the Imperium. Interdictions are enforced by the Imperial Navy.", type: 'TRAVELCODE', values:{digit:1} },
		];

		if( atmosVal >= 10 ) return travelOptions[0];
		if( govtVal === 0 || govtVal === 7 || govtVal === 10 ) return travelOptions[0];
		if( lawVal === 0 || lawVal >= 9 ) return travelOptions[0];

		return undefined;
	},

	getTradeCodes( sizeVal, atmosVal, hydroVal, popVal, govtVal, lawLevel, techLevel ){
		var result = []; /*console.log(sizeVal, atmosVal, hydroVal, popVal, govtVal, lawLevel, techLevel);*/

		var tradeCodes = [
			{ name: "Agricultural", id:0, desc:"Agricultural worlds are dedicated to farming and food production. Often devided into semi-feudal estates", values:{ digit:0, code:"Ag" }},
			{ name: "Asteroid", id:0, desc:"Asteroids are usually mining colonies, but can also be orbital factories or colonies", values:{ digit:1, code:"As" }},
			{ name: "Barren", id:0, desc:"Barren worlds are uncolonized and empty", values:{ digit:2, code:"Ba" }},
			{ name: "Desert", id:0, desc:"Desert worlds are dry and barely habitable", values:{ digit:3, code:"De" }},
			{ name: "Fluid Oceans", id:0, desc:"Fluid Oceans are worlds where the surface liquid is something other than water", values:{ digit:4, code:"Fl" }},
			{ name: "Garden", id:0, desc:"Garden worlds are edenic", values:{ digit:5, code:"Ga" }},
			{ name: "High population", id:0, desc:"High population worlds have a population in the billions or more", values:{ digit:6, code:"Hi" }},
			{ name: "High technology", id:0, desc:"High technology worlds are among the most technogically advanced in the Imperium", values:{ digit:7, code:"Ht" }},
			{ name: "Ice-capped", id:0, desc:"Ice-capped worlds have most their surface liquid frozen in polar ice caps, and are cold and dry", values:{ digit:8, code:"IC" }},
			{ name: "Industrial", id:0, desc:"Industrial worlds are dominated by factories and cities", values:{ digit:9, code:"In" }},
			{ name: "Low population", id:0, desc:"Low population worlds have a population of only a few thousand or less", values:{ digit:10, code:"Lo" }},
			{ name: "Low technology", id:0, desc:"Low technology worlds are pre-industrial and cannot produce advanced goods", values:{ digit:11, code:"Lt" }},
			{ name: "Non-Agricultural", id:0, desc:"Non-Agricultural worlds are too dry or barren to support their population using conventional food production", values:{ digit:12, code:"Na" }},
			{ name: "Non-Industrial", id:0, desc:"Non-Industrial worlds are too low-population to maintain an industrial base", values:{ digit:13, code:"Ni" }},
			{ name: "Poor", id:0, desc:"Poor worlds lack resources, viable land, or sufficient population to be anything other than marginal colonies", values:{ digit:14, code:"Po" }},
			{ name: "Rich", id:0, desc:"Rich worlds are blessed with a stable government and viable biosphere, making them economic powerhouses.", values:{ digit:15, code:"Ri" }},
			{ name: "Water World", id:0, desc:"Water worlds are nearly entirely water/ocean", values:{ digit:16, code:"Wa" }},
			{ name: "Vacuum", id:0, desc:"Vacuum worlds have no atmosphere", values:{ digit:17, code:"Va" }}
		];

		if(atmosVal >=4 && atmosVal <= 9 && hydroVal >= 4 && hydroVal <= 8 && popVal >= 5 && popVal <= 7) result.push(tradeCodes[0]);
		if(sizeVal === 0 && atmosVal === 0 && hydroVal === 0) result.push(tradeCodes[1]);
		if(popVal === 0 && govtVal === 0 && lawLevel === 0) result.push(tradeCodes[2]);
		if(atmosVal >= 2 && hydroVal === 0) result.push(tradeCodes[3]);
		if(atmosVal >= 10 && hydroVal === 1) result.push(tradeCodes[4]);
		if(sizeVal >= 5 && atmosVal >=4 && atmosVal <= 9 && hydroVal >=4 && hydroVal <= 9) result.push(tradeCodes[5]);
		if(popVal >= 9) result.push(tradeCodes[6]);
		if(techLevel >= 12) result.push(tradeCodes[7]);
		if(atmosVal <= 1 && hydroVal >= 1) result.push(tradeCodes[8]);
		if(atmosVal === 0 || atmosVal === 1 || atmosVal === 2 || atmosVal === 4 || atmosVal === 7 || atmosVal === 9) {
			if(popVal >= 9) result.push(tradeCodes[9]);
		}
		if(popVal >= 1 && popVal <= 3) result.push(tradeCodes[10]);
		if(techLevel <= 5) result.push(tradeCodes[11]);
		if(atmosVal >= 0 && atmosVal <= 3 && hydroVal >= 0 && hydroVal <= 3 && popVal >=6) result.push(tradeCodes[12]);
		if(popVal >= 4 && popVal <= 6) result.push(tradeCodes[13]);
		if(atmosVal >= 2 && atmosVal <= 5 && popVal >= 0 && popVal <= 3) result.push(tradeCodes[14]);
		if(atmosVal === 6 || atmosVal === 8) {
			if(popVal >= 6 && popVal <= 8) result.push(tradeCodes[15]);
		}
		if(hydroVal === 10) result.push(tradeCodes[16]);
		if(atmosVal === 0) result.push(tradeCodes[17]);
			/*console.log(result);*/
		return result;
	}

};

module.exports = TravellerWorldService;
