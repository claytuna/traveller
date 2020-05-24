import { StarPortCodes, TECHNOLOGIES } from "../../constants";

export const getTechnology = (
  roll: number,
  starportName: StarPortCodes,
  sizeVal: number,
  atmosVal: number,
  hydroVal: number,
  popVal: number,
  govtVal: number
) => {
  let total = roll;

  /*starport modifiers*/
  if (starportName === "A") total = total + 6;
  if (starportName === "B") total = total + 4;
  if (starportName === "C") total = total + 2;
  if (starportName === "X") total = total - 4;

  /*size modifiers*/
  if (sizeVal <= 1) total = total + 2;
  if (sizeVal >= 2 && sizeVal <= 4) total = total + 1;

  /*atmosphere modifiers*/
  if (atmosVal <= 3) total = total + 1;
  if (atmosVal >= 10) total = total + 1;

  /*hydrology modifiers*/
  if (hydroVal === 0) total = total + 1;
  if (hydroVal === 9) total = total + 1;
  if (hydroVal === 10) total = total + 2;

  /*population modifiers*/
  if (popVal >= 1 && popVal <= 5) total = total + 1;
  if (popVal === 9) total = total + 1;
  if (popVal === 10) total = total + 2;
  if (popVal === 11) total = total + 3;
  if (popVal === 12) total = total + 4;

  /*government modifiers*/
  if (govtVal === 0) total = total + 1;
  if (govtVal === 5) total = total + 1;
  if (govtVal === 7) total = total + 2;
  if (govtVal === 13) total = total - 2;
  if (govtVal === 14) total = total - 2; /*technically impossible?*/

  if (total <= 0) return TECHNOLOGIES[0];
  if (total >= 15) return TECHNOLOGIES[15];

  return TECHNOLOGIES[total];
};
