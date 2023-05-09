import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  gap: 30px;
  padding: 12px 0;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 32px;
  color: #373737;
  font-weight: 600;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  &:hover,
  &:focus {
    color: #fff;
  }

  &.active {
    text-decoration: underline;
    color: #fff;    
  }
`;
