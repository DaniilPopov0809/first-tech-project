import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards, fetchAllUserCards } from "../../redux/operation";
import { selectUsersCard, selectPage } from "../../redux/selectors";
import UserCard from "../UserCard/UserCard";

import { List, Item } from "./UserCardList.styled";

const UserCardList = () => {
  const dispatch = useDispatch();
  const usersCard = useSelector(selectUsersCard);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchAllUserCards());
    dispatch(fetchUserCards(page));
  }, [dispatch, page]);

  return (
    <>
      <List>
        {usersCard.map((userCard) => (
          <Item key={userCard.id}>
            <UserCard userCard={userCard} />
          </Item>
        ))}
      </List>
    </>
  );
};

export default UserCardList;
