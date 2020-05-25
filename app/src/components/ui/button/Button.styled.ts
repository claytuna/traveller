import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button<{ priority?: string }>`
  ${({ theme }) => `
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
	inset 0 -1px 0 rgba(0, 0, 0, 0.5);
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	font-size:1rem;
	height: 34px;
	line-height: 34px;
	padding: 0 15px;
	text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
	text-transform: uppercase;
	transition: background-color 0.1s ease;
	letter-spacing: 0.025rem;
	margin-bottom: ${theme.units(2)};

	&:hover, &:focus {
		color: ${theme.white};
	}

	&[disabled] {
		background-color: ${theme.gray};
	}
	`}

  ${({ priority, theme }) => {
    switch (priority) {
      case "secondary":
        return ` background-color: ${theme.secondaryMain};
		color:${theme.secondaryContrastText};
		&:hover, &:focus { background-color: ${darken(0.03, theme.secondaryMain)};  }`;

      case "tertiary":
        return ` background-color: ${theme.tertiaryMain};
		color:${theme.tertiaryContrastText};
		&:hover, &:focus { background-color: ${darken(0.03, theme.tertiaryMain)}; }`;
    }

    return ` background-color:${theme.primaryMain};
		color:${theme.primaryContrastText};
		&:hover, &:focus { background-color: ${darken(0.03, theme.primaryMain)};  }`;
  }}

  &[disabled] {
    background-color: ${({ theme }) => theme.gray};
    color: #333;
    cursor: not-allowed;
  }
`;
