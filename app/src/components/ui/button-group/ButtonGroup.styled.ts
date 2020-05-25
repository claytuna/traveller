import styled from "styled-components";

export const Group = styled.div<{
  noMargin?: boolean;
  justifyContent: string;
}>`
  display: flex;
  flex-direction: row;
  margin-left: -5px;
  margin-right: -5px;
  flex-grow: 1;
  margin: ${({ noMargin }) => (noMargin ? "0" : "10px 0")};
  justify-content: ${({ justifyContent }) => justifyContent};
  > * {
    margin: 0 5px;
  }
`;
