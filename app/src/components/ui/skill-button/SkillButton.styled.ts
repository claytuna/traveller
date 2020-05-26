import styled from "styled-components";
import { Group } from "../datum-group/DatumGroup.styled";

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 10px;
  ${Group} {
    padding: 0;
    margin: 0;
  }
`;

export const InlineGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1l;
`;

export const SkillButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  &[disabled] {
    border-color: ${({ theme }) => theme.gray200};
    color: ${({ theme }) => theme.gray300};
    cursor: not-allowed;
  }
`;
