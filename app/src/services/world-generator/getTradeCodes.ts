import { DataObject } from "../../";
import { TradeCodeKeys, TRADE_CODES } from "../../constants";

export const getTradeCodes = (
  sizeVal: number,
  atmosVal: number,
  hydroVal: number,
  popVal: number,
  govtVal: number,
  lawLevel: number,
  techLevel: number
) => {
  var result = [];

  if (
    atmosVal >= 4 &&
    atmosVal <= 9 &&
    hydroVal >= 4 &&
    hydroVal <= 8 &&
    popVal >= 5 &&
    popVal <= 7
  )
    result.push(TRADE_CODES[0]);
  if (sizeVal === 0 && atmosVal === 0 && hydroVal === 0)
    result.push(TRADE_CODES[1]);
  if (popVal === 0 && govtVal === 0 && lawLevel === 0)
    result.push(TRADE_CODES[2]);
  if (atmosVal >= 2 && hydroVal === 0) result.push(TRADE_CODES[3]);
  if (atmosVal >= 10 && hydroVal === 1) result.push(TRADE_CODES[4]);
  if (
    sizeVal >= 5 &&
    atmosVal >= 4 &&
    atmosVal <= 9 &&
    hydroVal >= 4 &&
    hydroVal <= 9
  )
    result.push(TRADE_CODES[5]);
  if (popVal >= 9) result.push(TRADE_CODES[6]);
  if (techLevel >= 12) result.push(TRADE_CODES[7]);
  if (atmosVal <= 1 && hydroVal >= 1) result.push(TRADE_CODES[8]);
  if (
    atmosVal === 0 ||
    atmosVal === 1 ||
    atmosVal === 2 ||
    atmosVal === 4 ||
    atmosVal === 7 ||
    atmosVal === 9
  ) {
    if (popVal >= 9) result.push(TRADE_CODES[9]);
  }
  if (popVal >= 1 && popVal <= 3) result.push(TRADE_CODES[10]);
  if (techLevel <= 5) result.push(TRADE_CODES[11]);
  if (
    atmosVal >= 0 &&
    atmosVal <= 3 &&
    hydroVal >= 0 &&
    hydroVal <= 3 &&
    popVal >= 6
  )
    result.push(TRADE_CODES[12]);
  if (popVal >= 4 && popVal <= 6) result.push(TRADE_CODES[13]);
  if (atmosVal >= 2 && atmosVal <= 5 && popVal >= 0 && popVal <= 3)
    result.push(TRADE_CODES[14]);
  if (atmosVal === 6 || atmosVal === 8) {
    if (popVal >= 6 && popVal <= 8) result.push(TRADE_CODES[15]);
  }
  if (hydroVal === 10) result.push(TRADE_CODES[16]);
  if (atmosVal === 0) result.push(TRADE_CODES[17]);

  return result;
};
