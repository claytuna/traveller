import React from "react";

export const Header = ({ children }: HeaderProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
  );
};

export interface HeaderProps {
  children: React.ReactNode;
}
