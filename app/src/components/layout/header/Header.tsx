import React from "react";
import * as Styled from "./Header.styled";

export const Header = ({ children, title }: HeaderProps) => {
  return (
    <Styled.Header data-testid="Header">
      {title && <Styled.Title>{title}</Styled.Title>}
      {children}
    </Styled.Header>
  );
};

export interface HeaderProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}
