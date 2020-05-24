import React from "react";
import * as STEPS from "../../constants/characterCreationSteps";
import { Step } from "../layout";

export const CharacterCreation = ({ step }: CharacterCreationProps) => {
  switch (step) {
    case STEPS.ROLL_CHARACTERISTICS:
      return (
        <Step title={STEPS.ROLL_CHARACTERISTICS}>
          {`
            StatsWidget
          `}
        </Step>
      );
    case STEPS.CHOOSE_HOMEWORLD:
      return (
        <Step title={STEPS.CHOOSE_HOMEWORLD}>
          {`
              - choose homeworld
              - choose bg skills
            `}
        </Step>
      );
    case STEPS.CHOOSE_CAREER:
      return (
        <Step title={STEPS.CHOOSE_CAREER}>
          {`
            - choose career
          `}
        </Step>
      );
    default:
      break;
  }
  return null;
};

export interface CharacterCreationProps {
  step: string;
}
