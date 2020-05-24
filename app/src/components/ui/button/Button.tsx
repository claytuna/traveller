import React from "react";
import "./Button.less";

export const Button = ({
  children,
  text,
  priority,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`btn btn--${priority || "primary"}`}
      type={type || "button"}
      {...rest}
    >
      {children || text || "Click here"}
    </button>
  );
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  priority?: "primary" | "secondary" | "tertiary";
  text?: React.ReactNode;
}
