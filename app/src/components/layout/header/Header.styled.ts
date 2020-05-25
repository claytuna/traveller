import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  max-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > * {
    flex-grow: 1;
    align-self: center;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  margin: 0;
  padding: ${({ theme }) => theme.units(2)};
  min-width
`;
