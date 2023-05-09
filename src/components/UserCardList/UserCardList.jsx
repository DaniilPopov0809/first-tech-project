import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards } from "../../redux/operation";
import { selectPage, selectVisibleCards } from "../../redux/selectors";
import UserCard from "../UserCard/UserCard";
import { List, Item } from "./UserCardList.styled";
// import { filterCard } from "../../redux/filterSlice";

const UserCardList = () => {
  const dispatch = useDispatch();
  const usersCard = useSelector(selectVisibleCards);
  const page = useSelector(selectPage);
  
  useEffect(() => {
    dispatch(fetchUserCards(page));
  }, [dispatch, page]);

  // useEffect(()=>{
  //   dispatch(filterCard(JSON.parse(localStorage.getItem(`filter`)))) 
  // },[dispatch])

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
