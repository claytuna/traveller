var CharacterService = module.exports = {
	start: ()=>{
		RS.set('character.data', {
			name:undefined,
			stats:undefined,
		});
	},

	fetchData: () => {
		RS.set('character.data', sampleData());
	},

	setName: (nameVal) => {
		RS.set('character.data.name', nameVal);
	},

	setStats: (statVals) => {
		var obj = {
				STR:{value:statVals[0], modifier:getModifier(statVals[0])},
				DEX:{value:statVals[1], modifier:getModifier(statVals[1])},
				END:{value:statVals[2], modifier:getModifier(statVals[2])},
				INT:{value:statVals[3], modifier:getModifier(statVals[3])},
				EDU:{value:statVals[4], modifier:getModifier(statVals[4])},
				SOC:{value:statVals[5], modifier:getModifier(statVals[5])},
		};
		statVals.length === 6 && RS.set('character.data.stats', obj );

		function getModifier(stat){
			if(stat === 0) return -3;
			if(stat <= 2) return -2;
			if(stat <= 5) return -1;
			if(stat <= 8) return 0;
			if(stat <= 11) return 1;
			if(stat <= 14) return 2;
			if(stat <= 15) return 3;
		}
	},

	setHomeworld: (homeworldVals) => {
		RS.set('character.data.homeworld', homeworldVals);
	},

	getCurrentCharacter: ()=>{
		return RS.get('character.data');
	}
};

function nameData(){
	return ({ name: "Sample Name" });
}

function statData(){
	return ({
			STR: {value:6},
			DEX: {value:6},
			END: {value:6},
			INT: {value:6},
			EDU: {value:6},
			SOC: {value:6}
	});
}

function sampleData(){
	return (
		{
			name: "Bartholomew",
			sex: 0,
			age: 18,
			xp: 100,
			habitats:[ ],
			statuses: [
				{ name: "Injured", id: 1, desc: "Can't make an omelet without breaking a few eggs", qty: 1, type: 'STATUS',
					children: [
						{ name: "Laceration", id: 1, desc: "Is that a paper cut?", qty: 1, type: 'STATUS' }
					]
				},
				{ name: "Tired", id: 2, desc: "Sleep is good", qty: 1, type: 'STATUS',
					children: [
						{ name: "Exhausted", id: 22, desc: "Can't take another step", qty: 1, type: 'STATUS' }
					]
				},
			],
			ranks: [
				{ name: "Serious Loggerman", id: 1, desc: "You know what needs pruning.", qty: 1, type: 'RANK', value: 7,
					links: [
						{  id: 1, type: 'ORGANIZATION' }
					]
				},
			],
			relationships: [
				{ name:"Family", id:1, desc: "Save together, stay together.",
					type: 'RELATIONSHIP',
					children: [
						{ name: "Father", id: 1, desc: "Eat your heart out, Oedipus.", qty: 1, type: 'RELATIONSHIP',
							links: [
								{  id: 5684, type: 'PERSON' }
							]
						},
						{ name: "Pet", id: 1, desc: "Woof, meow, quack, etc.", qty: 1, type: 'RELATIONSHIP',
							links: [
								{  id: 9875, type: 'PET' }
							]
						},
					]
				}
			],
			organizations: [
				{ name: "Loggerman's Guild", id: 1, desc: "Live and breathe loggin' with your fellow bearded brethren", qty: 1, type: 'ORGANIZATION' },
			],
			currencies: [
				{ name: "Gold", id: 1, desc: "Coins.", qty: 1000, type: 'CURRENCY', value: 10 },
				{ name: "Maple Syrup", id: 1, desc: "Quarts.", qty: 6, type: 'CURRENCY', value: 0 },
			],
			incomes: [
				{ name: "Moose Lodge Pension", id: 1, desc: "Left over from the good old days.", qty: 1, type: 'INCOME', value: 7000 },
			],
			items: [
				{ name: "Axe", id: 1, desc: "It's choppy", qty: 1, type: 'ITEM' },
				{ name: "Flannel", id: 1, desc: "It's red", qty: 2, type: 'ITEM' },
				{ name: "Babe", id: 1, desc: "A blue ox", qty: 1, type: 'ITEM' }
			],
			professions: [
				{ name: 'Lumberjack', id: 1, desc: "Paul's got nothing on you", qty: 1, type: 'PROFESSION'  }
			],
			stats: [
				{ name: 'STR', id: 1, desc: "Brawns", qty: 10, type: 'STAT'  }
			],
			skills: [
				{ name: 'Climbing', id: 1, desc: "You're quite the climber", qty: 6, type: 'SKILL'  },
				{ name: 'Academics', id: 1, desc: "Knowledge is power", qty: 1,
					type: 'SKILL',
					children: [
						{ name: 'Logging Theory', id: 1, desc: "Know thine enemy is lumber", qty: 5,
							type: 'SKILL' ,
							children: [
								{ name: 'Logging 101', id: 1, desc: "Trees = bad", qty: 1, type: 'SKILL'  } ,
								{ name: 'Logging 201', id: 1, desc: "Trees = worse", qty: 1, type: 'SKILL'  } ,
								{ name: 'Logging 301', id: 1, desc: "Trees = worst", qty: 1, type: 'SKILL'  } ,
								{ name: 'Logging Theory', id: 1, desc: "Trees = bad. Tables made from trees = good.", qty: 1, type: 'SKILL'  } ,
								{ name: 'Logging Capstone', id: 1, desc: "Thesis", qty: 1, type: 'SKILL'  }
							]
						}
					]
				}
			]
		}
	);
}
