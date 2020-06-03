import { SkillService } from "../../services";
import { CareerObject } from "../careers/types";
import { defaultCareerPenalty } from "./defaultCareerPenalty";

export const CITIZEN: CareerObject = {
  type: "CAREER",
  name: "Citizen",
  desc:
    "Individuals serving in a corporation, bureaucracy or industry, or who are making a new life on an untamed planet",
  id: 9,
  qty: 0,
  qualify: {
    skill: { stat: "EDU", value: 5 },
    ...defaultCareerPenalty,
  },
  events: [
    { desc: "Disaster!" },
    {
      desc:
        "Political upheaval strikes your home world, and you are caught up in the revolution",
    },
    {
      desc:
        "You spend time maintaining and using heavy vehicles, either as a part of your job or as a hobby.",
    },
    {
      desc:
        "Your business expands, your corporation grows, or the colony thrives.",
    },
    {
      desc: "You are given advanced training in a specialist field.",
    },
    { desc: "Life event." },
    {
      desc:
        "You learn something you shouldn't have, which you can profit from... illegally.",
    },
  ],
  mishaps: [
    { desc: "Injured" },
    {
      desc: "You are harassed and your life ruined by a criminal gang.",
    },
    {
      desc:
        "Hard times caused by a lack of interstellar trade costs you your job.",
    },
    {
      desc:
        "Your business is investigated by planetary authorities (or colony suffers interference from interests offworld.",
    },
    {
      desc:
        "A revolution, attack, or other unusual event throws your life into chaos, forcing you to leave the planet.",
    },
    {
      desc:
        "One of your co-workers develops a hatred of you, and sabotages your life. Gain a rival.",
    },
  ],
  musteringOutBenefits: [
    { cash: 1000, item: ["SHIP_SHARE"] },
    { cash: 5000, item: ["ALLY"] },
    { cash: 10000, characteristic: { stat: "INT", value: 1 } },
    { cash: 10000, item: ["GUN"] },
    { cash: 10000, characteristic: { stat: "EDU", value: 1 } },
    { cash: 50000, item: ["SHIP_SHARE", "SHIP_SHARE"] },
    { cash: 100000, item: ["TAS_MEMBERSHIP"] },
  ],
  personalDevelopment: [
    { characteristic: { stat: "EDU", value: 1 } },
    { characteristic: { stat: "INT", value: 1 } },
    { skill: { keys: ["CAROUSE"], value: 1 } },
    { skill: { keys: ["GAMBLER"], value: 1 } },
    { skill: { keys: SkillService.getSubSkillKeys("DRIVE"), value: 1 } },
    { skill: { keys: ["JACK_OF_ALL_TRADES"], value: 1 } },
  ],
  serviceSkills: [
    SkillService.getSubSkillKeys("DRIVE"),
    SkillService.getSubSkillKeys("FLYER"),
    ["STREETWISE"],
    SkillService.getSubSkillKeys("MELEE"),
    ["STEWARD"],
    ["TRADE"],
  ],
  advancedEducation: {
    minEdu: 10,
    skills: [
      SkillService.getSubSkillKeys("ART"),
      ["ADVOCATE"],
      ["DIPLOMAT"],
      SkillService.getSubSkillKeys("LANGUAGE"),
      ["COMPUTERS"],
      ["MEDIC"],
    ],
  },
  specializations: {
    CITIZEN_CORPORATE: {
      type: "CAREER",
      name: "Corporate (Citizen)",
      desc:
        "You are an executive or manager in a large corporation. Alternatively, you are a bureaucrat or functionary in some government or civil institution.",
      specialistSkills: [
        ["ADVOCATE"],
        ["ADMIN"],
        ["BROKER"],
        ["COMPUTERS"],
        ["DIPLOMAT"],
        ["LEADERSHIP"],
      ],
      survival: { stat: "SOC", value: 6 },
      promotion: { stat: "INT", value: 6 },
      ranks: [
        { title: "" },
        { title: "Assistant to the Manager" },
        { title: "Manager", benefit: { skill: { keys: ["ADMIN"], value: 1 } } },
        { title: "" },
        {
          title: "Senior Manager",
          benefit: { skill: { keys: ["ADVOCATE"], value: 1 } },
        },
        {
          title: "Director",
          benefit: { characteristic: { stat: "SOC", value: 1 } },
        },
      ],
      id: 10,
      qty: 0,
      parentId: 9,
    },
    CITIZEN_WORKER: {
      type: "CAREER",
      name: "Worker (Citizen)",
      desc: "Worker on an industrial world.",
      id: 11,
      qty: 0,
      survival: { stat: "END", value: 4 },
      promotion: { stat: "EDU", value: 8 },
      specialistSkills: [
        SkillService.getSubSkillKeys("DRIVE"),
        ["MECHANIC"],
        SkillService.getSubSkillKeys("TRADE"),
        SkillService.getSubSkillKeys("ENGINEER"),
        SkillService.getSubSkillKeys("TRADE"),
        ["SCIENCE"],
      ],
      parentId: 9,
      ranks: [
        { title: "" },
        { title: "" },
        {
          title: "Technician",
          benefit: { skill: { keys: ["TRADE"], value: 1 } },
        },
        { title: "" },
        {
          title: "Craftsman",
          benefit: { skill: { keys: ["MECHANIC"], value: 1 } },
        },
        { title: "" },
        {
          title: "Master Technician",
          benefit: { skill: { keys: ["ENGINEER"], value: 1 } },
        },
      ],
    },
    CITIZEN_COLONIST: {
      type: "CAREER",
      name: "Colonist (Citizen)",
      desc:
        "You are building a new life on a recently settled world that still needs taming.",
      id: 12,
      qty: 0,
      specialistSkills: [
        SkillService.getSubSkillKeys("ANIMALS"),
        SkillService.getSubSkillKeys("ATHLETICS"),
        ["JACK_OF_ALL_TRADES"],
        SkillService.getSubSkillKeys("DRIVE"),
        ["SURVIVAL"],
        ["RECON"],
      ],
      survival: { stat: "INT", value: 7 },
      promotion: { stat: "END", value: 5 },
      parentId: 9,
      ranks: [
        { title: "" },
        { title: "" },
        {
          title: "Settler",
          benefit: { skill: { keys: ["SURVIVAL"], value: 1 } },
        },
        { title: "" },
        {
          title: "Explorer",
          benefit: { skill: { keys: ["NAVIGATION"], value: 1 } },
        },
        { title: "" },
        { title: "", benefit: { skill: { keys: ["GUN_COMBAT"], value: 1 } } },
      ],
    },
  },
};
