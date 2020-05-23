import React from "react";
import "./FieldGroup.less";

export const FieldGroup = ({ label, children, ...rest }: FieldGroupProps) => {
  return (
    <div className="field-group" {...rest}>
      {label && <label htmlFor="">{label}</label>}
      {children}
    </div>
  );
};

export interface FieldGroupProps {
  children: React.ReactNode;
  label: React.ReactNode;
}
