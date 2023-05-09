import styled from "@emotion/styled";
import { BlueButton } from "../UserCard/UserCards.styled";

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(BlueButton)`
  margin-bottom: 0;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background: #5cd3a8;
  }
`;
