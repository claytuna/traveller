import React from "react";
import "./Card.less";

export const Card = (props: {
  body?: React.ReactNode;
  title?: React.ReactNode;
  isSecondary?: boolean;
  footer?: React.ReactNode;
}) => {
  return (
    <div className={props.isSecondary ? "card card--secondary" : "card"}>
      {props.title && <div className="card__title">{props.title}</div>}
      {props.body && <div className="card__body">{props.body}</div>}
      {props.footer && <div className="card__footer">{props.footer}</div>}
    </div>
  );
};
