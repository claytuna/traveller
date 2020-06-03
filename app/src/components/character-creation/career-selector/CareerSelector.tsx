import React, { useState } from "react";
import { CAREER_LIST } from "../../../constants";
import { CareerKeys, CareerObject } from "../../../constants/careers/types";
import { ButtonGroup, Button } from "../../ui";
import { CareerQualifier } from "./CareerQualifier";

export const CareerSelector = () => {
  const [activeCareer, setActiveCareer] = useState<CareerObject | undefined>();
  const [qualifiedRoll, setQualifiedRoll] = useState<number | undefined>();
  return (
    <>
      {activeCareer === undefined
        ? (Object.keys(CAREER_LIST) as CareerKeys[]).map((careerKey) => {
            const careerObj = CAREER_LIST[careerKey];
            console.log(CAREER_LIST, careerObj);
            return (
              <button
                onClick={() => {
                  setActiveCareer(careerObj);
                }}
                key={careerKey}
              >
                {careerKey}
              </button>
            );
          })
        : null}
      {activeCareer !== undefined ? (
        <div>
          <p>{activeCareer.desc}</p>

          <CareerQualifier
            qualify={activeCareer.qualify}
            currentAge={18}
            previousCareers={0}
          />
          <ButtonGroup>
            <Button
              priority="tertiary"
              onClick={() => setActiveCareer(undefined)}
            >
              Select Different Career
            </Button>
            <Button
              priority="secondary"
              onClick={() => setQualifiedRoll(undefined)}
            >
              Roll to qualify
            </Button>
          </ButtonGroup>
        </div>
      ) : null}
      {qualifiedRoll !== undefined ? <p>QUALIFIED || UNQUALIFIED</p> : null}
    </>
  );
};
