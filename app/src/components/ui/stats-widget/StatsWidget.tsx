import React, { useState, useCallback, useRef, useEffect } from "react";
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
} from "../";
import { makeStatMatrix, StatMatrixArray } from "./makeStatMatrix";

export const StatsWidget = ({ actions, dispatch, forms }: StatsWidgetProps) => {
  const values = useRef<number[]>([]);
  const [rolls, setRolls] = useState<StatMatrixArray>();
  const [isRolled, setIsRolled] = useState<boolean>();
  const { statRollForm } = forms;

  useEffect(() => {
    setRolls(undefined);
    setIsRolled(false);
  }, [forms.statRollForm.statRollType]);

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
  }, []);

  const saveStats = useCallback(() => {
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
      title={<p>Characteristics:</p>}
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
            text="Roll Stats"
            priority="secondary"
            onClick={() => rollStats()}
          />
          {isStatRolled && (
            <Button
              text="Accept Stats"
              priority="tertiary"
              onClick={() => saveStats()}
            />
          )}
        </ButtonGroup>
      }
    />
  );
};

export interface StatsWidgetProps {
  actions: any;
  dispatch: any;
  forms: {
    statRollForm: {
      statRollType: string;
    };
  };
}

// export class OldStatsWidget extends React.Component {
//   constructor(props) {
//     super(props);
//     this.values = [];
//     this.state = { rolls: undefined, rolled: false };
//   }

//   componentDidUpdate(nextProps, nextState) {
//     //console.log(this.props, nextProps)
//     this.props.forms.statRollForm.statRollType !=
//       nextProps.forms.statRollForm.statRollType &&
//       this.setState({ rolls: undefined, rolled: false });
//   }

//   rollStats() {
//     var rollMatrix = makeMatrix([6, 6]);
//     this.values = [];
//     this.setState({ rolls: undefined, rolled: false });

//     switch (this.props.forms.statRollType) {
//       case "keepHighest":
//         rollMatrix = makeMatrix([6, 6, 6]);
//         break;

//       case "keepNth":
//         rollMatrix = makeMatrix([6, 6, 6, 6]);
//         break;

//       default:
//         rollMatrix = makeMatrix([6, 6]);
//         break;
//     }

//     this.setState({ rolls: rollMatrix, rolled: true });

//     function makeMatrix(vals) {
//       return ["STR", "DEX", "END", "INT", "EDU", "SOC"].map((stat) => ({
//         name: stat,
//         rolls: vals,
//       }));
//     }
//   }

//   saveStats() {
//     this.props.dispatch(this.props.actions.updateCharacterStats(this.values));
//     this.props.dispatch(
//       this.props.actions.setBackgroundSkillCount(
//         StatsService.getModifier(this.values[4]) + 3
//       )
//     );
//   }

//   render() {
//     const dispatch = this.props.dispatch;
//     const actions = this.props.actions;
//     const form = this.props.forms.statRollForm;
//     const isStatRolled = this.state.rolled === true && form;
//     return (
//       <Card
//         title={<p>Characteristics:</p>}
//         body={
//           <Row>
//             <Col xs={12} sm={6}>
//               <Card
//                 title="Current Characteristics"
//                 isSecondary
//                 body={
//                   <Row>
//                     {isStatRolled ? (
//                       getRolls.call(this)
//                     ) : (
//                       <Col xs={12}>
//                         <p>Roll for stats below.</p>
//                       </Col>
//                     )}
//                   </Row>
//                 }
//               />
//             </Col>
//             <Col xs={12} sm={6}>
//               <FieldGroup label="Change the rolling scheme">
//                 <SelectField
//                   formName="statRollForm"
//                   fieldName="statRollType"
//                   onUpdate={({ formName, fieldName, value }) => {
//                     dispatch(actions.updateForm(formName, fieldName, value));
//                   }}
//                   value={form.statRollType}
//                   options={[
//                     { value: "default", text: "2d6 - Default" },
//                     { value: "keepHighest", text: "3d6 - Keep highest 2" },
//                     { value: "keepNth", text: "4d6 - Keep 1st and 3rd" },
//                   ]}
//                 />
//               </FieldGroup>
//             </Col>
//           </Row>
//         }
//         footer={
//           <ButtonGroup noMargin>
//             <Button
//               text="Roll Stats"
//               priority="secondary"
//               onClick={this.rollStats.bind(this)}
//             />
//             {isStatRolled && (
//               <Button
//                 text="Accept Stats"
//                 priority="tertiary"
//                 onClick={this.saveStats.bind(this)}
//               />
//             )}
//           </ButtonGroup>
//         }
//       />
//     );

//     function getRolls(srt) {
//       return this.state.rolls.map((obj) => {
//         let curRoll: number;
//         switch (form.statRollType) {
//           case "keepHighest":
//             curRoll = MS.sum(DiceRollService.rollDiceKeepHighest(2, obj.rolls));
//             break;

//           case "keepNth":
//             curRoll = MS.sum(
//               DiceRollService.rollDiceKeepNth([0, 2], obj.rolls)
//             );
//             break;

//           default:
//             curRoll = DiceRollService.roll(obj.rolls);
//             break;
//         }
//         this.values.push(curRoll);
//         return (
//           <Col xs={12} md={6} key={"roll-" + obj.name}>
//             <DatumGroup title={obj.name} value={curRoll} isCountable />
//           </Col>
//         );
//       });
//     }
//   }
// }
