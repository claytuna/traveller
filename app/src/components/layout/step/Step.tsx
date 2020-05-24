import React from "react";
import { ButtonProps } from "../../ui/button/Button";
import { Button } from "../../ui";
import { Container, Col, Row } from "../";

export const Step = ({ title, children, next, prev }: StepProps) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>{title}</Col>
      </Row>
      <Row>
        <Col xs={12}>{children}</Col>
      </Row>
      {(next || prev) && (
        <Row>
          {prev && (
            <Col xs={6}>
              <Button {...prev} />
            </Col>
          )}
          {next && (
            <Col xs={6}>
              <Button {...next} />
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export interface StepProps {
  children: React.ReactNode;
  title: React.ReactNode;
  next?: ButtonProps;
  prev?: ButtonProps;
}
