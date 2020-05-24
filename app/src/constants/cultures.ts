import { DataObject } from "../";

export type CultureName =
  | "Sexist"
  | "Religious"
  | "Artistic"
  | "Ritualized"
  | "Conservative"
  | "Xenophobic"
  | "Taboo"
  | "Deceptive"
  | "Liberal"
  | "Honorable"
  | "Influenced"
  | "Fusion"
  | "Barbaric"
  | "Remnant"
  | "Degenerate"
  | "Progressive"
  | "Recovering"
  | "Nexus"
  | "Tourist attraction"
  | "Violent"
  | "Peaceful"
  | "Obsessed"
  | "Fashionable"
  | "Warlike"
  | "Unusual customs: Offworlders"
  | "Unusual customs: Starport"
  | "Unusual customs: Media"
  | "Unusual customs: Technology"
  | "Unusual customs: Lifecycle"
  | "Unusual customs: Social Standings"
  | "Unusual customs: Trade"
  | "Unusual customs: Nobility"
  | "Unusual customs: Sex"
  | "Unusual customs: Eating"
  | "Unusual customs: Travel"
  | "Unusual customs: Conspiracy";

export interface CultureObject
  extends DataObject<CultureName, "CULTURE_DIFFERENCE"> {
  values: {
    roll: number;
    instructions?: string;
  };
}

export const CULTURES: CultureObject[] = [
  {
    name: "Sexist",
    id: 0,
    desc: "One gender is considered subservient to the other.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 11 },
  },
  {
    name: "Religious",
    id: 1,
    desc:
      "Culture is heavily influenced by a religion or belief system, possibly one unique to this world.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 12 },
  },
  {
    name: "Artistic",
    id: 2,
    desc:
      "Art and culture are highly prized. Aesthetic design is important in all artifacts produced onworld.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 13 },
  },
  {
    name: "Ritualized",
    id: 3,
    desc:
      "Social interaction and trade is highly formalized. Politeness and adherence to traditional forms is condsidered very important",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 14 },
  },
  {
    name: "Conservative",
    id: 4,
    desc: "The culture resists change and outside influences.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 15 },
  },
  {
    name: "Xenophobic",
    id: 5,
    desc:
      "The culture distrusts outsiders and alien influences. Offworlders will face considerable prejudice.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 16 },
  },
  {
    name: "Taboo",
    id: 6,
    desc:
      "A particular topic is forbidden and cannot be discussed. Characters who unwittingly mention this topic will be ostracized.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 21 },
  },
  {
    name: "Deceptive",
    id: 7,
    desc:
      "Trickery and equivocation are considered acceptable. Honesty is a sign of weakness.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 22 },
  },
  {
    name: "Liberal",
    id: 8,
    desc:
      "The culture welcomes change and offworld influence. Characters who bring new and strange ideas will be welcomed.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 23 },
  },
  {
    name: "Honorable",
    id: 9,
    desc:
      "One's word is one's bond in the culture. Lying is both rare and despised.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 24 },
  },
  {
    name: "Influenced",
    id: 10,
    desc: "The culture is heavily influenced by another, neighboring world.",
    type: "CULTURE_DIFFERENCE",
    values: {
      roll: 25,
      instructions:
        "If you have details for the neighboring world, choose a cultural quirk that this world has adopted. If not, roll for one.",
    },
  },
  {
    name: "Fusion",
    id: 11,
    desc: "The culture is a merger of two distinct cultures.",
    type: "CULTURE_DIFFERENCE",
    values: {
      roll: 26,
      instructions:
        "Roll again twice ot determine the quirks inherited from these cultures. If the quirks are incompatible, then the culture is likely divided.",
    },
  },
  {
    name: "Barbaric",
    id: 12,
    desc:
      "Physical strength and combat prowess are highly valued in the culture. Characters may be challenged to a fight, or dismissed if they seem incapable of defending themselves. Sports tend towards the bloody and violent.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 31 },
  },
  {
    name: "Remnant",
    id: 13,
    desc:
      "The culture is a surviving remnant of a one-great and vibrant civilization, clinging to its former glory. The world is filled with crumbling ruins, and every story revolves around the good old days.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 32 },
  },
  {
    name: "Degenerate",
    id: 14,
    desc:
      "The culture is falling apart and is on the brink of war or economic collapse. Violent protests are common and the social order is decaying.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 33 },
  },
  {
    name: "Progressive",
    id: 15,
    desc:
      "The culture is expanding and vibrant. Fortunes are being made in trade; science is forging bravely ahead.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 34 },
  },
  {
    name: "Recovering",
    id: 16,
    desc:
      "A recent trauma, such as a plague, war, disaster, or despotic regime has left scars on the culture.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 35 },
  },
  {
    name: "Nexus",
    id: 17,
    desc: "Members or many different cultures and species visit here.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 36 },
  },
  {
    name: "Tourist attraction",
    id: 18,
    desc:
      "Some aspect of the culture or planet draws visitors from all over charted space.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 41 },
  },
  {
    name: "Violent",
    id: 19,
    desc:
      "Physical conflict is common, taking the form of duels, brawls or other contests. Trial by combat is a part of their judicial system.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 42 },
  },
  {
    name: "Peaceful",
    id: 20,
    desc:
      "Physical conflict is almost unheard-of. The culture produces few soldiers and diplomacy reigns supreme. Forceful characters will be ostracized.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 43 },
  },
  {
    name: "Obsessed",
    id: 21,
    desc:
      "Everyone is obsessed with or addicted to a substance, personality, act or item. This monomania pervades every aspect of the culture.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 44 },
  },
  {
    name: "Fashionable",
    id: 22,
    desc:
      "Fine clothing and decoration are considered vitally important in the culture. Underdressed characters have no standing here.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 45 },
  },
  {
    name: "Warlike",
    id: 23,
    desc:
      "The culture is at war, either with another planet or polity, or is troubled by terrorists or rebels.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 46 },
  },
  {
    name: "Unusual customs: Offworlders",
    id: 24,
    desc:
      "Space travellers hold a unique position in the culture's mythology or beliefs, and travellers will be expected to live up to those myths.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 51 },
  },
  {
    name: "Unusual customs: Starport",
    id: 25,
    desc:
      "The planet's starport is more than a commercial center; it might be a temple, or be seen as highly controversial and surrounded by protestors.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 52 },
  },
  {
    name: "Unusual customs: Media",
    id: 26,
    desc:
      "News agencies and telecommunications channels are especially strange here. Getting accurate information may be difficult.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 53 },
  },
  {
    name: "Unusual customs: Technology",
    id: 27,
    desc:
      "The culture interacts with technology in an unusual way. Telecommunications might be banned, robots might have civil rights, cyborgs might be property, etc.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 54 },
  },
  {
    name: "Unusual customs: Lifecycle",
    id: 28,
    desc:
      "There might be a mandatory age of termination, or anagathics might be widely used. Family units might be different, with children being raised by the state or banned in favor of cloning.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 55 },
  },
  {
    name: "Unusual customs: Social Standings",
    id: 29,
    desc:
      "The culture has a distinct caste system. Characters of a low social standing who do not behave appropriately will face punishment.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 56 },
  },
  {
    name: "Unusual customs: Trade",
    id: 30,
    desc:
      "The culture has an odd attitude towards some aspect of commerce, which may interfere with trade at the spaceport. For example, merchants might expect a gift as part of a deal, or some goods may only be handled by certain families.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 61 },
  },
  {
    name: "Unusual customs: Nobility",
    id: 31,
    desc:
      "Those of high social standing have a strange custom associated with them; perhaps nobles are blinded, or must live in gilded cages, or only serve for a single year before being exiled.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 62 },
  },
  {
    name: "Unusual customs: Sex",
    id: 32,
    desc:
      "The culture has an unusual attitude towards intercourse and reproduction. Perhaps cloning is used instead, or sex is used to seal commercial deals.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 63 },
  },
  {
    name: "Unusual customs: Eating",
    id: 33,
    desc:
      "Food and drink occupies an unusual place in the culture. Perhaps eating is a private affair, or banquets and formal dinners are seen as the highest form of politeness.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 64 },
  },
  {
    name: "Unusual customs: Travel",
    id: 34,
    desc:
      "Travellers may be distrusted or feted, or perhaps the culture frowns on those who leave their homes.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 65 },
  },
  {
    name: "Unusual customs: Conspiracy",
    id: 35,
    desc:
      "Something strange is going on. The government is being subverted by another group or agency.",
    type: "CULTURE_DIFFERENCE",
    values: { roll: 66 },
  },
];
