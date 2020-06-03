import { SkillService } from "../../services";
import { CareerObject } from "../careers/types";

export const DRIFTER: CareerObject = {
  type: "CAREER",
  name: "Drifter",
  desc:
    "Wanderers, hitch-hikers, and travellers, drifters are those who roam the stars without purpose or direction.",
  id: 13,
  qty: 0,
  qualify: { autoQualify: true },
  events: [
    { desc: "Disaster!" },
    { desc: "A patron offers you a chance at a job." },
    { desc: "You pick up a few useful skills here and there." },
    { desc: "You manage to scavenge something of use." },
    { desc: "You encounter something unusual." },
    { desc: "Life event." },
    { desc: "You are attacked by enemies." },
    {
      desc:
        "You are offered a chance to take part in a risky but rewarding adventure.",
    },
    { desc: "Life on the edge hones your abilities." },
    { desc: "You are forcibly drafted." },
    { desc: "You thrive on adversity." },
  ],
  mishaps: [
    { desc: "Severely injured." },
    { desc: "Injured" },
    {
      desc:
        "You run afoul of a criminal gang, corrupt bureaucrat, or other foe.",
    },
    { desc: "You suffer from a life-threatening illness." },
    { desc: "Betrayed by a friend" },
    {
      desc:
        "You don't know what happened to you. There is a gap in your memory.",
    },
  ],
  musteringOutBenefits: [
    { cash: 0, item: ["CONTACT"] },
    { cash: 0, item: ["WEAPON"] },
    { cash: 1000, item: ["ALLY"] },
    { cash: 2000, item: ["WEAPON"] },
    { cash: 3000, characteristic: { stat: "EDU", value: 1 } },
    { cash: 4000, item: ["SHIP_SHARE"] },
    { cash: 8000, item: ["SHIP_SHARE", "SHIP_SHARE"] },
  ],
  personalDevelopment: [
    { characteristic: { stat: "STR", value: 1 } },
    { characteristic: { stat: "END", value: 1 } },
    { characteristic: { stat: "DEX", value: 1 } },
    { skill: { keys: ["JACK_OF_ALL_TRADES"], value: 1 } },
    { characteristic: { stat: "END", value: 1 } },
    { characteristic: { stat: "INT", value: 1 } },
  ],
  serviceSkills: [
    SkillService.getSubSkillKeys("ATHLETICS"),
    ["UNARMED_COMBAT"],
    ["RECON"],
    ["STREETWISE"],
    ["STEALTH"],
    ["SURVIVAL"],
  ],
  specializations: {
    DRIFTER_BARBARIAN: {
      type: "CAREER",
      name: "Barbarian (Drifter)",
      desc:
        "You lived on a primitive world without the benefits of technology.",
      id: 14,
      qty: 0,
      parentId: 13,
      survival: { stat: "END", value: 7 },
      promotion: { stat: "STR", value: 7 },
      ranks: [
        { title: "" },
        { title: "", benefit: { skill: { keys: ["SURVIVAL"], value: 1 } } },
        { title: "Warrior", benefit: { skill: { keys: ["BLADE"], value: 1 } } },
        { title: "" },
        {
          title: "Chieftain",
          benefit: { skill: { keys: ["LEADERSHIP"], value: 1 } },
        },
        { title: "" },
      ],
      specialistSkills: [
        SkillService.getSubSkillKeys("ANIMALS"),
        ["CAROUSE"],
        SkillService.getSubSkillKeys("MELEE"),
        ["STEALTH"],
        SkillService.getSubSkillKeys("SEAFARER"),
        ["SURVIVAL"],
      ],
    },
    DRIFTER_WANDERER: {
      type: "CAREER",
      name: "Wanderer (Drifter)",
      desc:
        "You lived hand to mouth in slums and star-ports across the galaxy, traveling at random.",
      id: 15,
      qty: 0,
      parentId: 13,
      survival: { stat: "END", value: 7 },
      promotion: { stat: "INT", value: 7 },
      ranks: [
        { title: "" },
        { title: "", benefit: { skill: { keys: ["STREETWISE"], value: 1 } } },
        { title: "" },
        { title: "", benefit: { skill: { keys: ["DECEPTION"], value: 1 } } },
        { title: "" },
        { title: "" },
      ],
      specialistSkills: [
        SkillService.getSubSkillKeys("ATHLETICS"),
        ["DECEPTION"],
        ["RECON"],
        ["STEALTH"],
        ["STREETWISE"],
        ["SURVIVAL"],
      ],
    },
    DRIFTER_SCAVENGER: {
      type: "CAREER",
      name: "Scavenger (Drifter)",
      desc: "You worked as a belter (asteroid miner) or on a salvage crew.",
      id: 16,
      qty: 0,
      parentId: 13,
      survival: { stat: "DEX", value: 7 },
      promotion: { stat: "END", value: 7 },
      ranks: [
        { title: "" },
        { title: "", benefit: { skill: { keys: ["VACC_SUIT"], value: 1 } } },
        { title: "" },
        {
          title: "",
          benefit: {
            option: [
              { skill: { keys: ["TRADE"], desc: "Belter", value: 1 } },
              { skill: { keys: ["MECHANIC"], value: 1 } },
            ],
          },
        },
        { title: "" },
        { title: "" },
      ],
      specialistSkills: [
        ["SMALL_CRAFT"],
        ["MECHANIC"],
        ["ASTROGATION"],
        ["VACC_SUIT"],
        ["ZERO_G"],
        SkillService.getSubSkillKeys("GUN_COMBAT"),
      ],
    },
  },
};
