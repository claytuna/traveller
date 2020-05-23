import { DiceRollService } from "./DiceRollService";
import { RandomWordService } from "./RandomWordService";
import { MathService as MS } from "./MathService";
import {
  getSize,
  getAtmosphere,
  getTemperature,
  getHydrosphere,
  getPopulation,
  getGovernment,
  getFactions,
  getLawLevel,
  getCulture,
  getStarPort,
  getTechnology,
  getCommunications,
  getAtmosphericWarning,
  getTradeCodes,
  getTravelCode,
} from "./world-generator";

function q() {
  return MS.random(9, 0);
}

export type WorldGeneratorObject = {
  name: string;
  uwp: string;
  size: {};
  atmosphere: {};
  temperature: {};
  hydrosphere: {};
  population: {};
  governments: {};
  factions: {};
  laws: {};
  culture: {};
  starport: {};
  technologyLevel: {};
  atmosphericWarning: {};
  communications: {};
  travelCodes: {};
  tradeCodes: {}[];
};

export const TravellerWorldService = {
  generate: () => {
    const name = RandomWordService.getRandomWord().toUpperCase();
    const size = getSize(DiceRollService.roll([11]));
    const atmos = getAtmosphere(
      DiceRollService.roll([6, 6]) - 7 + size.values.digit
    );
    const temp = getTemperature(
      DiceRollService.roll([6, 6]),
      atmos.values.digit
    );
    const hydro = getHydrosphere(
      DiceRollService.roll([6, 6]) - 7 + size.values.digit,
      size.values.digit,
      atmos.values.digit,
      temp.name
    );
    const pop = getPopulation(DiceRollService.roll([6, 6]) - 2);
    const govt = getGovernment(
      DiceRollService.roll([6, 6]) - 7,
      size.values.digit,
      pop.values.digit
    );
    const factions = getFactions(
      DiceRollService.roll([3]),
      pop.values.digit,
      govt.values.digit
    );
    const law = getLawLevel(
      DiceRollService.roll([6, 6]) - 7,
      govt.values.digit
    );
    const sp = getStarPort(DiceRollService.roll([6, 6]));
    const tech = getTechnology(
      DiceRollService.roll([6]),
      sp.name,
      size.values.digit,
      atmos.values.digit,
      hydro.values.digit,
      pop.values.digit,
      govt.values.digit
    );
    const travels = getTravelCode(
      atmos.values.digit,
      tech.values.digit,
      law.values.digit
    );
    const trades = getTradeCodes(
      size.values.digit,
      atmos.values.digit,
      hydro.values.digit,
      pop.values.digit,
      govt.values.digit,
      law.values.digit,
      tech.values.digit
    );
    const S = "_";

    return {
      name: name,
      uwp: `${name}${S}${S}${q()}${q()}${q()}${q()}${S}${S}${sp.name}${
        size.name
      }${atmos.name}${hydro.name}${pop.name}${govt.name}${law.name}-${
        tech.values.digit
      } ${trades.map((o) => o.values.code).join("")}`,
      size: size,
      atmosphere: atmos,
      temperature: temp,
      hydrosphere: hydro,
      population: pop,
      governments: govt,
      factions: factions,
      laws: law,
      culture: getCulture(DiceRollService.roll([6]), DiceRollService.roll([6])),
      starport: sp,
      technologyLevel: tech,
      atmosphericWarning: getAtmosphericWarning(
        tech.values.digit,
        atmos.values.digit
      ),
      communications: getCommunications(tech.values.digit),
      travelCodes: travels,
      tradeCodes: trades,
    };
  },
};
