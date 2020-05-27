import { SkillService } from "../../services";
import { CareerObject, CareerRank } from "./careerList";
import { defaultCareerPenalty } from "./defaultCareerPenalty";

const ncoRank: CareerRank[] = [
  {
    title: "Private",
    benefit: { skill: { keys: ["SLUG_RIFLE", "ENERGY_RIFLE"], value: 1 } },
  },
  {
    title: "Lance Corporal",
    benefit: { skill: { keys: ["RECON"], value: 1 } },
  },
  { title: "Corporal" },
  {
    title: "Lance Sergeant",
    benefit: { skill: { keys: ["LEADERSHIP"], value: 1 } },
  },
  { title: "Gunnery Sergeant" },
  { title: "Sergeant Major" },
];

export const ARMY: CareerObject = {
  type: "CAREER",
  name: "Army",
  desc:
    "Members of the planetary armed fighting forces. Soldiers deal with planetary surface actions, battles, and campaigns. Such individuals may also be mercenaries for hire.",
  id: 5,
  advancedEducation: {
    minEdu: 8,
    skills: [
      ["COMMS"],
      ["SENSORS"],
      ["NAVIGATION"],
      ["EXPLOSIVES"],
      SkillService.getSubSkillKeys("ENGINEER"),
      ["SURVIVAL"],
    ],
  },
  commission: { stat: "SOC", value: 8 },
  events: [
    "Disaster!",
    "Assigned to a hostile planet",
    "Assigned to war-torn urban planet",
    "Given special assignment",
    "Brutal ground war",
    "Life event",
    "Advanced training",
    "Surrounded and outnumbered",
    "Assigned a peacekeeping role",
    "Commanding officer takes interest in your career",
    "Display heroism in battle",
  ],
  mishaps: [
    "Severly injured",
    "Unit is slaughtered in battle",
    "Sent to an unpleasant region",
    "Discover your CO is engaged in illegal activity",
    "Quarrel with rival officer or fellow soldier",
    "Injured",
  ],
  musteringOutBenefits: [
    { cash: 2000, item: ["COMBAT_IMPLANT"] },
    { cash: 5000, characteristic: { stat: "INT", value: 1 } },
    { cash: 10000, characteristic: { stat: "EDU", value: 1 } },
    { cash: 10000, item: ["WEAPON"] },
    { cash: 10000, item: ["ARMOUR"] },
    {
      cash: 20000,
      option: [
        { item: ["COMBAT_IMPLANT"] },
        { characteristic: { stat: "END", value: 1 } },
      ],
    },
    { cash: 30000, characteristic: { stat: "SOC", value: 1 } },
  ],
  officerSkills: [
    ["MILITARY_TACTICS"],
    ["LEADERSHIP"],
    ["ADVOCATE"],
    ["DIPLOMAT"],
    ["MILITARY_TACTICS"],
    ["ADMIN"],
  ],
  officerRank: [
    { title: "" },
    {
      title: "Lieutenant",
      benefit: { skill: { keys: ["LEADERSHIP"], value: 1 } },
    },
    { title: "Captain" },
    {
      title: "Major",
      benefit: { skill: { keys: ["MILITARY_TACTICS"], value: 1 } },
    },
    { title: "Lt Colonel" },
    { title: "Colonel" },
    {
      title: "General",
      benefit: {
        characteristic: {
          stat: "SOC",
          value: (currentSoc) => (currentSoc < 10 ? 10 : currentSoc + 1),
        },
      },
    },
  ],
  personalDevelopment: [
    { characteristic: { stat: "STR", value: 1 } },
    { characteristic: { stat: "DEX", value: 1 } },
    { characteristic: { stat: "END", value: 1 } },
    { skill: { keys: ["GAMBLER"], value: 1 } },
    { skill: { keys: ["MEDIC"], value: 1 } },
    { skill: { keys: ["UNARMED_COMBAT"], value: 1 } },
  ],
  serviceSkills: [
    SkillService.getSubSkillKeys("DRIVE"),
    SkillService.getSubSkillKeys("MELEE"),
    SkillService.getSubSkillKeys("GUN_COMBAT"),
    ["RECON"],
    SkillService.getSubSkillKeys("MELEE"),
    SkillService.getSubSkillKeys("HEAVY_WEAPONS"),
  ],
  qty: 0,
  qualify: {
    skill: { stat: "END", value: 5 },
    agePenalty: (currentAge: number) => (currentAge >= 30 ? -2 : 0),
    ...defaultCareerPenalty,
  },
  specializations: {
    ARMY_SUPPORT: {
      type: "CAREER",
      name: "Support (Army)",
      desc:
        "Engineer, technician, medic, cook or some other support role behind the front lines.",
      id: 6,
      ranks: ncoRank,
      specialistSkills: [
        ["MECHANIC"],
        SkillService.getSubSkillKeys("DRIVE"),
        SkillService.getSubSkillKeys("FLYER"),
        ["EXPLOSIVES"],
        ["COMMS"],
        ["MEDIC"],
      ],
      survival: { stat: "END", value: 5 },
      promotion: { stat: "EDU", value: 7 },
      parentId: 5,
      qty: 0,
    },
    ARMY_INFANTRY: {
      type: "CAREER",
      name: "Infantry (Army)",
      desc: "One of the Poor Bloody Infantry on the ground.",
      id: 7,
      ranks: ncoRank,
      specialistSkills: [
        SkillService.getSubSkillKeys("GUN_COMBAT"),
        SkillService.getSubSkillKeys("MELEE"),
        SkillService.getSubSkillKeys("HEAVY_WEAPONS"),
        ["STEALTH"],
        SkillService.getSubSkillKeys("ATHLETICS"),
        ["RECON"],
      ],
      survival: { stat: "STR", value: 6 },
      promotion: { stat: "EDU", value: 6 },
      parentId: 5,
      qty: 0,
    },
    ARMY_CAVALRY: {
      type: "CAREER",
      name: "Cavalry (Army)",
      desc: "Crew of a tank, armor, or other ground vehicle.",
      id: 8,
      ranks: ncoRank,
      specialistSkills: [
        ["MECHANIC"],
        SkillService.getSubSkillKeys("DRIVE"),
        SkillService.getSubSkillKeys("FLYER"),
        ["RECON"],
        SkillService.getSubSkillKeys("GUNNER"),
        ["SENSORS"],
      ],
      survival: { stat: "DEX", value: 7 },
      promotion: { stat: "INT", value: 5 },
      parentId: 5,
      qty: 0,
    },
  },
};
