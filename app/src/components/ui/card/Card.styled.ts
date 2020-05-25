import styled from "styled-components";

const cardPad = "10px";
const cardPadLight = "5px 8px";
const cardBorder = "1px solid rgba(0,0,0,.89)";
const cardBorderSecondary = "1px solid rgba(0,0,0,.34)";

export const Card = styled.div<{ isSecondary?: boolean }>`
  border: ${cardBorder};
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;

  ${({ isSecondary }) =>
    isSecondary &&
    `
	border: ${cardBorderSecondary};
	${Title} {
		background-color: rgba(0,0,0,.1);
		border-bottom: ${cardBorderSecondary};
		padding: ${cardPadLight};
	}
	${Footer} {
		border-top: ${cardBorderSecondary};
		padding: ${cardPadLight};
	}
	`}
`;

export const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom: ${cardBorder};
  padding: 8px ${cardPad};
  p {
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  padding: ${cardPad};
`;

export const Footer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-top: ${cardBorder};
  padding: ${cardPad};
`;
