import React from "react";
import { ButtonProps } from "../../ui/button/Button";
import { Button, ButtonGroup } from "../../ui";
import * as Styled from "./Step.styled";
// import useDimensions from "./useDimensions";

export const Step = ({ title, children, next, prev }: StepProps) => {
  // const [stepRef, stepSize] = useDimensions(); stepRef as React.Ref<HTMLDivElement>
  return (
    <Styled.Step data-testid="Step">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Body>{children}</Styled.Body>
      {(next || prev) && (
        <Styled.Footer>
          <ButtonGroup noMargin justifyContent="center">
            {prev && <Button priority="tertiary" {...prev} />}
            {next && <Button {...next} />}
          </ButtonGroup>
        </Styled.Footer>
      )}
    </Styled.Step>
  );
};

export interface StepProps {
  children: React.ReactNode;
  title: React.ReactNode;
  next?: ButtonProps;
  prev?: ButtonProps;
}
