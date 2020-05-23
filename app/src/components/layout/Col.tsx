import React from "react";
import { Col as BsCol, ColProps } from "react-bootstrap";

export const Col = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ColProps) => {
  return <BsCol {...props}>{children}</BsCol>;
};
