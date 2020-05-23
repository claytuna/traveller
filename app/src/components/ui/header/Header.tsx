import React from "react";
import { Container, Row, Col } from "../../layout";
import { ButtonGroup, Button } from "../";
import "./Header.less";

export const Header = ({ onRestart, onSave, title }: HeaderProps) => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h1 className="header__title">
              {title || "Character Generator (Traveller)"}
            </h1>
          </Col>
          <Col xs={12} sm={6}>
            <div className="pull-right">
              <ButtonGroup>
                <Button
                  text="Start over"
                  onClick={() => onRestart && onRestart()}
                />
                <Button
                  text="Save"
                  priority="secondary"
                  disabled
                  onClick={() => onSave && onSave()}
                />
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export interface HeaderProps {
  onSave?: () => void;
  onRestart?: () => void;
  title?: React.ReactNode;
}
