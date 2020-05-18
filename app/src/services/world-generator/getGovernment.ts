export const GOVERNMENTS = [
  {
    name: "0",
    id: 1,
    desc:
      "None: No government structure. In many cases, family bonds predominate",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 0,
      examples: "Family, Clan, Anarchy",
      contraband: "None",
    },
  },
  {
    name: "1",
    id: 1,
    desc:
      "Company/corporation: Ruling functions are performed by a company managerial elite, and most of the citizenry are company employees or dependants",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 1,
      examples: "Corporate outpost, asteroid mine, feudal domain",
      contraband: "Weapons, drugs, travellers",
    },
  },
  {
    name: "2",
    id: 1,
    desc:
      "Participating democracy: Ruling functions are performed under the advice and consent of the citizenry directly",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 2,
      examples: "Collective, tribal council, comm-linked concensus",
      contraband: "Drugs",
    },
  },
  {
    name: "3",
    id: 1,
    desc:
      "Self-perpetuating oligarchy: Ruling functions are performed by a restricted minority, with little or no input from the mass citizenry",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 3,
      examples: "Plutocracy, hereditary ruling caste",
      contraband: "Technology, weapons, travellers",
    },
  },
  {
    name: "4",
    id: 1,
    desc:
      "Representative democracy: Ruling functions are performed by elected representatives",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 4,
      examples: "Republic, democracy",
      contraband: "Drugs, weapons, psionics",
    },
  },
  {
    name: "5",
    id: 1,
    desc:
      "Feudal technochracy: Ruling functions are performed by specific individuals for persons who agree to be ruled by them. Relationships are based on the performance of technical activities which are mutually beneficial",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 5,
      examples: "Feudalism",
      contraband: "Technology, weapons, computers",
    },
  },
  {
    name: "6",
    id: 1,
    desc:
      "Captive government: Ruling functions are performed by an imposed leadership answerable to an outside group",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 6,
      examples: "A colony or conquered area",
      contraband: "Weapons, technology, travellers",
    },
  },
  {
    name: "7",
    id: 1,
    desc:
      "Balkanization: No central authority exists; rival governments compete for control. Law level refers to the government nearest the starport",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 7,
      examples: "Multiple governments, civil war",
      contraband: "Varies",
    },
  },
  {
    name: "8",
    id: 1,
    desc:
      "Civil service bureaucracy: Ruling functions are performed by government agencies employing individuals selected for their expertise",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 8,
      examples: "Technochracy, Communism",
      contraband: "Drugs, weapons",
    },
  },
  {
    name: "9",
    id: 1,
    desc:
      "Impersonal bureaucracy: Ruling functions are performed by agencies that have become insulated from governed citizens",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 9,
      examples: "Entrenched castes of bureaucrats, decaying empire",
      contraband: "Technology, weapons, drugs, travellers, psionics",
    },
  },
  {
    name: "A",
    id: 1,
    desc:
      "Charismatic dictator: Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confidence of the citizenry",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 10,
      examples: "Revolutionary leader, messiah, emperor",
      contraband: "None",
    },
  },
  {
    name: "B",
    id: 1,
    desc:
      "Non-charismatic leader: A previous charismatic dictator has been replaced by a leader through normal channels",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 11,
      examples: "Military dictatorship, hereditary kingship",
      contraband: "Weapons, technology, computers",
    },
  },
  {
    name: "C",
    id: 1,
    desc:
      "Charismatic oligarchy: Ruling functions are performed by a select group of members of an organization or class which enjoys the overwhelming confidence of the citizenry",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 12,
      examples: "Junta, revolutionary council",
      contraband: "Weapons",
    },
  },
  {
    name: "D",
    id: 1,
    desc:
      "Religious dictatorship: Ruling functions are performed by a religious organization without regard to specific individual needs of the citizenry",
    qty: 1,
    type: "GOVERNMENT",
    values: {
      digit: 13,
      examples: "Cult, transcendent philosophy, psionic group mind, hive",
      contraband: "Varies",
    },
  },
];

export const getGovernment = (
  roll: number,
  sizeVal: number,
  popVal: number
) => {
  let rollValue = roll + sizeVal;

  if (popVal === 0) {
    rollValue = 0;
  }

  if (rollValue >= 13) return GOVERNMENTS[13];

  return GOVERNMENTS[rollValue < 0 ? 0 : rollValue];
};
