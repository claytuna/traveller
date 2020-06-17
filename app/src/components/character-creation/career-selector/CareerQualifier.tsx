import React, { useState, useMemo } from "react";
import {
  QualifyObject,
  StatModifierObject,
} from "../../../constants/careers/types";
import { StatKeys } from "../../../constants";
import { DiceRollService } from "../../../services";
import { DatumGroup, Button, ButtonGroup, Card } from "../../ui";

const isQualified = ({
  roll,
  penalties,
  skill,
}: {
  roll: number;
  penalties: number;
  skill: StatModifierObject;
}) => (roll + penalties >= skill.value ? true : false);

export const CareerQualifier = ({
  currentAge,
  name,
  previousCareers,
  qualify,
  setChosenCareer,
  stats,
}: CareerQualifierProps) => {
  const [qualifiedRoll, setQualifiedRoll] = useState<number | undefined>();
  const { autoQualify, skill, agePenalty, careerPenalty } = qualify;

  const penalties = (() => {
    if (qualifiedRoll === undefined) {
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

  const qualifiedOutcome = useMemo(() => {
    console.log({ skill, penalties, qualifiedRoll });
    if (autoQualify) {
      return undefined;
    }
    if (qualifiedRoll === undefined || penalties === undefined || !skill) {
      return undefined;
    }
    const summaryString = (symbol: string) =>
      `${qualifiedRoll}(roll) - ${penalties * -1}(penalties) ${symbol} ${
        skill.stat
      }(${skill.value})`;
    return isQualified({ roll: qualifiedRoll, penalties, skill })
      ? { isSuccess: true, value: `SUCCESS: ${summaryString(">=")}` }
      : { isSuccess: false, value: `FAILURE: ${summaryString("<")}` };
  }, [autoQualify, qualifiedRoll, penalties, skill]);

  if (autoQualify === true) {
    return (
      <>
        <p>There is not qualification required for this career.</p>
        <Button
          priority="tertiary"
          disabled={qualifiedRoll !== undefined}
          onClick={() => setChosenCareer(undefined)}
        >
          Select Different Career
        </Button>
      </>
    );
  }

  return (
    <div data-testid="CareerQualifier">
      <Card
        title={
          qualifiedOutcome
            ? `Roll for ${name}: ${
                qualifiedOutcome.isSuccess ? "SUCCESS!" : "FAILURE!"
              }`
            : "Roll to qualify for: " + name
        }
      >
        {skill && (
          <DatumGroup
            title={`Required stat ${skill.stat}`}
            value={typeof skill.value === "number" ? skill.value : 0}
          />
        )}
        {qualifiedRoll && <DatumGroup title="Roll" value={qualifiedRoll} />}
        {qualifiedRoll === undefined && (
          <ButtonGroup>
            <Button
              priority="tertiary"
              disabled={qualifiedRoll !== undefined}
              onClick={() => setChosenCareer(undefined)}
            >
              Select Different Career
            </Button>
            <Button
              priority="secondary"
              disabled={qualifiedRoll !== undefined}
              onClick={() => setQualifiedRoll(DiceRollService.roll([6, 6]))}
            >
              Roll to qualify
            </Button>
          </ButtonGroup>
        )}
        {qualifiedOutcome ? (
          qualifiedOutcome.value
        ) : (
          <Card title="Active Roll Penalties" isSecondary>
            {skill?.stat && (
              <DatumGroup
                title={`Stat penalty ${skill.stat} (${
                  stats[skill.stat].value
                })`}
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
          </Card>
        )}
        {qualifiedOutcome && qualifiedOutcome.isSuccess === false ? (
          <Card isSecondary title="Select an option">
            <ButtonGroup>
              <Button>Become a Drifter</Button>
              <Button>Join the Draft</Button>
            </ButtonGroup>
          </Card>
        ) : null}
      </Card>
    </div>
  );
};

export interface CareerQualifierProps {
  qualify: QualifyObject;
  currentAge: number;
  name: string;
  previousCareers: number;
  setChosenCareer: (career?: never) => void;
  stats: { [key in StatKeys]: { value: number; modifier: number } };
}
