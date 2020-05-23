import React from "react";
import { Datum } from "../";
import { DatumProps } from "../datum/Datum";
import "./DatumGroup.less";

export const DatumGroup = ({ title, value, ...rest }: DatumGroupProps) => {
  return (
    <p className="datum-group" title={title + ":" + (value || "")}>
      <span className="datum-group__title">{title}</span>:{" "}
      {value && <Datum {...rest} value={value} />}
    </p>
  );
};

export interface DatumGroupProps extends DatumProps {
  title: string | number;
  value?: string | number;
}
