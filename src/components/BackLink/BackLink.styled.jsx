import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  display: inline-block;
  padding: 14px 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.05;
    background: #5cd3a8;
  }
`;
