import styled from "styled-components";

export const Text = styled.input<{
  onChange?: any;
  onBlur?: any;
  value?: any;
}>`
  ${({ theme }) => theme.input()}
`;
