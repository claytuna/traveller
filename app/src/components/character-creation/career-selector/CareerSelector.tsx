import React from "react";
import { CAREER_LIST, CareerKeys } from "../../../constants";

export const CareerSelector = () => {
  return (
    <>
      {(Object.keys(CAREER_LIST) as CareerKeys[]).map((careerKey) => {
        const careerObj = CAREER_LIST[careerKey];
        console.log(careerObj);
        return <p key={careerKey}>{careerKey}</p>;
      })}
    </>
  );
};
