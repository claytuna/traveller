import React from "react";
import * as Styled from "./Card.styled";

export const Card = ({
  title,
  body,
  footer,
  isSecondary,
}: {
  body?: React.ReactNode;
  title?: React.ReactNode;
  isSecondary?: boolean;
  footer?: React.ReactNode;
}) => {
  return (
    <Styled.Card data-testid="Card" isSecondary={isSecondary}>
      {title && <Styled.Title>{title}</Styled.Title>}
      {body && <Styled.Body>{body}</Styled.Body>}
      {footer && <Styled.Footer>{footer}</Styled.Footer>}
    </Styled.Card>
  );
};
