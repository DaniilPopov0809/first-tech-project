import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards } from "../../redux/operation";
import { selectUsersCard, selectPage } from "../../redux/selectors";
import UserCard from "../UserCard/UserCard";
import LoadMore from "../LoadMore/LoadMore";

const UserCardList = () => {
  const dispatch = useDispatch();
  const usersCard = useSelector(selectUsersCard);
  const page = useSelector(selectPage);

  useEffect(() => {
    console.log('I WORK');
    dispatch(fetchUserCards(page));
  }, [dispatch, page]);

  return (
    <>
      <ul>
        {usersCard.map((userCard) => (
          <li key={userCard.id}>
            <UserCard userCard={userCard} />
          </li>
        ))}
      </ul>
      <LoadMore />
    </>
  );
};

export default UserCardList;
