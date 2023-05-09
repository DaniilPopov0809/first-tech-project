import styled from "@emotion/styled";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const ToTop = styled(BsFillArrowUpSquareFill)`
  display: block;
  color: var(--primary-button-color);
  opacity: 0.75;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--secondary-button-color);
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 85px;
  right: 40px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
