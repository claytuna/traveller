import React, { useContext } from "react";
import { StateContext } from "../../App";
import * as STEPS from "../../constants/characterCreationSteps";
import { Step } from "../layout";
import { StatsWidget } from "./stats-widget";
import { WorldGenerator } from "./world-generator";
import { CareerSelector } from "./career-selector";

const PREV = "Prev";
const NEXT = "Next";
const END = "Character Complete";

export const CharacterCreation = () => {
  const { actions, dispatch, characterCreation } = useContext(StateContext);
  const { step } = characterCreation;
  switch (step) {
    case STEPS.ROLL_CHARACTERISTICS:
      /** 1
       * - roll stats
       * - calc modifiers */
      return (
        <Step
          title={STEPS.ROLL_CHARACTERISTICS}
          next={{
            text: NEXT,
            disabled: characterCreation.stats === undefined,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_HOMEWORLD));
            },
          }}
        >
          <StatsWidget />
        </Step>
      );
    case STEPS.CHOOSE_HOMEWORLD:
      /** 2
       * - choose homeworld
       * - gain bg skills */
      return (
        <Step
          title={STEPS.CHOOSE_HOMEWORLD}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_CHARACTERISTICS));
            },
          }}
          next={{
            text: NEXT,
            disabled: characterCreation.homeworld === undefined,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAREER));
            },
          }}
        >
          <WorldGenerator />
        </Step>
      );
    case STEPS.CHOOSE_CAREER:
      /** 3
       * - choose new career; cannot choose a prev career
       * - roll to qualify
       * - IF qualify === true: goToStep(STEPS.BASIC_TRAINING)
       * - IF qualify === false: choose DRAFT or DRIFTER career
       */
      return (
        <Step
          title={STEPS.CHOOSE_CAREER}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_HOMEWORLD));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.BASIC_TRAINING));
            },
          }}
        >
          <CareerSelector />
        </Step>
      );
    case STEPS.BASIC_TRAINING:
      /** 4
       * If this is your first time in this career, add basic training */
      return (
        <Step
          title={STEPS.BASIC_TRAINING}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAREER));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAREER_SPECIALIZATION));
            },
          }}
        >
          BASIC TRAINING
        </Step>
      );
    case STEPS.CHOOSE_CAREER_SPECIALIZATION:
      /** 5
       * - choose specialization */
      return (
        <Step
          title={STEPS.CHOOSE_CAREER_SPECIALIZATION}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.BASIC_TRAINING));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAREER_SKILLS));
            },
          }}
        >
          SPECIALIZE
        </Step>
      );
    case STEPS.CHOOSE_CAREER_SKILLS:
      /** 6
       * - roll for survival
       * - IF you succeed goToStep(STEPS.ROLL_EVENTS)
       * - IF you fail, ROLL MISHAPS; then, goToStep(STEPS.INCREASE_AGE)
       */
      return (
        <Step
          title={STEPS.CHOOSE_CAREER_SKILLS}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAREER_SPECIALIZATION));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_EVENTS));
            },
          }}
        >
          SKILLZ
        </Step>
      );
    case STEPS.ROLL_EVENTS:
      /** 7
       * - roll EVENTS
       * - OPTIONAL: establish a connection with another player
       */
      return (
        <Step
          title={STEPS.ROLL_EVENTS}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAREER_SKILLS));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_ADVANCEMENT));
            },
          }}
        >
          FOO
        </Step>
      );
    case STEPS.ROLL_ADVANCEMENT:
      /** 8
       * - roll for ADVANCEMENT
       * - IF CAREER is MILITARY: choose to roll for commission or advancement
       * - IF SUCCESS:
       * -- choose one of this career's skill table and roll.
       * -- increase your rank in this career; add bonus skills for this rank
       * -- choose to either LEAVE: goToStep(STEPS.INCREASE_AGE) or CONTINUE: goToStep(STEPS.CHOOSE_CAREER_SPECIALIZATION)
       * - IF FAILURE:
       * -- if you roll less than # of terms in this career, you must exit: goToStep(STEPS.INCREASE_AGE)
       */
      return (
        <Step
          title={STEPS.ROLL_ADVANCEMENT}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_EVENTS));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.INCREASE_AGE));
            },
          }}
        >
          ADVANCEMENT
        </Step>
      );
    case STEPS.INCREASE_AGE:
      /** 9
       * - increase age by 4 years
       * - IF character is 34+ roll for AGING
       */
      return (
        <Step
          title={STEPS.INCREASE_AGE}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_ADVANCEMENT));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_BENEFITS));
            },
          }}
        >
          AGING
        </Step>
      );
    case STEPS.ROLL_BENEFITS:
      /** 10
       * - IF leaving career, roll benefits
       */
      return (
        <Step
          title={STEPS.ROLL_BENEFITS}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.INCREASE_AGE));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CONTINUE_OR_FINISH));
            },
          }}
        >
          BENEFITS
        </Step>
      );
    case STEPS.CONTINUE_OR_FINISH:
      /** 11
       * - IF leaving career, choose to start anew: goToStep(STEPS.CHOOSE_CAREER) or finish character:goToStep(STEPS.CHOOSE_CAREER)
       * - IF continuing in the same career: goToStep(STEPS.CHOOSE_CAREER_SPECIALIZATION)
       */
      return (
        <Step
          title={STEPS.CONTINUE_OR_FINISH}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.ROLL_BENEFITS));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.FINALIZE_CONNECTIONS));
            },
          }}
        >
          CONTINUE or COMPLETE?
        </Step>
      );
    case STEPS.FINALIZE_CONNECTIONS:
      /** 12
       * - Finish adding any/all character connections
       */
      return (
        <Step
          title={STEPS.FINALIZE_CONNECTIONS}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CONTINUE_OR_FINISH));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAMPAIGN_SKILLS));
            },
          }}
        >
          FINALIZING...
        </Step>
      );
    case STEPS.CHOOSE_CAMPAIGN_SKILLS:
      /** 13
       * - Choose a skill pack and allocate those skills
       */
      return (
        <Step
          title={STEPS.CHOOSE_CAMPAIGN_SKILLS}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.FINALIZE_CONNECTIONS));
            },
          }}
          next={{
            text: NEXT,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.PURCHASE_EQUIPMENT));
            },
          }}
        >
          SKILL PACK
        </Step>
      );
    case STEPS.PURCHASE_EQUIPMENT:
      /** 14
       * - Purchase starting equipment and/or ships
       */
      return (
        <Step
          title={STEPS.PURCHASE_EQUIPMENT}
          prev={{
            text: PREV,
            onClick: () => {
              dispatch(actions.goToStep(STEPS.CHOOSE_CAMPAIGN_SKILLS));
            },
          }}
          next={{
            text: END,
            disabled: true,
            onClick: () => {
              alert("COMPLETE!");
            },
          }}
        >
          EQUIPMENT
        </Step>
      );
    default:
      break;
  }
  return <Step title="Step not found">Please try again</Step>;
};
