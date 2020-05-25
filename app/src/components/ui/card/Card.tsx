import React from "react";
import * as Styled from "./Card.styled";

export const Card = ({
  title,
  body,
  children,
  footer,
  isSecondary,
}: {
  body?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  isSecondary?: boolean;
  footer?: React.ReactNode;
}) => {
  return (
    <Styled.Card data-testid="Card" isSecondary={isSecondary}>
      {title && <Styled.Title>{title}</Styled.Title>}
      {(children || body) && <Styled.Body>{children || body}</Styled.Body>}
      {footer && <Styled.Footer>{footer}</Styled.Footer>}
    </Styled.Card>
  );
};
