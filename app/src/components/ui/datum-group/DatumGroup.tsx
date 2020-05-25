import React from "react";
import { Datum } from "../";
import { DatumProps } from "../datum/Datum";
import { Title, Group } from "./DatumGroup.styled";

export const DatumGroup = ({ title, value, ...rest }: DatumGroupProps) => {
  return (
    <Group data-testid="DatumGrouGroup">
      <Title>{title}</Title>: {value && <Datum {...rest} value={value} />}
    </Group>
  );
};

export interface DatumGroupProps extends DatumProps {
  title: string | number;
  value?: string | number;
}
