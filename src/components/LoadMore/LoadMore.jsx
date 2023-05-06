import { useDispatch } from "react-redux";
import { nextPage } from "../../redux/usersCardSlice";

const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(nextPage())}>
      Load more
    </button>
  );
};

export default LoadMore;
