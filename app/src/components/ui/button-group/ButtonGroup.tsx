import React from "react";
import "./ButtonGroup.less";

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
