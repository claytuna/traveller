import styled from "styled-components";

export const Group = styled.div<{ noMargin?: boolean }>`
  display: flex;
  flex-direction: row;
  margin-left: -5px;
  margin-right: -5px;
  flex-grow: 1;
  margin: ${({ noMargin }) => (noMargin ? "0" : "10px 0")};
  > * {
    margin: 0 5px;
  }
`;
