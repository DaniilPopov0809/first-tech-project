import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards } from "../../redux/operation";
import { selectUsersCard } from "../../redux/selectors";
import UserCard from "../UserCard/UserCard";

const UserCardList = () => {
  const dispatch = useDispatch();
  const usersCard = useSelector(selectUsersCard);
  
  useEffect(() => {
    dispatch(fetchUserCards());
  }, [dispatch]);

  return (
   
    <ul>
      {usersCard.map(userCard => (
        <li key={userCard.id}>
          <UserCard userCard={userCard}/>
        </li>
      ))}
      
    </ul>
  );
};

export default UserCardList;
