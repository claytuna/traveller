import React from "react";
import { TradeCodeObject } from "../../../../constants";
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
  var skills =
    world && world.tradeCodes
      ? SkillService.getBackgroundSkills(
          world.tradeCodes.map((o) => o.values.code)
        )
      : undefined;
  return (
    <Row>
      <Col xs={12}>
        <p>
          {isEditable
            ? "Skills remaining: " + skillPoints
            : "Skills available for current homeworld:"}
        </p>
        <Row>
          <Col xs={12}>
            {skills && skills.worldSkills && (
              <Card
                isSecondary
                title="Available Background Skills"
                body={
                  skills?.worldSkills &&
                  Object.keys(skills.worldSkills).length > 0 ? (
                    <Row>
                      {Object.keys(skills.worldSkills).map(
                        (sKey, idx: number) => {
                          if (skills?.worldSkills[sKey] === undefined) {
                            return null;
                          }
                          const sk = skills.worldSkills[sKey];
                          return (
                            <Col xs={3} lg={2} key={"bg-skil-" + idx}>
                              {isEditable ? (
                                <SkillButton
                                  disabled={disabled}
                                  skillName={sk.name}
                                  skillKey={idx}
                                  min={0}
                                  onIncrement={(d) => {
                                    onIncrement(d);
                                  }}
                                  onDecrement={(d) => {
                                    onDecrement(d);
                                  }}
                                  value={returnSkillQty(characterSkills, idx)}
                                />
                              ) : (
                                sk.name
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
                      {Object.keys(skills.educationSkills).map(
                        (sKey: string, idx: number) => {
                          if (skills?.educationSkills[sKey] === undefined) {
                            return null;
                          }
                          const sk = skills.educationSkills[sKey];
                          return (
                            <Col xs={3} lg={2} key={"bg-skil-" + idx}>
                              {isEditable ? (
                                <SkillButton
                                  disabled={disabled}
                                  skillName={sk.name}
                                  skillKey={idx}
                                  min={0}
                                  onIncrement={(d) => {
                                    onIncrement(d);
                                  }}
                                  onDecrement={(d) => {
                                    onDecrement(d);
                                  }}
                                  value={returnSkillQty(characterSkills, idx)}
                                />
                              ) : (
                                sk.name
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

function returnSkillQty(characterSkills: CharacterSkill[], skillKey: number) {
  if (
    characterSkills &&
    characterSkills[skillKey] &&
    characterSkills[skillKey].qty
  ) {
    return characterSkills[skillKey].qty || 0;
  } else {
    return 0;
  }
}

export type CharacterSkill = { [key: string]: unknown; qty?: number };

export interface BackgroundSkillSummaryProps {
  characterSkills: CharacterSkill[];
  world: {
    tradeCodes: TradeCodeObject[];
  };
  disabled?: boolean;
  isEditable?: boolean;
  skillPoints: number;
  onIncrement: (d: any) => void;
  onDecrement: (d: any) => void;
}
