import { useDispatch } from "react-redux";
import { nextPage } from "../../redux/usersCardSlice";
import { BlueButton } from "../UserCard/UserCards.styled";

const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <BlueButton type="button" onClick={() => dispatch(nextPage())}>
      Load more
    </BlueButton>
  );
};

export default LoadMore;
