export const emptyState = {
  step: "",
  name: undefined,
  age: 18,
  sex: 0,
  stats: {},
  homeworld: undefined,
  availableSkillCount: undefined,
  skills: {},
  careers: undefined,
  events: [],
  connections: {
    allies: [],
    contacts: [],
    enemies: [],
    rivals: [],
  },
  benefits: [],
  finances: {
    pension: 0,
    debt: 0,
    cash: 0,
    expenses: 0,
  },
  equipment: [],
  weapons: [],
  armor: {
    type: undefined,
    rating: 0,
  },
  vehicles: [],
  spacecraft: [],
};

export const sampleHomeworld = {
  name: "TCHEURLMCWR",
  uwp: "TCHEURLMCWR__2736__D330334-7 DeLoPo",
  size: {
    name: "3",
    id: 3,
    desc: "3,200-4,800km; Mercury",
    type: "SIZE",
    values: {
      digit: 3,
      minDiameter: 3201,
      maxDiameter: 4800,
      diameter: 4098,
      gravity: 0.25,
    },
  },
  atmosphere: {
    name: "3",
    id: 4,
    desc: "Very Thin",
    qty: 1,
    type: "ATMOSPHERE",
    values: {
      digit: 3,
      pressure: "0.1-0.42",
      gear: "Respirator",
    },
  },
  temperature: {
    name: "Hot",
    id: 4,
    desc:
      "Hot world. Small or no ice caps, little liquid water. Most water in the form of clouds",
    type: "TEMPERATURE",
    values: {
      maxTemp: "80° C",
      minTemp: "31° C",
    },
  },
  hydrosphere: {
    name: "0",
    id: 0,
    desc: "Desert world",
    type: "HYDROSPHERE",
    values: {
      digit: 0,
      min: 0,
      max: 5,
      percentRange: "0%-5%",
      percent: 0,
    },
  },
  population: {
    name: "3",
    id: 3,
    desc: "1,000+",
    type: "POPULATION",
    values: {
      digit: 3,
      minPop: 1000,
      maxPop: 9999,
      total: 9437,
    },
  },
  governments: {
    name: "3",
    id: 3,
    desc:
      "Self-perpetuating oligarchy: Ruling functions are performed by a restricted minority, with little or no input from the mass citizenry",
    type: "GOVERNMENT",
    values: {
      digit: 3,
      examples: "Plutocracy, hereditary ruling caste",
      contraband: "Technology, weapons, travellers",
    },
  },
  factions: [
    {
      name: "Minor group",
      id: 2,
      desc: "Some supporters; barely known",
      type: "FACTION",
      values: {
        govt: {
          name: "6",
          id: 6,
          desc:
            "Captive government: Ruling functions are performed by an imposed leadership answerable to an outside group",
          type: "GOVERNMENT",
          values: {
            digit: 6,
            examples: "A colony or conquered area",
            contraband: "Weapons, technology, travellers",
          },
        },
      },
    },
  ],
  laws: {
    name: "4",
    id: 4,
    desc: "",
    type: "LAW",
    values: {
      digit: 4,
      weapons: "Light assault weapons and submachine guns",
      drugs: "Addictive narcotics",
      information: "Security programs",
      technology: "TL 13 items",
      travellers: "Landing only at starport",
      psionics: "Use of teleportation and clairvoyance restricted",
    },
  },
  culture: {
    name: "Peaceful",
    id: 20,
    desc:
      "Physical conflict is almost unheard-of. The culture produces few soldiers and diplomacy reigns supreme. Forceful characters will be ostracized.",
    type: "CULTURE_DIFFERENCE",
    values: {
      roll: 43,
    },
  },
  starport: {
    name: "D",
    id: 3,
    desc: "Poor",
    qty: 1,
    type: "STARPORT",
    values: {
      berthingCost: 20,
      fuel: "Unrefined",
      facilities: "Limited repair (structural repairs only, not systems)",
      baseProbability: [
        {
          type: "Scout",
          weight: 7,
        },
        {
          type: "Pirate",
          weight: 12,
        },
      ],
      bases: ["No Scout", "No Pirate"],
    },
  },
  technologyLevel: {
    name: "TL 7: (Pre-Stellar)",
    id: 1,
    desc:
      "A pre-stellar society can reach orbit reliably and has telecommunications satellites. Computers become common.",
    type: "TECHNOLOGYLEVEL",
    values: {
      digit: 7,
    },
  },
  atmosphericWarning: false,
  communications: {
    name: "Advanced comms",
    id: 0,
    desc: "More advanced communications grid with only occasional gaps",
    type: "TECHCOMMS",
    values: {
      digit: 2,
    },
  },
  travelCodes: {
    name: "Amber",
    id: 0,
    desc:
      "Travel deemed dangerous by the Imperium. Typically undergoing revolution or have naturally hazardous environments",
    type: "TRAVELCODE",
    values: {
      digit: 0,
    },
  },
  tradeCodes: [
    {
      name: "Desert",
      id: 3,
      type: "TRADECODE",
      desc: "Desert worlds are dry and barely habitable",
      values: {
        digit: 3,
        code: "De",
      },
    },
    {
      name: "Low population",
      id: 10,
      type: "TRADECODE",
      desc:
        "Low population worlds have a population of only a few thousand or less",
      values: {
        digit: 10,
        code: "Lo",
      },
    },
    {
      name: "Poor",
      id: 14,
      type: "TRADECODE",
      desc:
        "Poor worlds lack resources, viable land, or sufficient population to be anything other than marginal colonies",
      values: {
        digit: 14,
        code: "Po",
      },
    },
  ],
};
