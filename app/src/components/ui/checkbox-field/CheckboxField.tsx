import React from "react";
import uniqueId from "lodash/uniqueId";

export const CheckboxField = ({
  text,
  id: idProp,
  onUpdate,
  formName,
  fieldName,
  value,
  ...rest
}: CheckboxFieldProps) => {
  const id = idProp || uniqueId();

  return (
    <>
      <label
        {...rest}
        onClick={
          onUpdate ? () => onUpdate({ formName, fieldName, value }) : undefined
        }
        htmlFor={id}
      />
      <input type="checkbox" id={id} />
      {text}
    </>
  );
};

export interface CheckboxFieldProps {
  text?: React.ReactNode;
  id?: string;
  onUpdate?: ({
    formName,
    fieldName,
    value,
  }: {
    formName?: string;
    fieldName?: string;
    value?: string | number;
  }) => void;
  formName?: string;
  fieldName?: string;
  value?: string | number;
}
