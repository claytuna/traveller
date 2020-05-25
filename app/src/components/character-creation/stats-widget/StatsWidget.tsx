import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from "react";
import { StateContext } from "../../../App";
import {
  MathService as MS,
  DiceRollService,
  StatsService,
} from "../../../services";
import { Row, Col } from "../../layout";
import {
  Card,
  ButtonGroup,
  Button,
  DatumGroup,
  FieldGroup,
  SelectField,
} from "../../ui";
import { makeStatMatrix, StatMatrixArray } from "./makeStatMatrix";

export const StatsWidget = () => {
  const { actions, dispatch, forms } = useContext(StateContext);
  const values = useRef<number[]>([]);
  const [rolls, setRolls] = useState<StatMatrixArray>();
  const [isRolled, setIsRolled] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const { statRollForm } = forms;

  useEffect(() => {
    setRolls(undefined);
    setIsRolled(false);
  }, [statRollForm.statRollType]);

  const rollStats = useCallback(() => {
    var rollMatrix = makeStatMatrix([6, 6]);
    values.current = [];
    setRolls(undefined);
    setIsRolled(false);

    switch (statRollForm.statRollType) {
      case "keepHighest":
        rollMatrix = makeStatMatrix([6, 6, 6]);
        break;

      case "keepNth":
        rollMatrix = makeStatMatrix([6, 6, 6, 6]);
        break;

      default:
        rollMatrix = makeStatMatrix([6, 6]);
        break;
    }
    setRolls(rollMatrix);
    setIsRolled(true);
  }, [statRollForm.statRollType]);

  const saveStats = useCallback(() => {
    setIsLocked(true);
    dispatch(actions.updateCharacterStats(values.current));
    dispatch(
      actions.setBackgroundSkillCount(
        StatsService.getModifier(values.current[4]) + 3
      )
    );
  }, [actions, dispatch, values]);

  const isStatRolled = isRolled;

  return (
    <Card
      title="Characteristics"
      body={
        <Row>
          <Col xs={12} sm={6}>
            <Card
              title="Current Characteristics"
              isSecondary
              body={
                <Row>
                  {isStatRolled && rolls ? (
                    rolls.map((obj) => {
                      let curRoll: number;
                      switch (statRollForm.statRollType) {
                        case "keepHighest":
                          curRoll = MS.sum(
                            DiceRollService.rollDiceKeepHighest(2, obj.rolls)
                          );
                          break;

                        case "keepNth":
                          curRoll = MS.sum(
                            DiceRollService.rollDiceKeepNth([0, 2], obj.rolls)
                          );
                          break;

                        default:
                          curRoll = DiceRollService.roll(obj.rolls);
                          break;
                      }
                      values.current.push(curRoll);
                      return (
                        <Col xs={12} md={6} key={"roll-" + obj.name}>
                          <DatumGroup
                            title={obj.name}
                            value={curRoll}
                            isCountable
                          />
                        </Col>
                      );
                    })
                  ) : (
                    <Col xs={12}>
                      <p>Roll for stats below.</p>
                    </Col>
                  )}
                </Row>
              }
            />
          </Col>
          <Col xs={12} sm={6}>
            <FieldGroup label="Change the rolling scheme">
              <SelectField
                formName="statRollForm"
                fieldName="statRollType"
                onUpdate={({ formName, fieldName, value }) => {
                  dispatch(actions.updateForm(formName, fieldName, value));
                }}
                value={statRollForm.statRollType}
                options={[
                  { value: "default", text: "2d6 - Default" },
                  { value: "keepHighest", text: "3d6 - Keep highest 2" },
                  { value: "keepNth", text: "4d6 - Keep 1st and 3rd" },
                ]}
              />
            </FieldGroup>
          </Col>
        </Row>
      }
      footer={
        <ButtonGroup noMargin>
          <Button
            text={isStatRolled ? "Re-roll stats" : "Roll Stats"}
            priority={isStatRolled ? "secondary" : "primary"}
            disabled={isLocked}
            onClick={() => rollStats()}
          />
          {isStatRolled && (
            <Button
              text="Accept Stats"
              priority="primary"
              disabled={isLocked}
              onClick={() => saveStats()}
            />
          )}
        </ButtonGroup>
      }
    />
  );
};
