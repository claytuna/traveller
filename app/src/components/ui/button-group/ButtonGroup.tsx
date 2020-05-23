import React from "react";
import "./BtnGroup.less";

export const ButtonGroup = ({
  noMargin,
  children,
  ...rest
}: ButtonGroupProps) => {
  return (
    <div
      className={`btngroup ${noMargin ? "btngroup--no-margin" : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export interface ButtonGroupProps {
  noMargin?: boolean;
  children?: React.ReactNode;
}
