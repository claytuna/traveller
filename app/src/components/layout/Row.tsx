import React from "react";
import { Row as BsRow, RowProps } from "react-bootstrap";

export const Row = ({
  children,
  ...props
}: { children: React.ReactNode } & RowProps) => {
  return <BsRow {...props}>{children}</BsRow>;
};
