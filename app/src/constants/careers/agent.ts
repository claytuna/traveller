import { SkillService } from "../../services";
import { CareerObject, CareerRank } from "../careers";
import { defaultCareerPenalty } from "./defaultCareerPenalty";

const intelCorpRank: CareerRank[] = [
  { title: "Agent" },
  {
    title: "Agent",
    benefit: { skill: { keys: ["DECEPTION"], value: 1 } },
  },
  {
    title: "Field Agent",
    benefit: { skill: { keys: ["INVESTIGATE"], value: 1 } },
  },
  { title: "Field Agent" },
  {
    title: "Special Agent",
    benefit: {
      skill: { keys: SkillService.getSubSkillKeys("GUN_COMBAT"), value: 1 },
    },
  },
  { title: "Assistant Director" },
  { title: "Director" },
];

export const AGENT: CareerObject = {
  id: 1,
  type: "CAREER",
  name: "Agent",
  desc:
    "Law enforcement agents, spies, corporate operatives and others who work in the shadows",
  events: [
    "Disaster!",
    "Investigation gets dangerous",
    "Complete a mission",
    "Establish contacts",
    "Given advanced training",
    "Life event",
    "Go undercover",
    "Above and beyond",
    "Given special vehicle training",
    "Befriended by a senior agent",
    "Uncover major conspiracy against your employers",
  ],
  qty: 0,
  qualify: {
    skill: { stat: "INT", value: 6 },
    ...defaultCareerPenalty,
  },
  mishaps: [
    "Severe injury",
    "Criminal deal",
    "Investigation goes wrong",
    "Learn something you shouldn't know",
    "Work comes to you",
    "Injured",
  ],
  musteringOutBenefits: [
    { cash: 1000, item: ["SCIENTIFIC_EQUIPMENT"] },
    { cash: 2000, characteristic: { stat: "INT", value: 1 } },
    { cash: 5000, item: ["SHIP_SHARE"] },
    { cash: 7500, item: ["WEAPON"] },
    { cash: 10000, item: ["COMBAT_IMPLANT"] },
    {
      cash: 25000,
      option: [
        { characteristic: { stat: "SOC", value: 1 } },
        { item: ["COMBAT_IMPLANT"] },
      ],
    },
    { cash: 50000, item: ["TAS_MEMBERSHIP"] },
  ],
  personalDevelopment: [
    { skill: { keys: SkillService.getSubSkillKeys("GUN_COMBAT"), value: 1 } },
    { characteristic: { stat: "DEX", value: 1 } },
    { characteristic: { stat: "END", value: 1 } },
    { skill: { keys: SkillService.getSubSkillKeys("MELEE"), value: 1 } },
    { characteristic: { stat: "INT", value: 1 } },
    { skill: { keys: SkillService.getSubSkillKeys("ATHLETICS"), value: 1 } },
  ],
  serviceSkills: [
    ["STREETWISE"],
    SkillService.getSubSkillKeys("DRIVE"),
    ["INVESTIGATE"],
    ["COMPUTERS"],
    ["RECON"],
    SkillService.getSubSkillKeys("GUN_COMBAT"),
  ],
  advancedEducation: {
    minEdu: 8,
    skills: [
      ["ADVOCATE"],
      ["COMMS"],
      ["COMPUTERS"],
      ["MEDIC"],
      ["STEALTH"],
      ["REMOTE_OPERATIONS"],
    ],
  },
  specializations: {
    AGENT_LAW_ENFORCEMENT: {
      type: "CAREER",
      name: "Law Enforcement (Agent)",
      desc: "Police officer or detective",
      survival: { stat: "END", value: 6 },
      promotion: { stat: "INT", value: 6 },
      specialistSkills: [
        ["INVESTIGATE"],
        ["RECON"],
        ["STREETWISE"],
        ["STEALTH"],
        SkillService.getSubSkillKeys("MELEE"),
        ["ADVOCATE"],
      ],
      ranks: [
        { title: "Rookie" },
        {
          title: "Corporal",
          benefit: { skill: { keys: ["STREETWISE"], value: 1 } },
        },
        { title: "Sergeant" },
        { title: "Lieutenant" },
        {
          title: "Detective",
          benefit: { skill: { keys: ["INVESTIGATE"], value: 1 } },
        },
        {
          title: "Chief",
          benefit: { skill: { keys: ["ADMIN"], value: 1 } },
        },
        {
          title: "Commissioner",
          benefit: { characteristic: { stat: "SOC", value: 1 } },
        },
      ],
      id: 2,
      qty: 0,
      parentId: 1,
    },
    AGENT_INTELLIGENCE: {
      type: "CAREER",
      name: "Intelligence (Agent)",
      desc: "Spy or saboteur",
      id: 3,
      qty: 0,
      survival: { stat: "INT", value: 7 },
      promotion: { stat: "INT", value: 5 },
      parentId: 1,
      ranks: intelCorpRank,
      specialistSkills: [
        ["INVESTIGATE"],
        ["RECON"],
        ["COMMS"],
        ["STEALTH"],
        ["PERSUADE"],
        ["DECEPTION"],
      ],
    },
    AGENT_CORPORATE: {
      type: "CAREER",
      name: "Corporate (Agent)",
      desc: "Corporate espionage",
      id: 4,
      qty: 0,
      survival: { stat: "INT", value: 5 },
      promotion: { stat: "INT", value: 7 },
      parentId: 1,
      ranks: intelCorpRank,
      specialistSkills: [
        ["INVESTIGATE"],
        ["COMPUTERS"],
        ["STEALTH"],
        SkillService.getSubSkillKeys("GUN_COMBAT"),
        ["DECEPTION"],
        ["STREETWISE"],
      ],
    },
  },
};
