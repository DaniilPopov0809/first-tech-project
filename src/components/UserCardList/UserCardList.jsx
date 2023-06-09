import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards } from "../../redux/operation";
import { selectPage, selectVisibleCards } from "../../redux/selectors";
import UserCard from "../UserCard/UserCard";
import { List, Item, ListWrap } from "./UserCardList.styled";
import { visibleButton } from "../../redux/usersCardSlice";

const UserCardList = () => {
  const dispatch = useDispatch();
  const usersCard = useSelector(selectVisibleCards);

  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchUserCards(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (usersCard.length === 0) {
      dispatch(visibleButton(false));
    } else {
      dispatch(visibleButton(true));
    }
  }, [dispatch, usersCard.length]);

  return (
    <ListWrap>
      <List>
        {usersCard.map((userCard) => (
          <Item key={userCard.id}>
            <UserCard userCard={userCard} />
          </Item>
        ))}
      </List>
    </ListWrap>
  );
};

export default UserCardList;
