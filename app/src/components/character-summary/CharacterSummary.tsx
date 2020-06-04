import React, { useContext } from "react";
import { StatKeys } from "../../constants";
import { StateContext } from "../../App";
import * as Styled from "./CharacterSummary.styled";

export const CharacterSummary = () => {
  const { characterCreation } = useContext(StateContext);
  const { stats } = characterCreation;
  return (
    <Styled.Wrapper>
      {stats !== undefined &&
        (Object.keys(stats) as StatKeys[]).map((statKey) => {
          const foundKey = stats[statKey];
          return (
            <p key={statKey}>
              {statKey}: {foundKey.value} ({foundKey.modifier})
            </p>
          );
        })}
    </Styled.Wrapper>
  );
};
