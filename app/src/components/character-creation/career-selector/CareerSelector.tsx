import React, { useState, useContext } from "react";
import { StateContext } from "../../../App";
import { CAREER_LIST } from "../../../constants";
import { CareerKeys, CareerObject } from "../../../constants/careers/types";
import { CareerQualifier } from "./CareerQualifier";

export const CareerSelector = () => {
  const { characterCreation } = useContext(StateContext);
  const [chosenCareer, setChosenCareer] = useState<CareerObject | undefined>();

  return (
    <>
      {chosenCareer === undefined
        ? (Object.keys(CAREER_LIST) as CareerKeys[]).map((careerKey) => {
            const careerObj = CAREER_LIST[careerKey];
            return (
              <button
                onClick={() => {
                  setChosenCareer(careerObj);
                }}
                key={careerKey}
              >
                {careerObj?.name}
              </button>
            );
          })
        : null}
      {chosenCareer !== undefined && characterCreation.stats ? (
        <div>
          <h2>{chosenCareer.name}</h2>
          <p>{chosenCareer.desc}</p>

          <CareerQualifier
            name={chosenCareer.name}
            qualify={chosenCareer.qualify}
            stats={characterCreation.stats}
            currentAge={characterCreation.age}
            previousCareers={
              characterCreation.careers ? characterCreation.careers.length : 0
            }
            setChosenCareer={setChosenCareer}
          />
        </div>
      ) : null}
    </>
  );
};
