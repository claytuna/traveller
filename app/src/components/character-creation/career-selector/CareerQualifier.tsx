import React from "react";
export const CareerQualifier = ({
  currentAge,
  previousCareers,
  qualify,
}: CareerQualifierProps) => {
  const { autoQualify, skill, agePenalty, careerPenalty } = qualify;
  if (autoQualify === true) {
    return <p>Auto-qualifies</p>;
  }
  return (
    <>
      {skill && (
        <p>
          {skill.stat}: {skill.value}
        </p>
      )}
      {currentAge !== undefined && agePenalty && (
        <p>
          Age penalty: {currentAge} DM({agePenalty(currentAge)})
        </p>
      )}
      {previousCareers !== undefined && careerPenalty && (
        <p>Career penalty: DM({careerPenalty(previousCareers)})</p>
      )}
    </>
  );
};

export interface CareerQualifierProps {
  qualify: any;
  currentAge: number;
  previousCareers: number;
}
