import React from "react";
import * as Styled from "./ButtonGroup.styled";

export const ButtonGroup = ({
  noMargin,
  children,
  ...rest
}: ButtonGroupProps) => {
  return (
    <Styled.Group data-testid="ButtonGroup" noMargin={noMargin} {...rest}>
      {children}
    </Styled.Group>
  );
};

export interface ButtonGroupProps {
  noMargin?: boolean;
  children?: React.ReactNode;
}
