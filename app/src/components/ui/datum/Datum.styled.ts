import styled from "styled-components";

export const Datum = styled.span<{ isUpdated?: boolean }>`
  ${({ isUpdated }) =>
    isUpdated &&
    `animation-duration: 0.7s;
  	animation-name: highlight;
  	font-weight: bold;`}

  @keyframes highlight {
    from {
      background-color: ${({ theme }) => theme.vidris20};
    }
    to {
      background-color: transparent;
    }
  }
`;
