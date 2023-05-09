import styled from "@emotion/styled";

export const ListWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (max-width: 1279px) {
    gap: 8px;
  }
`;

export const Item = styled.li``;
