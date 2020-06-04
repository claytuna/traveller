import React from "react";
import {
  QualifyObject,
  StatModifierObject,
} from "../../../constants/careers/types";
import { StatKeys } from "../../../constants";
import { DatumGroup } from "../../ui";

const isQualified = ({
  roll,
  penalties,
  skill,
}: {
  roll: number;
  penalties: number;
  skill: StatModifierObject;
}) => (roll + penalties >= skill.value ? true : false);

const getQualifierOutcome = ({
  roll,
  penalties,
  skill,
}: {
  roll: number;
  penalties: number;
  skill: StatModifierObject;
}) => {
  const summaryString = (symbol: string) =>
    `Roll: ${roll} + Penalties: ${penalties} ${symbol} ${skill.stat}(${skill.value})`;
  return isQualified({ roll, penalties, skill })
    ? `SUCCESS: ${summaryString(">=")}`
    : `FAILURE: ${summaryString("<")}`;
};

export const CareerQualifier = ({
  currentAge,
  previousCareers,
  qualify,
  roll,
  stats,
}: CareerQualifierProps) => {
  const { autoQualify, skill, agePenalty, careerPenalty } = qualify;

  const penalties = (() => {
    if (roll === undefined) {
      return undefined;
    }
    let total = 0;
    if (skill?.stat) {
      total += stats[skill.stat].modifier;
    }
    if (autoQualify) {
      return 0;
    }
    if (currentAge !== undefined && agePenalty) {
      total += agePenalty(currentAge);
    }
    if (previousCareers !== undefined && careerPenalty) {
      total += careerPenalty(previousCareers);
    }
    return total;
  })();

  if (autoQualify === true) {
    return <p>Auto-qualifies</p>;
  }

  return (
    <>
      {typeof skill?.value === "number" && roll && penalties
        ? getQualifierOutcome({ roll, penalties, skill })
        : null}
      {roll && <DatumGroup title="Roll" value={roll} />}
      {skill && (
        <DatumGroup
          title={`Qualification ${skill.stat}`}
          value={typeof skill.value === "number" ? skill.value : 0}
        />
      )}
      {skill?.stat && (
        <DatumGroup
          title={`Stat penalty ${skill.stat} (${stats[skill.stat].value})`}
          value={stats[skill.stat].modifier}
        />
      )}
      {currentAge !== undefined && agePenalty && (
        <DatumGroup
          title={`Age penalty (${currentAge})`}
          value={agePenalty(currentAge)}
        />
      )}
      {previousCareers !== undefined && careerPenalty && (
        <DatumGroup
          title={`Career penalty (${previousCareers})`}
          value={careerPenalty(previousCareers)}
        />
      )}
    </>
  );
};

export interface CareerQualifierProps {
  qualify: QualifyObject;
  currentAge: number;
  previousCareers: number;
  roll?: number;
  stats: { [key in StatKeys]: { value: number; modifier: number } };
}
