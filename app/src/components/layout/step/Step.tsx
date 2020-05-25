import React from "react";
import { ButtonProps } from "../../ui/button/Button";
import { Button, ButtonGroup } from "../../ui";
import * as Styled from "./Step.styled";

export const Step = ({ title, children, next, prev }: StepProps) => {
  return (
    <Styled.Step data-testid="Step">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Row>{children}</Styled.Row>
      {(next || prev) && (
        <Styled.Footer>
          <Styled.Row>
            <ButtonGroup noMargin>
              {prev && <Button {...prev} />}
              {next && <Button {...next} />}
            </ButtonGroup>
          </Styled.Row>
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
