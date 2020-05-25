import React, { useCallback } from "react";
import uniqueId from "lodash/uniqueId";
import * as Styled from "./SelectField.styled";

export const SelectField = ({
  formName,
  fieldName,
  onUpdate,
  options,
  value,
  ...rest
}: SelectFieldProps) => {
  const handleChange = useCallback(
    (event) => {
      onUpdate && onUpdate({ formName, fieldName, value: event.target.value });
    },
    [formName, fieldName, onUpdate]
  );

  return (
    <Styled.Select
      value={value || options[0].value}
      onChange={handleChange}
      {...rest}
    >
      {options &&
        options.map((o) => (
          <option key={uniqueId() + o.value} value={o.value}>
            {o.text}
          </option>
        ))}
    </Styled.Select>
  );
};

export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  formName: string;
  fieldName: string;
  onUpdate: ({
    formName,
    fieldName,
    value,
  }: {
    formName: string;
    fieldName: string;
    value: string;
  }) => void;
  options: { value: string | number; text: React.ReactNode }[];
}
