import React, { useCallback } from "react";
import "./TextField.less";

export const TextField = ({
  onUpdate,
  formName,
  fieldName,
  value,
  ...rest
}: TextFieldProps) => {
  const handleChange = useCallback(
    (event) => {
      onUpdate && onUpdate({ formName, fieldName, value: event.target.value });
    },
    [formName, fieldName, onUpdate]
  );
  return (
    <input
      className="text-field"
      defaultValue={value}
      type="text"
      onChange={handleChange}
      onBlur={handleChange}
      {...rest}
    />
  );
};

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
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
}
