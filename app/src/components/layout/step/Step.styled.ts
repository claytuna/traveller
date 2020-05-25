import styled from "styled-components";

export const Step = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
export const Body = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.units(2)};
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  border-bottom: 1px dotted;
  font-weight: bold;
  padding: ${({ theme }) => theme.units(2)};
  font-size: 1rem;
`;

export const Footer = styled.div`
  position: fixed;
  background-color: white;
  bottom: 0;
  border-top: 1px dotted;
  display: flex;
  align-items: center;
  height: 80px;
  padding: ${({ theme }) => theme.units(2)};
  width: 100%;
`;
