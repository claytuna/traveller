import React from "react";
import "./ContainerTitle.less";

export const ContainerTitle = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: React.ReactNode;
}) => {
  return <p className="container-title">{text || children}</p>;
};
