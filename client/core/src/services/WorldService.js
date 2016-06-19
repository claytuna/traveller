var DiceRollService = require("services/DiceRollService");
var MersenneTwister = require('mersenne-twister');
var m = new MersenneTwister();

var WorldService = module.exports = {
	fetchData: () => {
		RS.set('world.data', locationData());
	},
	
	generate: () => {
		RS.set('world.data', {
			name:"Random Planet",
			technologies: WorldService.getStarPort( DiceRollService.roll([ 6 ]) ), 
			size: WorldService.getSize( DiceRollService.roll([ 5 ]) ), 
			atmosphere: { children: [ WorldService.getAtmosphere( DiceRollService.roll([ 5 ]) ) ]},
			hydrosphere: WorldService.getHydrosphere( DiceRollService.roll([ 4 ]) ),
			population: WorldService.getPopulation( DiceRollService.roll([ 3 ]) ),
			governments: [WorldService.getLaw( DiceRollService.roll([ 5 ]) )],
			technologyLevels: [WorldService.getTechnology( DiceRollService.roll([ 7 ]) )]
		});
	},
	
	getStarPort: ( id ) => {
		var portOptions = [
			{ name: "A", id: 1, desc: "A port", qty: 1, type: 'PORT' },
			{ name: "B", id: 2, desc: "B port", qty: 1, type: 'PORT' },
			{ name: "C", id: 3, desc: "C port", qty: 1, type: 'PORT' },
			{ name: "D", id: 4, desc: "D port", qty: 1, type: 'PORT' },
			{ name: "E", id: 4, desc: "E port", qty: 1, type: 'PORT' },
			{ name: "F", id: 4, desc: "F port", qty: 1, type: 'PORT' },
		]
		
		return portOptions[id - 1];
	},
	
	getSize: ( id ) => {
		var sizeOptions = [
			{ name: "Asteroid", id: 1, desc: "Asteroid (<1,000 km diameter).", qty: 1, type: 'SIZE', value: rando.call(null, 988, 0) },
			{ name: "Small", id: 1, desc: "Small planet (2,000-10,000 km diameter).", qty: 1, type: 'SIZE', value: rando.call(null, 10000, 2000) },
			{ name: "Medium", id: 1, desc: "Medium planet (10,000-30,000 km diameter).", qty: 1, type: 'SIZE', value: rando.call(null, 30000, 10000) },
			{ name: "Large", id: 1, desc: "Large planet (30,000-150,000 km diameter).", qty: 1, type: 'SIZE', value: rando.call(null, 150000, 30000) },
			{ name: "ExoPlanet", id: 1, desc: "Very large planet (>150,000 km diameter).", qty: 1, type: 'SIZE', value: rando.call(null, 500000, 150000) },
		];
		
		function rando(max, min){
			return Math.floor(m.random() * (max - min)) + min;
		}
		
		return sizeOptions[id - 1];
	},
	
	getAtmosphere: ( id ) => {
		var atmosOptions = [
			{ name: "Vacuum", id: 1, desc: "No atmophere.", qty: 1, type: 'ATMOSPHERE', value: "vacuum" },
			{ name: "Thin", id: 1, desc: "Atmosphere is very thin.", qty: 1, type: 'ATMOSPHERE', value: "thin" },
			{ name: "Standard", id: 1, desc: "Standard atmosphere.", qty: 1, type: 'ATMOSPHERE', value: "standard" },
			{ name: "Dense", id: 1, desc: "A little bit stuffy, no?", qty: 1, type: 'ATMOSPHERE', value: "dense" },
			{ name: "Exotic", id: 1, desc: "Atmosphere is very strange.", qty: 1, type: 'ATMOSPHERE', value: "exotic" }
		];
		
		return atmosOptions[id - 1];
	},
	
	getHydrosphere: ( id ) => {
		var hydroOptions = [
			{ name: "Desert", id: 1, desc: "Little or no water.", qty: 1, type: 'HYDROSPHERE', value: "desert" },
			{ name: "Dry", id: 2, desc: "Isolated pockets of water.", qty: 1, type: 'HYDROSPHERE', value: "dry" },
			{ name: "Wet", id: 3, desc: "Good quantity of rivers, lakes, oceans.", qty: 1, type: 'HYDROSPHERE', value: "wet" },
			{ name: "Water", id: 4, desc: "Almost all water", qty: 1, type: 'HYDROSPHERE', value: "water" },			
		];
		
		return hydroOptions[id - 1];
	},
	
	getPopulation: ( id ) => {
		var populationOptions = [
			{ name: "Low", id: 2, desc: "Low population (<1,000,000)", qty: 1, type: 'POPULATION', value: rando.call(null, 1000000, 0) },
			{ name: "Medium", id: 3, desc: "Medium population (<9,000,000,000)", qty: 1, type: 'POPULATION', value: rando.call(null, 9000000000, 1000000) },
			{ name: "High", id: 4, desc: "High population (>9,000,000,000)", qty: 1, type: 'POPULATION', value: rando.call(null, 9999999999999, 9000000000) },
		];
		
		return populationOptions[id - 1];
		
		function rando(max, min){
			return Math.floor(m.random() * (max - min)) + min;
		}
	},
	
	getTechnology: ( id ) => {
		var techOptions = [
			{ name: "Primitive", id: 1, desc: "Primitive", qty: 1, type: 'TECHNOLOGYLEVEL' },
			{ name: "Pre-Industrial", id: 1, desc: "Pre-Industrial", qty: 1, type: 'TECHNOLOGYLEVEL' },
			{ name: "Industrial", id: 1, desc: "Industrial", qty: 1, type: 'TECHNOLOGYLEVEL' },
			{ name: "Pre-Stellar", id: 1, desc: "Pre-Stellar", qty: 1, type: 'TECHNOLOGYLEVEL' },
			{ name: "Early Stellar", id: 1, desc: "Early Stellar", qty: 1, type: 'TECHNOLOGYLEVEL' },
			{ name: "Average Stellar", id: 1, desc: "Average Stellar", qty: 1, type: 'TECHNOLOGYLEVEL' },
			{ name: "High Stellar", id: 1, desc: "High Stellar", qty: 1, type: 'TECHNOLOGYLEVEL' },
		];
		
		return techOptions[id - 1];
	},
	
	getLaw: ( id ) => {
		var lawOptions = [
			{ name: "No Law", id: 1, desc: "Marshal law", qty: 1, type: 'GOVERNMENT' },
			{ name: "Low", id: 1, desc: "Light governance", qty: 1, type: 'GOVERNMENT' },
			{ name: "Moderate", id: 1, desc: "Average governance and legal system", qty: 1, type: 'GOVERNMENT' },
			{ name: "High", id: 1, desc: "Highly developed legal system", qty: 1, type: 'GOVERNMENT' },
			{ name: "Extreme", id: 1, desc: "Dystopian police state.", qty: 1, type: 'GOVERNMENT' }
		];
		
		return lawOptions[id - 1];
	},
};

function locationData(){
	return (
		{
			name: "Planet X",
			population: 9000000,
			size: { name: "Small", id: 1, desc: "Small planet (1,000-5,000 km diameter).", qty: 1, type: 'SIZE', value: 4586 },
			hydrosphere:{ name: "Wet", id: 1, desc: "Toxic brew of chemicals.", qty: 1, type: 'HYDROSPHERE', value: "wet" }, 
			atmosphere:[ { name:"Atmosphere", id:1, desc:"The gas that surrounds a planet", qty:1, type:'ATMOSPHERE',
				children:[
					{ name: "Thin", id: 1, desc: "Atmosphere is very thin.", qty: 1, type: 'ATMOSPHERE', value: "thin" },
					{ name: "Gaseous", id: 1, desc: "Toxic brew of chemicals.", qty: 1, type: 'ATMOSPHERE', value: "gaseous" }, 
				]
			} ],
			revolution: { name: "Revolution", id: 1, desc: "Revolution period (earth days)", qty: 1, type: 'ROTATION', value: 690 },
			rotation: { name: "Rotation", id: 1, desc: "Rotation (speed km/h at equator)", qty: 1, type: 'ROTATION', value: 868.22 },			
			orbits: [
				{ name: "Elliptical", id: 1, desc: "Elliptical rotation", qty: 1, type: 'ROTATION', value: 90 }
			],
			cultures:[
				{ name: "Democratic", id: 1, desc: "The mob rules supreme", qty: 1, type: 'CULTURE' }
			],
			governments:[
				{ name: "High", id: 1, desc: "Highly organized bureacracy and nobility", qty: 1, type: 'GOVERNMENT', value: "high" }
			],			
			temperatures: [
				{ name: "Max", id: 1, desc: "Maximum temperature", qty: 1, type: 'TEMPERATURE', value: 120 },
				{ name: "Min", id: 1, desc: "Minimum temperature", qty: 1, type: 'TEMPERATURE', value: -10 }
			],
			technologyLevels: [
				{ name: "Early Stellar", id: 1, desc: "Early stellar capabilities", qty: 1, type: 'TECHNOLOGYLEVEL' }
			],
			technologies:[
				{ name: "Mega Starport", id: 1, desc: "High-powered starport, servicing thousands of ships", qty: 1, type: 'TECHNOLOGY', value: "A" },
				{ name: "Minor Starport", id: 1, desc: "High-powered starport, servicing thousands of ships", qty: 2, type: 'TECHNOLOGY', value: "B" },
				{ name: "Space elevator", id: 1, desc: "Useful for hauling cargo to the space station", qty: 1, type: 'TECHNOLOGY', value: "X" },
			],
			satellites: [
				{ name: "Small Moon", id: 1, desc: "Small moon held in orbit", qty: 2, type: 'SATELLITE', value: "A" },
				{ name: "Medium Moon", id: 1, desc: "Medium moon held in orbit", qty: 1, type: 'SATELLITE', value: "B" },
				{ name: "Simple Space Station", id: 1, desc: "Space station in geosyncronous orbit", qty: 1, type: 'SATELLITE', value: "SSS" },
			],
		}
	);
}