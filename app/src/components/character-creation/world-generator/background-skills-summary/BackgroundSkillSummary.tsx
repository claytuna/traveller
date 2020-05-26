import React, { useMemo } from "react";
import { TradeCodeObject, SkillKeys, SkillObject } from "../../../../constants";
import { SkillService } from "../../../../services";
import { Card, SkillButton } from "../../../ui";
import { Row, Col } from "../../../layout";

export const BackgroundSkillSummary = ({
  characterSkills,
  world,
  disabled,
  isEditable,
  skillPoints,
  onIncrement,
  onDecrement,
}: BackgroundSkillSummaryProps) => {
  const skills =
    world && world.tradeCodes
      ? SkillService.getBackgroundSkills(
          world.tradeCodes.map((o) => o.values.code)
        )
      : undefined;
  const instructionText = useMemo(() => {
    if (isEditable) {
      return "Select skills below; remaining: " + skillPoints;
    }
    return "Selected skills:";
  }, [isEditable, skillPoints]);
  return (
    <Row>
      <Col xs={12}>
        <p>{instructionText}</p>
        <Row>
          <Col xs={12}>
            {skills?.worldSkills && (
              <Card
                isSecondary
                title="Available Background Skills"
                body={
                  Object.keys(skills.worldSkills).length > 0 ? (
                    <Row>
                      {(Object.keys(skills.worldSkills) as SkillKeys[]).map(
                        (skillKey, idx: number) => {
                          if (
                            skills?.worldSkills === undefined ||
                            skills.worldSkills[skillKey] === undefined
                          ) {
                            return null;
                          }
                          const skillObject = skills.worldSkills[skillKey];
                          const currentQty = returnSkillQty(
                            characterSkills,
                            skillKey
                          );
                          return (
                            <Col xs={3} lg={2} key={"bg-skil-" + idx}>
                              {isEditable ? (
                                <SkillButton
                                  disabled={disabled}
                                  skillName={skillObject.name}
                                  skillKey={skillKey}
                                  min={0}
                                  onIncrement={(key, value) => {
                                    onIncrement(key, value);
                                  }}
                                  onDecrement={(key, value) => {
                                    onDecrement(key, value);
                                  }}
                                  value={currentQty}
                                />
                              ) : (
                                `${skillObject.name}${
                                  currentQty ? ` (${currentQty})` : ""
                                }`
                              )}
                            </Col>
                          );
                        }
                      )}
                    </Row>
                  ) : (
                    <p>No background skills available for this homeworld.</p>
                  )
                }
              />
            )}
            {skills?.educationSkills &&
              Object.keys(skills.educationSkills).length > 0 && (
                <Card
                  isSecondary
                  title="General Education Skills"
                  body={
                    <Row>
                      {(Object.keys(skills.educationSkills) as SkillKeys[]).map(
                        (skillKey, idx: number) => {
                          const skillObject = skills.educationSkills[skillKey];
                          if (skillObject === undefined) {
                            return null;
                          }
                          const currentQty = returnSkillQty(
                            characterSkills,
                            skillKey
                          );
                          return (
                            <Col xs={3} lg={2} key={"bg-skil-" + idx}>
                              {isEditable ? (
                                <SkillButton
                                  disabled={disabled}
                                  skillName={skillObject.name}
                                  skillKey={skillKey}
                                  min={0}
                                  onIncrement={(key, value) => {
                                    onIncrement(key, value);
                                  }}
                                  onDecrement={(key, value) => {
                                    onDecrement(key, value);
                                  }}
                                  value={currentQty}
                                />
                              ) : (
                                `${skillObject.name}${
                                  currentQty ? ` (${currentQty})` : ""
                                }`
                              )}
                            </Col>
                          );
                        }
                      )}
                    </Row>
                  }
                />
              )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export type CharacterSkillObject = { [key in SkillKeys]?: SkillObject };

function returnSkillQty(
  characterSkills: CharacterSkillObject,
  skillKey: SkillKeys
) {
  if (characterSkills) {
    const foundKey = characterSkills[skillKey];
    return foundKey ? foundKey.qty : 0;
  }

  return 0;
}

export interface BackgroundSkillSummaryProps {
  characterSkills: CharacterSkillObject | {};
  world: {
    tradeCodes: TradeCodeObject[];
  };
  disabled?: boolean;
  isEditable?: boolean;
  skillPoints: number;
  onIncrement: (key: any, value: any) => void;
  onDecrement: (key: any, value: any) => void;
}
