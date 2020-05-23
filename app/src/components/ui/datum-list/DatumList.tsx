import React from "react";
import { Datum } from "../";
import { Value } from "../datum/Datum";
import "./DatumList.less";

export const DatumList = ({ title, values, ...rest }: DatumListProps) => {
  return (
    <ul className="datum-list" {...rest}>
      {title && (
        <li className="datum-list__title">
          <p title={title}>{title}</p>
        </li>
      )}
      {Array.isArray(values) &&
        values.map((v: Value, index: number) => (
          <li key={index}>
            <Datum value={v} />
          </li>
        ))}
    </ul>
  );
};

export interface DatumListProps {
  title?: string;
  values?: Value[];
}
