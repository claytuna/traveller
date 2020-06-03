import { SkillService } from "../../services";
import { CareerObject } from "../careers/types";
import { defaultCareerPenalty } from "./defaultCareerPenalty";

export const ENTERTAINER: CareerObject = {
  type: "CAREER",
  name: "Entertainer",
  desc:
    "Individuals who are involved with the media, whether as reporters, artists, or celebrities.",
  id: 17,
  qty: 0,
  qualify: {
    skill: { stat: "INT", value: 5 },
    ...defaultCareerPenalty,
  },
  events: [
    { desc: "Disaster!" },
    {
      desc:
        "You are invited to take part in a controversial event or exhibition.",
    },
    { desc: "You are a part of your homeworld's celebrity circles." },
    {
      desc:
        "One of your works is especially well received and popular, making you a minor celebrity.",
    },
    { desc: "You gain a patron in the arts." },
    { desc: "Life event" },
    {
      desc:
        "You have the opportunity to criticize or even bring down a questionable political leader on your homeworld.",
    },
    { desc: "You go on a tour of the sector, visiting several worlds." },
    {
      desc:
        "One of your pieces of art is stolen, and the investigation brings you into the criminal underworld.",
    },
    { desc: "As an artist, you lead a strange and charmed life." },
    { desc: "You win a prestigious prize." },
  ],
  mishaps: [
    { desc: "Injured" },
    { desc: "You expose or are involved in a scandal of some sort." },
    { desc: "Public opinion turns on you." },
    { desc: "You are betrayed by a peer." },
    {
      desc:
        "An investigation, tour, project, or expedition goes wrong, stranding you far from home.",
    },
    {
      desc:
        "You are forced out because of censorship or controversy. What truth di you get too close to?",
    },
  ],
  musteringOutBenefits: [
    { cash: 0, item: ["CONTACT"] },
    { cash: 0, characteristic: { stat: "SOC", value: 1 } },
    { cash: 10000, item: ["CONTACT"] },
    { cash: 10000, characteristic: { stat: "SOC", value: 1 } },
    { cash: 40000, characteristic: { stat: "INT", value: 1 } },
    { cash: 40000, item: ["SHIP_SHARE", "SHIP_SHARE"] },
    {
      cash: 80000,
      characteristic: [
        { stat: "SOC", value: 1 },
        { stat: "EDU", value: 1 },
      ],
    },
  ],
  personalDevelopment: [
    { characteristic: { stat: "DEX", value: 1 } },
    { characteristic: { stat: "INT", value: 1 } },
    { characteristic: { stat: "SOC", value: 1 } },
    { characteristic: { stat: "EDU", value: 1 } },
    { skill: { keys: ["CAROUSE"], value: 1 } },
    { skill: { keys: ["STEALTH"], value: 1 } },
  ],
  serviceSkills: [
    SkillService.getSubSkillKeys("ART"),
    SkillService.getSubSkillKeys("ART"),
    ["CAROUSE"],
    ["DECEPTION"],
    ["PERSUADE"],
    ["STEWARD"],
  ],
  advancedEducation: {
    minEdu: 10,
    skills: [
      ["ADVOCATE"],
      SkillService.getSubSkillKeys("ART"),
      ["DECEPTION"],
      SkillService.getSubSkillKeys("SCIENCE"),
      ["STREETWISE"],
      ["DIPLOMAT"],
    ],
  },
  specializations: {
    ENTERTAINER_ARTIST: {
      type: "CAREER",
      name: "Artist (Entertainer)",
      desc: "",
      id: 18,
      qty: 0,
      parentId: 17,
      survival: { stat: "SOC", value: 6 },
      promotion: { stat: "INT", value: 6 },
      ranks: [
        { title: "" },
        {
          title: "",
          benefit: {
            skill: { keys: SkillService.getSubSkillKeys("ART"), value: 1 },
          },
        },
        { title: "" },
        {
          title: "",
          benefit: {
            skill: { keys: ["INVESTIGATE"], value: 1 },
          },
        },
        {
          title: "Famous artist",
          benefit: {
            characteristic: { stat: "SOC", value: 1 },
          },
        },
        { title: "" },
      ],
      specialistSkills: [
        SkillService.getSubSkillKeys("ART"),
        ["CAROUSE"],
        ["COMPUTERS"],
        ["GAMBLER"],
        ["PERSUADE"],
        SkillService.getSubSkillKeys("TRADE"),
      ],
    },
    ENTERTAINER_JOURNALIST: {
      type: "CAREER",
      name: "Journalist (Entertainer)",
      desc: "",
      id: 19,
      qty: 0,
      parentId: 17,
      survival: { stat: "EDU", value: 7 },
      promotion: { stat: "INT", value: 5 },
      ranks: [
        { title: "" },
        {
          title: "Freelancer",
          benefit: {
            skill: { keys: ["COMMS"], value: 1 },
          },
        },
        {
          title: "Staff",
          benefit: {
            skill: { keys: ["INVESTIGATE"], value: 1 },
          },
        },
        { title: "" },
        {
          title: "Correspondent",
          benefit: {
            skill: { keys: ["PERSUADE"], value: 1 },
          },
        },
        { title: "" },
        {
          title: "Senior Correspondent",
          benefit: {
            characteristic: { stat: "SOC", value: 1 },
          },
        },
      ],
      specialistSkills: [
        ["WRITING", "HOLOGRAPHY"],
        ["COMMS"],
        ["COMPUTERS"],
        ["INVESTIGATE"],
        ["RECON"],
        ["STREETWISE"],
      ],
    },
    ENTERTAINER_PERFORMER: {
      type: "CAREER",
      name: "Performer (Entertainer)",
      desc: "",
      id: 20,
      qty: 0,
      parentId: 17,
      survival: { stat: "INT", value: 5 },
      promotion: { stat: "DEX", value: 7 },
      ranks: [
        { title: "" },
        {
          title: "",
          benefit: {
            characteristic: { stat: "DEX", value: 1 },
          },
        },
        { title: "" },
        {
          title: "",
          benefit: {
            characteristic: { stat: "STR", value: 1 },
          },
        },
        { title: "" },
        {
          title: "Famous Performer",
          benefit: {
            characteristic: { stat: "SOC", value: 1 },
          },
        },
        { title: "" },
      ],
      specialistSkills: [
        ["ACTING", "DANCE", "INSTRUMENT"],
        ["COORDINATION", "ENDURANCE"],
        ["CAROUSE"],
        ["DECEPTION"],
        ["STEALTH"],
        ["STREETWISE"],
      ],
    },
  },
};
