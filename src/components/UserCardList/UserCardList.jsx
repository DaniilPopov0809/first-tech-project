import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards } from "../../redux/operation";
import { selectPage, selectVisibleCards, selectFilter } from "../../redux/selectors";
import UserCard from "../UserCard/UserCard";

import { List, Item } from "./UserCardList.styled";

const UserCardList = () => {
  const dispatch = useDispatch();
  const usersCard = useSelector(selectVisibleCards);
 
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);
 

  useEffect(() => {
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
