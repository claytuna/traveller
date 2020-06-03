import { SkillService } from "../../services";
import { CareerObject } from "../careers/types";
import { defaultCareerPenalty } from "./defaultCareerPenalty";

export const AGENT: CareerObject = {
  id: 1,
  type: "CAREER",
  name: "Agent",
  desc:
    "Law enforcement agents, spies, corporate operatives and others who work in the shadows",
  events: [{ desc: "Disaster!", action: "" }],
  qty: 0,
  qualify: {
    skill: { stat: "INT", value: 6 },
    ...defaultCareerPenalty,
  },
  mishaps: [{ desc: "Severe injury", action: "" }],
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
    [],
    SkillService.getSubSkillKeys("DRIVE"),
    [],
    [],
    [],
    SkillService.getSubSkillKeys("GUN_COMBAT"),
  ],
  advancedEducation: {
    minEdu: 8,
    skills: [[], [], [], [], [], []],
  },
  specializations: {
    AGENT_LAW_ENFORCEMENT: {
      type: "CAREER",
      name: " ",
      desc: " ",
      survival: { stat: "END", value: 99 },
      promotion: { stat: "END", value: 99 },
      specialistSkills: [
        [],
        [],
        [],
        [],
        SkillService.getSubSkillKeys("MELEE"),
        [],
      ],
      ranks: [
        { title: "" },
        {
          title: "",
          benefit: { skill: { keys: ["STREETWISE"], value: 1 } },
        },
        { title: "" },
        { title: "" },
        {
          title: "",
          benefit: { skill: { keys: ["INVESTIGATE"], value: 1 } },
        },
        {
          title: "",
          benefit: { skill: { keys: ["ADMIN"], value: 1 } },
        },
        {
          title: "",
          benefit: { characteristic: { stat: "SOC", value: 1 } },
        },
      ],
      id: 2,
      qty: 0,
      parentId: 1,
    },
    AGENT_INTELLIGENCE: {
      type: "CAREER",
      name: " ",
      desc: " ",
      id: 3,
      qty: 0,
      survival: { stat: "END", value: 99 },
      promotion: { stat: "END", value: 99 },
      parentId: 1,
      ranks: [],
      specialistSkills: [[], [], [], [], [], []],
    },
    AGENT_CORPORATE: {
      type: "CAREER",
      name: " ",
      desc: " ",
      id: 4,
      qty: 0,
      survival: { stat: "END", value: 99 },
      promotion: { stat: "END", value: 99 },
      parentId: 1,
      ranks: [],
      specialistSkills: [
        [],
        [],
        [],
        [],
        [],
        SkillService.getSubSkillKeys("GRAV"),
      ],
    },
  },
};
