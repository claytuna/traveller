import React from "react";
import * as Styled from "./ButtonGroup.styled";

export const ButtonGroup = ({
  justifyContent,
  noMargin,
  children,
  ...rest
}: ButtonGroupProps) => {
  return (
    <Styled.Group
      data-testid="ButtonGroup"
      justifyContent={justifyContent || "flex-start"}
      noMargin={noMargin}
      {...rest}
    >
      {children}
    </Styled.Group>
  );
};

export interface ButtonGroupProps {
  justifyContent?: string;
  noMargin?: boolean;
  children?: React.ReactNode;
}
