import { SkillService } from "../../services";
import { CareerObject, CareerRank } from "../careers/types";
import { defaultCareerPenalty } from "./defaultCareerPenalty";

const ncoRank: CareerRank[] = [
  {
    title: "Marine",
    benefit: {
      option: [
        { skill: { keys: ["BLADE"], value: 1 } },
        {
          skill: {
            keys: SkillService.getSubSkillKeys("GUN_COMBAT"),
            value: 1,
          },
        },
      ],
    },
  },
  {
    title: "Lance Corporal",
    benefit: {
      skill: {
        keys: SkillService.getSubSkillKeys("GUN_COMBAT"),
        value: 1,
      },
    },
  },
  { title: "Corporal" },
  {
    title: "Lance Sergeant",
    benefit: {
      skill: {
        keys: ["LEADERSHIP"],
        value: 1,
      },
    },
  },
  { title: "Sergeant" },
  {
    title: "Gunnery Sergeant",
    benefit: { characteristic: { stat: "END", value: 1 } },
  },
  { title: "Sergeant Major" },
];

export const MARINES: CareerObject = {
  type: "CAREER",
  name: "Marines",
  desc:
    "Members of the armed fighting forces carried aboard starships, marines deal with piracy and boarding actions in space, defends the starports and bases belonging to the navy and supplement ground forces such as the army.",
  id: 21,
  qty: 0,
  qualify: {
    skill: { stat: "END", value: 6 },
    agePenalty: (currentAge: number) => (currentAge >= 30 ? -2 : 0),
    ...defaultCareerPenalty,
  },
  commission: { stat: "SOC", value: 8 },
  events: [
    { desc: "Disaster" },
    { desc: "Trapped behind enemy lines" },
    { desc: "You are assigned to the security staff of a space station." },
    { desc: "You are given advanced training in a specialist field." },
    { desc: "You are assigned to an assault on an enemy fortress." },
    { desc: "Life event." },
    {
      desc: "You are on the front lines of a planetary assault and occupation.",
    },
    {
      desc:
        "A mission goes disastrously wrong due to your commander's error or incompetence, but you survive.",
    },
    { desc: "You are assigned to a black ops mission." },
    { desc: "Your commanding officer takes an interest in your career." },
    { desc: "You display heroism in battle." },
  ],
  mishaps: [
    { desc: "Severely injured in action." },
    {
      desc:
        "A mission goes wrong; you and several others are captured and mistreated by the enemy.",
    },
    { desc: "A mission goes wrong; you are stranded behind enemy lines." },
    {
      desc:
        "You are ordered to take part in a black ops mission that goes against your conscience.",
    },
    {
      desc: "You are tormented by or quarrel with an officer or fellow marine.",
    },
    { desc: "Injured." },
  ],
  musteringOutBenefits: [
    { cash: 2000, item: ["ARMOUR"] },
    { cash: 5000, characteristic: { stat: "INT", value: 1 } },
    { cash: 5000, characteristic: { stat: "EDU", value: 1 } },
    { cash: 10000, item: ["WEAPON"] },
    { cash: 20000, item: ["TAS_MEMBERSHIP"] },
    {
      cash: 30000,
      option: [
        { item: ["ARMOUR"] },
        { characteristic: { stat: "END", value: 1 } },
      ],
    },
    { cash: 40000, characteristic: { stat: "SOC", value: 2 } },
  ],
  officerRank: [
    { title: "" },
    {
      title: "Lieutenant",
      benefit: { skill: { keys: ["LEADERSHIP"], value: 1 } },
    },
    { title: "Captain" },
    {
      title: "Force Commander",
      benefit: {
        skill: { keys: SkillService.getSubSkillKeys("TACTICS"), value: 1 },
      },
    },
    { title: "Lt Colonel" },
    {
      title: "Colonel",
      benefit: {
        characteristic: {
          stat: "SOC",
          value: (currentSoc) => (currentSoc < 10 ? 10 : currentSoc + 1),
        },
      },
    },
    {
      title: "Brigadier",
    },
  ],
  officerSkills: [
    ["LEADERSHIP"],
    SkillService.getSubSkillKeys("TACTICS"),
    ["ADMIN"],
    ["ADVOCATE"],
    ["BATTLE_DRESS"],
    ["LEADERSHIP"],
  ],
  personalDevelopment: [
    { characteristic: { stat: "STR", value: 1 } },
    { characteristic: { stat: "DEX", value: 1 } },
    { characteristic: { stat: "END", value: 1 } },
    { skill: { keys: ["GAMBLER"], value: 1 } },
    { skill: { keys: ["UNARMED_COMBAT"], value: 1 } },
    { skill: { keys: ["BLADE"], value: 1 } },
  ],
  serviceSkills: [
    SkillService.getSubSkillKeys("ATHLETICS"),
    ["BATTLE_DRESS"],
    SkillService.getSubSkillKeys("TACTICS"),
    SkillService.getSubSkillKeys("HEAVY_WEAPONS"),
    SkillService.getSubSkillKeys("GUN_COMBAT"),
    ["STEALTH"],
  ],
  specializations: {
    MARINES_SUPPORT: {
      type: "CAREER",
      name: "Support (Marines)",
      desc: "You were a quartermaster, engineer, or battlefield medic.",
      id: 22,
      qty: 0,
      parentId: 21,
      survival: { stat: "END", value: 5 },
      promotion: { stat: "EDU", value: 7 },
      ranks: ncoRank,
      specialistSkills: [
        ["COMMS"],
        ["MECHANIC"],
        SkillService.getSubSkillKeys("DRIVE").concat(
          SkillService.getSubSkillKeys("FLYER")
        ),
        ["MEDIC"],
        SkillService.getSubSkillKeys("HEAVY_WEAPONS"),
        SkillService.getSubSkillKeys("GUN_COMBAT"),
      ],
    },
    MARINES_STAR_MARINE: {
      type: "CAREER",
      name: "Star Marine (Marines)",
      desc:
        "You were trained to fight boarding actions and capture enemy vessels.",
      id: 23,
      qty: 0,
      parentId: 21,
      survival: { stat: "END", value: 6 },
      promotion: { stat: "EDU", value: 6 },
      ranks: ncoRank,
      specialistSkills: [
        ["BATTLE_DRESS"],
        ["ZERO_G"],
        SkillService.getSubSkillKeys("GUNNERY"),
        ["BLADE"],
        ["SENSORS"],
        SkillService.getSubSkillKeys("GUN_COMBAT"),
      ],
    },
    MARINES_GROUND_ASSAULT: {
      type: "CAREER",
      name: "Ground Assault (Marines)",
      desc:
        "They kicked you out of a spacecraft in high orbit and said, 'Capture that planet.'",
      id: 24,
      qty: 0,
      parentId: 21,
      survival: { stat: "END", value: 7 },
      promotion: { stat: "EDU", value: 5 },
      ranks: ncoRank,
      specialistSkills: [
        ["BATTLE_DRESS"],
        SkillService.getSubSkillKeys("HEAVY_WEAPONS"),
        ["RECON"],
        ["BLADE"],
        ["MILITARY_TACTICS"],
        SkillService.getSubSkillKeys("GUN_COMBAT"),
      ],
    },
  },
};
