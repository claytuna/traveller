import React, { useState, useContext } from "react";
import { StateContext } from "../../../App";
import { DiceRollService } from "../../../services";
import { CAREER_LIST } from "../../../constants";
import { CareerKeys, CareerObject } from "../../../constants/careers/types";
import { ButtonGroup, Button } from "../../ui";
import { CareerQualifier } from "./CareerQualifier";

export const CareerSelector = () => {
  const { characterCreation } = useContext(StateContext);
  const [activeCareer, setActiveCareer] = useState<CareerObject | undefined>();
  const [qualifiedRoll, setQualifiedRoll] = useState<number | undefined>();
  return (
    <>
      {activeCareer === undefined
        ? (Object.keys(CAREER_LIST) as CareerKeys[]).map((careerKey) => {
            const careerObj = CAREER_LIST[careerKey];
            return (
              <button
                onClick={() => {
                  setActiveCareer(careerObj);
                }}
                key={careerKey}
              >
                {careerObj?.name}
              </button>
            );
          })
        : null}
      {activeCareer !== undefined && characterCreation.stats ? (
        <div>
          <p>{activeCareer.desc}</p>

          <CareerQualifier
            qualify={activeCareer.qualify}
            roll={qualifiedRoll}
            stats={characterCreation.stats}
            currentAge={18}
            previousCareers={0}
          />
          <ButtonGroup>
            <Button
              priority="tertiary"
              disabled={qualifiedRoll !== undefined}
              onClick={() => setActiveCareer(undefined)}
            >
              Select Different Career
            </Button>
            <Button
              priority="secondary"
              disabled={false}
              onClick={() => setQualifiedRoll(DiceRollService.roll([6, 6]))}
            >
              Roll to qualify
            </Button>
          </ButtonGroup>
        </div>
      ) : null}
    </>
  );
};
