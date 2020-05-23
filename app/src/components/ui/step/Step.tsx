import React from "react";
import "./Step.less";

export const Step = ({ children, content, title, subtitle }: StepProps) => {
  return (
    <div className="step">
      <p className="step__title">{title || ""}</p>
      {subtitle && <p className="step__subtitle">{subtitle}</p>}
      {children || content}
    </div>
  );
};

export interface StepProps {
  children: React.ReactNode;
  content: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}
