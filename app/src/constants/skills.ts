import { DataObject } from "..";

export type SkillObject = DataObject<string, "SKILL">;

export type SkillKeys =
  | "ADMIN"
  | "ADVOCATE"
  | "ANIMALS"
  | "ATHLETICS"
  | "ART"
  | "ASTROGATION"
  | "BATTLE_DRESS"
  | "BROKER"
  | "CAROUSE"
  | "COMMS"
  | "COMPUTERS"
  | "DECEPTION"
  | "DIPLOMAT"
  | "DRIVE"
  | "ENGINEER"
  | "EXPLOSIVES"
  | "FLYER"
  | "GAMBLER"
  | "GUNNERY"
  | "GUN_COMBAT"
  | "HEAVY_WEAPONS"
  | "INVESTIGATE"
  | "JACK_OF_ALL_TRADES"
  | "LANGUAGE"
  | "LEADERSHIP"
  | "MECHANIC"
  | "MEDIC"
  | "MELEE"
  | "NAVIGATION"
  | "PERSUADE"
  | "PILOT"
  | "RECON"
  | "REMOTE_OPERATIONS"
  | "SCIENCE"
  | "PHYSICAL_SCIENCES"
  | "LIFE_SCIENCES"
  | "SOCIAL_SCIENCES"
  | "SPACE_SCIENCES"
  | "SEAFARER"
  | "SENSORS"
  | "STEALTH"
  | "STEWARD"
  | "STREETWISE"
  | "SURVIVAL"
  | "TACTICS"
  | "TRADE"
  | "VACC_SUIT"
  | "ZERO_G"
  | "RIDING"
  | "VETERINARY"
  | "TRAINING"
  | "FARMING"
  | "COORDINATION"
  | "ENDURANCE"
  | "STRENGTH"
  | "FLYING"
  | "ACTING"
  | "DANCE"
  | "HOLOGRAPHY"
  | "INSTRUMENT"
  | "SCULPTING"
  | "WRITING"
  | "MOLE"
  | "TRACKED"
  | "WHEELED"
  | "MANOEUVRE_DRIVE_M_DRIVE"
  | "JUMP_DRIVE_J_DRIVE"
  | "ELECTRONICS"
  | "LIFE_SUPPORT"
  | "POWER"
  | "GRAV"
  | "ROTOR"
  | "WING"
  | "TURRETS"
  | "ORTILLERY"
  | "SCREENS"
  | "CAPITAL_WEAPONS"
  | "SLUG_RIFLE"
  | "SLUG_PISTOL"
  | "SHOTGUN"
  | "ENERGY_RIFLE"
  | "ENERGY_PISTOL"
  | "LAUNCHERS"
  | "MAN_PORTABLE_ARTILLERY"
  | "FIELD_ARTILLERY"
  | "ANGLIC"
  | "VILANI"
  | "ZDETI"
  | "OYNPRITH"
  | "UNARMED_COMBAT"
  | "BLADE"
  | "BLUDGEON"
  | "NATURAL_WEAPONS"
  | "SMALL_CRAFT"
  | "SPACECRAFT"
  | "CAPITAL_SHIPS"
  | "PHYSICS"
  | "CHEMISTRY"
  | "BIOLOGY"
  | "CYBERNETICS"
  | "GENETICS"
  | "PSIONICOLOGY"
  | "ARCHEOLOGY"
  | "ECONOMICS"
  | "HISTORY"
  | "LINGUISTICS"
  | "PHILOSOPHY"
  | "PSYCHOLOGY"
  | "SOPHONTOLOGY"
  | "PLANETOLOGY"
  | "ROBOTICS"
  | "XENOLOGY"
  | "SAIL"
  | "SUBMARINE"
  | "OCEAN_SHIPS"
  | "MOTORBOATS"
  | "MILITARY_TACTICS"
  | "NAVAL_TACTICS"
  | "BIOLOGICALS"
  | "CIVIL_ENGINEERING"
  | "SPACE_CONSTRUCTION"
  | "HYDROPONICS"
  | "POLYMERS";

export const SKILL_LIST: { [K in SkillKeys]: SkillObject } = {
  ADMIN: { type: "SKILL", name: "Admin", desc: "", id: 1, qty: 0 },
  ADVOCATE: { type: "SKILL", name: "Advocate", desc: "", id: 2, qty: 0 },
  ANIMALS: { type: "SKILL", name: "Animals", desc: "", id: 3, qty: 0 },
  ATHLETICS: { type: "SKILL", name: "Athletics", desc: "", id: 4, qty: 0 },
  ART: { type: "SKILL", name: "Art", desc: "", id: 5, qty: 0 },
  ASTROGATION: { type: "SKILL", name: "Astrogation", desc: "", id: 6, qty: 0 },
  BATTLE_DRESS: {
    type: "SKILL",
    name: "Battle Dress",
    desc: "",
    id: 7,
    qty: 0,
  },
  BROKER: { type: "SKILL", name: "Broker", desc: "", id: 8, qty: 0 },
  CAROUSE: { type: "SKILL", name: "Carouse", desc: "", id: 9, qty: 0 },
  COMMS: { type: "SKILL", name: "Communications", desc: "", id: 10, qty: 0 },
  COMPUTERS: { type: "SKILL", name: "Computers", desc: "", id: 11, qty: 0 },
  DECEPTION: { type: "SKILL", name: "Deception", desc: "", id: 12, qty: 0 },
  DIPLOMAT: { type: "SKILL", name: "Diplomat", desc: "", id: 13, qty: 0 },
  DRIVE: { type: "SKILL", name: "Drive", desc: "", id: 14, qty: 0 },
  ENGINEER: { type: "SKILL", name: "Engineer", desc: "", id: 15, qty: 0 },
  EXPLOSIVES: { type: "SKILL", name: "Explosives", desc: "", id: 16, qty: 0 },
  FLYER: { type: "SKILL", name: "Flyer", desc: "", id: 17, qty: 0 },
  GAMBLER: { type: "SKILL", name: "Gambler", desc: "", id: 18, qty: 0 },
  GUNNERY: { type: "SKILL", name: "Gunnery", desc: "", id: 19, qty: 0 },
  GUN_COMBAT: { type: "SKILL", name: "Gun Combat", desc: "", id: 20, qty: 0 },
  HEAVY_WEAPONS: {
    type: "SKILL",
    name: "Heavy Weapons",
    desc: "",
    id: 21,
    qty: 0,
  },
  INVESTIGATE: { type: "SKILL", name: "Investigate", desc: "", id: 22, qty: 0 },
  JACK_OF_ALL_TRADES: {
    type: "SKILL",
    name: "Jack of All Trades",
    desc: "",
    id: 23,
    qty: 0,
  },
  LANGUAGE: { type: "SKILL", name: "Language", desc: "", id: 24, qty: 0 },
  LEADERSHIP: { type: "SKILL", name: "Leadership", desc: "", id: 25, qty: 0 },
  MECHANIC: { type: "SKILL", name: "Mechanic", desc: "", id: 26, qty: 0 },
  MEDIC: { type: "SKILL", name: "Medic", desc: "", id: 27, qty: 0 },
  MELEE: { type: "SKILL", name: "Melee", desc: "", id: 28, qty: 0 },
  NAVIGATION: { type: "SKILL", name: "Navigation", desc: "", id: 29, qty: 0 },
  PERSUADE: { type: "SKILL", name: "Persuade", desc: "", id: 30, qty: 0 },
  PILOT: { type: "SKILL", name: "Pilot", desc: "", id: 31, qty: 0 },
  RECON: { type: "SKILL", name: "Recon", desc: "", id: 32, qty: 0 },
  REMOTE_OPERATIONS: {
    type: "SKILL",
    name: "Remote Operations",
    desc: "",
    id: 33,
    qty: 0,
  },
  SCIENCE: { type: "SKILL", name: "Science", desc: "", id: 34, qty: 0 },
  PHYSICAL_SCIENCES: {
    type: "SKILL",
    name: "Physical Sciences",
    desc: "",
    id: 35,
    qty: 0,
    parentId: 34,
  },
  LIFE_SCIENCES: {
    type: "SKILL",
    name: "Life Sciences",
    desc: "",
    id: 36,
    qty: 0,
    parentId: 34,
  },
  SOCIAL_SCIENCES: {
    type: "SKILL",
    name: "Social Sciences",
    desc: "",
    id: 37,
    qty: 0,
    parentId: 34,
  },
  SPACE_SCIENCES: {
    type: "SKILL",
    name: "Space Sciences",
    desc: "",
    id: 38,
    qty: 0,
    parentId: 34,
  },
  SEAFARER: { type: "SKILL", name: "Seafarer", desc: "", id: 39, qty: 0 },
  SENSORS: { type: "SKILL", name: "Sensors", desc: "", id: 40, qty: 0 },
  STEALTH: { type: "SKILL", name: "Stealth", desc: "", id: 41, qty: 0 },
  STEWARD: { type: "SKILL", name: "Steward", desc: "", id: 42, qty: 0 },
  STREETWISE: { type: "SKILL", name: "Streetwise", desc: "", id: 43, qty: 0 },
  SURVIVAL: { type: "SKILL", name: "Survival", desc: "", id: 44, qty: 0 },
  TACTICS: { type: "SKILL", name: "Tactics", desc: "", id: 45, qty: 0 },
  TRADE: { type: "SKILL", name: "Trade", desc: "", id: 46, qty: 0 },
  VACC_SUIT: { type: "SKILL", name: "Vacc Suit", desc: "", id: 47, qty: 0 },
  ZERO_G: { type: "SKILL", name: "Zero-G", desc: "", id: 48, qty: 0 },
  RIDING: {
    type: "SKILL",
    name: "Riding",
    desc: "",
    id: 49,
    qty: 0,
    parentId: 3,
  },
  VETERINARY: {
    type: "SKILL",
    name: "Veterinary",
    desc: "",
    id: 50,
    qty: 0,
    parentId: 3,
  },
  TRAINING: {
    type: "SKILL",
    name: "Training",
    desc: "",
    id: 51,
    qty: 0,
    parentId: 3,
  },
  FARMING: {
    type: "SKILL",
    name: "Farming",
    desc: "",
    id: 52,
    qty: 0,
    parentId: 3,
  },
  COORDINATION: {
    type: "SKILL",
    name: "Coordination",
    desc: "",
    id: 53,
    qty: 0,
    parentId: 4,
  },
  ENDURANCE: {
    type: "SKILL",
    name: "Endurance",
    desc: "",
    id: 54,
    qty: 0,
    parentId: 4,
  },
  STRENGTH: {
    type: "SKILL",
    name: "Strength",
    desc: "",
    id: 55,
    qty: 0,
    parentId: 4,
  },
  FLYING: {
    type: "SKILL",
    name: "Flying",
    desc: "",
    id: 56,
    qty: 0,
    parentId: 4,
  },
  ACTING: {
    type: "SKILL",
    name: "Acting",
    desc: "",
    id: 57,
    qty: 0,
    parentId: 5,
  },
  DANCE: {
    type: "SKILL",
    name: "Dance",
    desc: "",
    id: 58,
    qty: 0,
    parentId: 5,
  },
  HOLOGRAPHY: {
    type: "SKILL",
    name: "Holography",
    desc: "",
    id: 59,
    qty: 0,
    parentId: 5,
  },
  INSTRUMENT: {
    type: "SKILL",
    name: "Instrument",
    desc: "",
    id: 60,
    qty: 0,
    parentId: 5,
  },
  SCULPTING: {
    type: "SKILL",
    name: "Sculpting",
    desc: "",
    id: 61,
    qty: 0,
    parentId: 5,
  },
  WRITING: {
    type: "SKILL",
    name: "Writing",
    desc: "",
    id: 62,
    qty: 0,
    parentId: 5,
  },
  MOLE: { type: "SKILL", name: "Mole", desc: "", id: 63, qty: 0, parentId: 14 },
  TRACKED: {
    type: "SKILL",
    name: "Tracked",
    desc: "",
    id: 64,
    qty: 0,
    parentId: 14,
  },
  WHEELED: {
    type: "SKILL",
    name: "Wheeled",
    desc: "",
    id: 65,
    qty: 0,
    parentId: 14,
  },
  MANOEUVRE_DRIVE_M_DRIVE: {
    type: "SKILL",
    name: "Manoeuvre Drive (M-Drive)",
    desc: "",
    id: 66,
    qty: 0,
    parentId: 15,
  },
  JUMP_DRIVE_J_DRIVE: {
    type: "SKILL",
    name: "Jump Drive (J-Drive)",
    desc: "",
    id: 67,
    qty: 0,
    parentId: 15,
  },
  ELECTRONICS: {
    type: "SKILL",
    name: "Electronics",
    desc: "",
    id: 68,
    qty: 0,
    parentId: 15,
  },
  LIFE_SUPPORT: {
    type: "SKILL",
    name: "Life Support",
    desc: "",
    id: 69,
    qty: 0,
    parentId: 15,
  },
  POWER: {
    type: "SKILL",
    name: "Power",
    desc: "",
    id: 70,
    qty: 0,
    parentId: 15,
  },
  GRAV: { type: "SKILL", name: "Grav", desc: "", id: 71, qty: 0, parentId: 17 },
  ROTOR: {
    type: "SKILL",
    name: "Rotor",
    desc: "",
    id: 72,
    qty: 0,
    parentId: 17,
  },
  WING: { type: "SKILL", name: "Wing", desc: "", id: 73, qty: 0, parentId: 17 },
  TURRETS: {
    type: "SKILL",
    name: "Turrets",
    desc: "",
    id: 74,
    qty: 0,
    parentId: 19,
  },
  ORTILLERY: {
    type: "SKILL",
    name: "Ortillery",
    desc: "",
    id: 75,
    qty: 0,
    parentId: 19,
  },
  SCREENS: {
    type: "SKILL",
    name: "Screens",
    desc: "",
    id: 76,
    qty: 0,
    parentId: 19,
  },
  CAPITAL_WEAPONS: {
    type: "SKILL",
    name: "Capital Weapons",
    desc: "",
    id: 77,
    qty: 0,
    parentId: 19,
  },
  SLUG_RIFLE: {
    type: "SKILL",
    name: "Slug Rifle",
    desc: "",
    id: 78,
    qty: 0,
    parentId: 20,
  },
  SLUG_PISTOL: {
    type: "SKILL",
    name: "Slug Pistol",
    desc: "",
    id: 79,
    qty: 0,
    parentId: 20,
  },
  SHOTGUN: {
    type: "SKILL",
    name: "Shotgun",
    desc: "",
    id: 80,
    qty: 0,
    parentId: 20,
  },
  ENERGY_RIFLE: {
    type: "SKILL",
    name: "Energy Rifle",
    desc: "",
    id: 81,
    qty: 0,
    parentId: 20,
  },
  ENERGY_PISTOL: {
    type: "SKILL",
    name: "Energy Pistol",
    desc: "",
    id: 82,
    qty: 0,
    parentId: 20,
  },
  LAUNCHERS: {
    type: "SKILL",
    name: "Launchers",
    desc: "",
    id: 83,
    qty: 0,
    parentId: 21,
  },
  MAN_PORTABLE_ARTILLERY: {
    type: "SKILL",
    name: "Man Portable Artillery",
    desc: "",
    id: 84,
    qty: 0,
    parentId: 21,
  },
  FIELD_ARTILLERY: {
    type: "SKILL",
    name: "Field Artillery",
    desc: "",
    id: 85,
    qty: 0,
    parentId: 21,
  },
  ANGLIC: {
    type: "SKILL",
    name: "Anglic",
    desc: "Common trade language of the Third Imperium",
    id: 86,
    qty: 0,
    parentId: 24,
  },
  VILANI: {
    type: "SKILL",
    name: "Vilani",
    desc: "Language spoken by the Vilan of the First Imperium",
    id: 87,
    qty: 0,
    parentId: 24,
  },
  ZDETI: {
    type: "SKILL",
    name: "Zdeti",
    desc: "Zhodani spoken language",
    id: 88,
    qty: 0,
    parentId: 24,
  },
  OYNPRITH: {
    type: "SKILL",
    name: "Oynprith",
    desc: "Droyne ritual language",
    id: 89,
    qty: 0,
    parentId: 24,
  },
  UNARMED_COMBAT: {
    type: "SKILL",
    name: "Unarmed Combat",
    desc: "",
    id: 90,
    qty: 0,
    parentId: 28,
  },
  BLADE: {
    type: "SKILL",
    name: "Blade",
    desc: "",
    id: 91,
    qty: 0,
    parentId: 28,
  },
  BLUDGEON: {
    type: "SKILL",
    name: "Bludgeon",
    desc: "",
    id: 92,
    qty: 0,
    parentId: 28,
  },
  NATURAL_WEAPONS: {
    type: "SKILL",
    name: "Natural Weapons",
    desc: "",
    id: 93,
    qty: 0,
    parentId: 28,
  },
  SMALL_CRAFT: {
    type: "SKILL",
    name: "Small Craft",
    desc: "",
    id: 94,
    qty: 0,
    parentId: 31,
  },
  SPACECRAFT: {
    type: "SKILL",
    name: "Spacecraft",
    desc: "",
    id: 95,
    qty: 0,
    parentId: 31,
  },
  CAPITAL_SHIPS: {
    type: "SKILL",
    name: "Capital Ships",
    desc: "",
    id: 96,
    qty: 0,
    parentId: 31,
  },
  PHYSICS: {
    type: "SKILL",
    name: "Physics",
    desc: "",
    id: 97,
    qty: 0,
    parentId: 35,
  },
  CHEMISTRY: {
    type: "SKILL",
    name: "Chemistry",
    desc: "",
    id: 98,
    qty: 0,
    parentId: 35,
  },
  BIOLOGY: {
    type: "SKILL",
    name: "Biology",
    desc: "",
    id: 100,
    qty: 0,
    parentId: 36,
  },
  CYBERNETICS: {
    type: "SKILL",
    name: "Cybernetics",
    desc: "Study of blending living and synthetic life",
    id: 101,
    qty: 0,
    parentId: 36,
  },
  GENETICS: {
    type: "SKILL",
    name: "Genetics",
    desc: "",
    id: 102,
    qty: 0,
    parentId: 36,
  },
  PSIONICOLOGY: {
    type: "SKILL",
    name: "Psionicology",
    desc: "",
    id: 103,
    qty: 0,
    parentId: 36,
  },
  ARCHEOLOGY: {
    type: "SKILL",
    name: "Archeology",
    desc: "",
    id: 104,
    qty: 0,
    parentId: 37,
  },
  ECONOMICS: {
    type: "SKILL",
    name: "Economics",
    desc: "",
    id: 105,
    qty: 0,
    parentId: 37,
  },
  HISTORY: {
    type: "SKILL",
    name: "History",
    desc: "",
    id: 106,
    qty: 0,
    parentId: 37,
  },
  LINGUISTICS: {
    type: "SKILL",
    name: "Linguistics",
    desc: "",
    id: 107,
    qty: 0,
    parentId: 37,
  },
  PHILOSOPHY: {
    type: "SKILL",
    name: "Philosophy",
    desc: "",
    id: 108,
    qty: 0,
    parentId: 37,
  },
  PSYCHOLOGY: {
    type: "SKILL",
    name: "Psychology",
    desc: "Study of psionic powers and phenomena",
    id: 109,
    qty: 0,
    parentId: 37,
  },
  SOPHONTOLOGY: {
    type: "SKILL",
    name: "Sophontology",
    desc: "Study of intelligent living creatures",
    id: 110,
    qty: 0,
    parentId: 37,
  },
  PLANETOLOGY: {
    type: "SKILL",
    name: "Planetology",
    desc: "",
    id: 111,
    qty: 0,
    parentId: 38,
  },
  ROBOTICS: {
    type: "SKILL",
    name: "Robotics",
    desc: "",
    id: 112,
    qty: 0,
    parentId: 38,
  },
  XENOLOGY: {
    type: "SKILL",
    name: "Xenology",
    desc: "",
    id: 113,
    qty: 0,
    parentId: 38,
  },
  SAIL: {
    type: "SKILL",
    name: "Sail",
    desc: "",
    id: 114,
    qty: 0,
    parentId: 39,
  },
  SUBMARINE: {
    type: "SKILL",
    name: "Submarine",
    desc: "",
    id: 115,
    qty: 0,
    parentId: 39,
  },
  OCEAN_SHIPS: {
    type: "SKILL",
    name: "Ocean Ships",
    desc: "",
    id: 116,
    qty: 0,
    parentId: 39,
  },
  MOTORBOATS: {
    type: "SKILL",
    name: "Motorboats",
    desc: "",
    id: 117,
    qty: 0,
    parentId: 39,
  },
  MILITARY_TACTICS: {
    type: "SKILL",
    name: "Military Tactics",
    desc: "",
    id: 118,
    qty: 0,
    parentId: 45,
  },
  NAVAL_TACTICS: {
    type: "SKILL",
    name: "Naval Tactics",
    desc: "",
    id: 119,
    qty: 0,
    parentId: 45,
  },
  BIOLOGICALS: {
    type: "SKILL",
    name: "Biologicals",
    desc: "",
    id: 120,
    qty: 0,
    parentId: 46,
  },
  CIVIL_ENGINEERING: {
    type: "SKILL",
    name: "Civil Engineering",
    desc: "",
    id: 121,
    qty: 0,
    parentId: 46,
  },
  SPACE_CONSTRUCTION: {
    type: "SKILL",
    name: "Space Construction",
    desc: "",
    id: 122,
    qty: 0,
    parentId: 46,
  },
  HYDROPONICS: {
    type: "SKILL",
    name: "Hydroponics",
    desc: "",
    id: 123,
    qty: 0,
    parentId: 46,
  },
  POLYMERS: {
    type: "SKILL",
    name: "Polymers",
    desc: "",
    id: 124,
    qty: 0,
    parentId: 46,
  },
};

export const EDUCATION_SKILLS = {
  ADMIN: SKILL_LIST.ADMIN,
  ADVOCATE: SKILL_LIST.ADVOCATE,
  ART: SKILL_LIST.ART,
  CAROUSE: SKILL_LIST.CAROUSE,
  COMMS: SKILL_LIST.COMMS,
  COMPUTERS: SKILL_LIST.COMPUTERS,
  DRIVE: SKILL_LIST.DRIVE,
  ENGINEER: SKILL_LIST.ENGINEER,
  LANGUAGE: SKILL_LIST.LANGUAGE,
  MEDIC: SKILL_LIST.MEDIC,
  PHYSICAL_SCIENCES: SKILL_LIST.PHYSICAL_SCIENCES,
  LIFE_SCIENCES: SKILL_LIST.LIFE_SCIENCES,
  SOCIAL_SCIENCES: SKILL_LIST.SOCIAL_SCIENCES,
  SPACE_SCIENCES: SKILL_LIST.SPACE_SCIENCES,
  TRADE: SKILL_LIST.TRADE,
};
