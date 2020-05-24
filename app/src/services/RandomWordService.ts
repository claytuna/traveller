import { MathService as MS } from "./MathService";
import sortBy from "lodash/sortBy";
import filter from "lodash/filter";
import flatMap from "lodash/flatMap";
import concat from "lodash/concat";
import startsWith from "lodash/startsWith";
import endsWith from "lodash/endsWith";

import {
  PHONEMES,
  VOWELS,
  START_LETTERS,
  END_LETTERS,
  INNER_LETTERS,
  WORD_LENGTHS,
  // LetterObject,
  PhonemeObject,
  PhonemeSubTypes,
} from "./random-word/constants";

/**
 * WIP: This totally does not work. Naive approach to random name generator.
 */
export const RandomWordService = {
  getRandomWord: () => {
    var wLength = RandomWordService.getWordLength(MS.random(14751, 0));
    var word = "";
    var phDelta = 1;

    while (word.length < wLength) {
      if (word.length !== 0 && wLength - word.length <= 2) {
        word =
          word +
          grapheme(
            RandomWordService.getEndingPhoneme(MS.random(12702, 0)),
            false
          );
      }

      if (word.length !== 0 && wLength - word.length > 2) {
        var vowels = ["a", "e", "i", "o", "u"];
        var inner =
          phDelta === 1
            ? RandomWordService.getRandom(vowels)
            : RandomWordService.getInnerPhoneme(MS.random(12702, 0));
        word = word + grapheme(inner);
        phDelta = phDelta === 0 ? 1 : 0;
      }

      if (word.length === 0) {
        word =
          word +
          grapheme(RandomWordService.getStartingPhoneme(MS.random(14751, 0)));
      }
    }

    return word;

    function grapheme(letter: string, start = true) {
      return RandomWordService.getRandom(
        RandomWordService.getGraphemeByLetter(letter, start)
      );
    }
  },

  getWordLength: (wValue: number): number => {
    return RandomWordService.freqFilter(
      RandomWordService.getWordLengths(),
      14751,
      wValue
    ).value;
  },

  getStartingPhoneme: (wValue: number): string => {
    return RandomWordService.freqFilter(START_LETTERS, 16671, wValue).value;
  },

  getInnerPhoneme: (wValue: number): string => {
    return RandomWordService.freqFilter(INNER_LETTERS, 12702, wValue).value;
  },

  getEndingPhoneme: (wValue: number): string => {
    return RandomWordService.freqFilter(END_LETTERS, 19170, wValue).value;
  },

  isConsonantOrVowel: (letter: string) => {
    return VOWELS.indexOf(letter) !== -1 ? "VOWEL" : "CONSONANT";
  },

  freqFilter: (
    values: { value: any; weight: any }[],
    maxWeightVal: number,
    weightVal?: number
  ): { value: any; weight: any } => {
    if (
      weightVal &&
      (weightVal < 0 || weightVal > maxWeightVal || isNaN(weightVal))
    )
      return { value: 0, weight: 0 };
    //@ts-ignore
    return sortBy(
      filter(values, (o: { value: any; weight: any }) => {
        return weightVal && o.weight >= weightVal;
      }),
      "weight"
    )[0];
  },

  getGraphemeByLetter: (letter: string, isStart = true) => {
    return filter(
      flatMap(getGroups(letter), (o) => {
        return o.values.graphemes;
      }),
      (str: string) => {
        return startOrEnd(str);
      }
    );

    function startOrEnd(str: string) {
      return isStart ? startsWith(str, letter) : endsWith(str, letter);
    }

    function getGroups(l: string) {
      if (RandomWordService.isConsonantOrVowel(l) === "VOWEL") {
        return concat(
          RandomWordService.getPhonemesBySubtype("VOWEL"),
          RandomWordService.getPhonemesBySubtype("VOWELR")
        );
      } else {
        return concat(
          RandomWordService.getPhonemesBySubtype("CONSONANT"),
          RandomWordService.getPhonemesBySubtype("DIGRAPH")
        );
      }
    }
  },

  getRandomVowel: () => {
    return RandomWordService.getRandom(
      concat(
        RandomWordService.getPhonemesBySubtype("VOWEL"),
        RandomWordService.getPhonemesBySubtype("VOWELR")
      )
    );
  },

  getRandomConsonant: () => {
    return RandomWordService.getRandom(
      concat(
        RandomWordService.getPhonemesBySubtype("CONSONANT"),
        RandomWordService.getPhonemesBySubtype("DIGRAPH")
      )
    );
  },

  getRandomDigraph: () => {
    return RandomWordService.getRandom(
      RandomWordService.getPhonemesBySubtype("DIGRAPH")
    );
  },

  getRandom: (arr: any[]) => {
    return arr[MS.random(arr.length, 0)];
  },

  getPhoneme: (subtype: PhonemeSubTypes, id: number) => {
    return filter(
      RandomWordService.getPhonemesBySubtype(subtype),
      (o: PhonemeObject) => {
        if (o.id === id) return o;
      }
    )[0];
  },

  getPhonemesBySubtype: (subtype: PhonemeSubTypes): PhonemeObject[] => {
    return filter(
      RandomWordService.getPhonemes(),
      (o: PhonemeObject) => o.values.subtype === subtype
    );
  },

  getWordLengths: () => {
    return WORD_LENGTHS;
  },

  getPhonemes: () => {
    return PHONEMES;
  },
};
