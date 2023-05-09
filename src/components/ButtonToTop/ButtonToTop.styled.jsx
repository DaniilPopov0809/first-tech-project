import styled from "@emotion/styled";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const ToTop = styled(BsFillArrowUpSquareFill)`
  display: block;
  color: #ebd8ff;
  opacity: 0.75;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
