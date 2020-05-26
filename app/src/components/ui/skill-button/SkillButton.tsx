import React from "react";
import { DatumGroup } from "../";
import * as Styled from "./SkillButton.styled";

export const SkillButton = ({
  disabled,
  max,
  min,
  onDecrement,
  onIncrement,
  skillKey,
  skillName,
  value,
}: SkillButtonProps) => {
  return (
    <Styled.Wrapper data-testid="SkillButton">
      <DatumGroup title={skillName} value={value} />
      <Styled.InlineGroup>
        {onDecrement &&
          getButton({
            update: onDecrement,
            skillKey,
            value,
            isIncrement: false,
            disabled,
            max,
            min,
          })}
        {onIncrement &&
          getButton({
            update: onIncrement,
            skillKey,
            value,
            isIncrement: true,
            disabled,
            max,
            min,
          })}
      </Styled.InlineGroup>
    </Styled.Wrapper>
  );
};

export type UpdateFn = (
  skillKey: string | number,
  value: string | number
) => void;

export interface ButtonArgs {
  update?: UpdateFn;
  skillKey: string | number;
  value?: string | number;
  disabled?: boolean;
  max?: number;
  min?: number;
}

export interface SkillButtonProps extends ButtonArgs {
  onDecrement?: UpdateFn;
  onIncrement?: UpdateFn;
  skillName: string | number;
}

function getButton({
  update,
  skillKey,
  value,
  isIncrement,
  disabled,
  max,
  min,
}: { isIncrement?: boolean } & ButtonArgs) {
  return value !== undefined ? (
    <Styled.SkillButton
      disabled={disabled || disableIfMinMax()}
      onClick={() => {
        update && update(skillKey, value);
      }}
      title={`${isIncrement ? "Increment" : "Decrement"}: ${skillKey}`}
    >
      {isIncrement ? "+" : "-"}
    </Styled.SkillButton>
  ) : null;

  function disableIfMinMax() {
    if (value === undefined) return true;
    if (typeof max === "number" && isIncrement && value >= max) return true;
    if (typeof min === "number" && !isIncrement && value <= min) return true;
    return false;
  }
}
