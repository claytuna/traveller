import React from "react";
import { DiceRollService as DRS } from "../../../services";
import "./DiceRoll.less";

export const DiceRoll = ({ rolls, keepHighest }: DiceRollProps) => {
  let roll = 0;

  if (rolls && keepHighest) {
    const kh = keepHighest && !isNaN(keepHighest) ? keepHighest : 1;
    roll = DRS.sum(DRS.rollDiceKeepHighest(kh, rolls));
  } else if (rolls) {
    roll = DRS.roll(rolls);
  } else {
    roll = 0;
  }
  // TODO: children of span used to be rolls && roll; investigate
  return <span className="dice-roll">{roll}</span>;
};

export interface DiceRollProps {
  rolls?: number[];
  keepHighest?: number;
}
