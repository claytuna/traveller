import styled from "styled-components";

export const Step = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Row = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.units(2)};
`;

export const Title = styled.h2`
  border-bottom: 1px dotted;
  font-weight: bold;
  padding: ${({ theme }) => theme.units(2)};
  font-size: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-grow: 1;
  border-top: 1px dotted;
  max-height: 50px;
`;
