import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCards } from "../../redux/operation";

const UserCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserCards());
  }, [dispatch]);

  return <h2>UsersCardList</h2>;
};

export default UserCardList;
