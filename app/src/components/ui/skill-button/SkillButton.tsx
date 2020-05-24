import React from "react";
import { DatumGroup } from "../";
import "./SkillButton.less";

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
    <div className="skill-btn">
      {onDecrement &&
        getBtn({
          update: onDecrement,
          skillKey,
          value,
          isIncrement: false,
          disabled,
          max,
          min,
        })}
      <DatumGroup title={skillName} value={value} />
      {onIncrement &&
        getBtn({
          update: onIncrement,
          skillKey,
          value,
          isIncrement: true,
          disabled,
          max,
          min,
        })}
    </div>
  );
};

export type UpdateFn = (
  skillKey: string | number,
  value: string | number
) => void;

export interface ButtonArgs {
  update?: UpdateFn;
  skillKey: string | number;
  value: string | number;
  disabled?: boolean;
  max?: number;
  min?: number;
}

export interface SkillButtonProps extends ButtonArgs {
  onDecrement?: UpdateFn;
  onIncrement?: UpdateFn;
  skillName: string | number;
}

function getBtn({
  update,
  skillKey,
  value,
  isIncrement,
  disabled,
  max,
  min,
}: { isIncrement?: boolean } & ButtonArgs) {
  return (
    <button
      disabled={disabled || testMinMax()}
      className="btn btn--skill"
      onClick={() => {
        update && update(skillKey, value);
      }}
    >
      {isIncrement ? "+" : "-"}
    </button>
  );

  function testMinMax() {
    if (typeof max === "number" && isIncrement && value >= max) return true;
    if (typeof min === "number" && !isIncrement && value <= min) return true;
    return false;
  }
}
