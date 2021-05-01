import React, { useState, useEffect } from "react";
import { usePrevious } from "../../../hooks";
import * as Styled from "./Datum.styled";

export type Value = number | string;

function numberWithCommas(value: Value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function doNormalValue(hasComma: boolean | undefined, value: Value) {
  return hasComma ? numberWithCommas(value) : value;
}

function doIncrement(value: Value) {
  return numberWithCommas(value);
}

function getDatumValue(
  hasComma: boolean | undefined,
  isCountable: boolean | undefined,
  value: Value
) {
  return isCountable ? doIncrement(value) : doNormalValue(hasComma, value);
}

export const Datum = ({
  value: valueProp,
  hasComma,
  isCountable,
}: DatumProps) => {
  const prevValue = usePrevious<number>(
    typeof valueProp === "number" ? valueProp : 0
  );
  const [isUpdated, setUpdated] = useState(false);
  const [value, setValue] = useState<number>();

  /* highlight on update effect */
  useEffect(() => {
    let highlightTimeout: NodeJS.Timeout | undefined = undefined;
    setUpdated(true);
    highlightTimeout = setTimeout(() => {
      setUpdated(false);
    }, 500);

    return () =>
      highlightTimeout ? clearTimeout(highlightTimeout) : undefined;
  }, [valueProp]);

  /* incremental counting effect */
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    if (isCountable) {
      if (
        value !== valueProp &&
        valueProp !== undefined &&
        typeof valueProp !== "string"
      ) {
        interval && clearInterval(interval);
        const INT = Math.abs((prevValue || 0) - valueProp) >= 100 ? 2 : 20;
        const val = value || 0;
        interval = setInterval(() => {
          val < valueProp && setValue(val + 1);
          val > valueProp && setValue(val - 1);
        }, INT);

        val === valueProp && clearInterval(interval);
      }
    }
    return () => (interval ? clearInterval(interval) : undefined);
  }, [value, valueProp, isCountable, prevValue]);

  return (
    <>
      {valueProp !== undefined ? (
        <Styled.Datum data-testid="Datum" isUpdated={isUpdated}>
          {getDatumValue(hasComma, isCountable, value ? value : valueProp)}
        </Styled.Datum>
      ) : (
        "None"
      )}
    </>
  );
};

export interface DatumProps {
  hasComma?: boolean;
  isCountable?: boolean;
  value?: Value;
}
