import React from "react";
import * as Styled from "./Button.styled";

export const Button = ({
  children,
  text,
  priority,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <Styled.Button priority={priority} type={type || "button"} {...rest}>
      {children || text || "Click here"}
    </Styled.Button>
  );
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  priority?: "primary" | "secondary" | "tertiary";
  text?: React.ReactNode;
}
