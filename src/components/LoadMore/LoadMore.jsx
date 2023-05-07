import { useDispatch } from "react-redux";
import { nextPage } from "../../redux/usersCardSlice";
import { ButtonWrap } from "./LoadMore.styled";
import { Button } from "./LoadMore.styled";
const Scroll = require("react-scroll");

const LoadMore = () => {
  const scroll = Scroll.animateScroll;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nextPage());

    scroll.scrollToBottom();
  };

  return (
    <ButtonWrap>
      <Button type="button" onClick={handleClick}>
        Load more
      </Button>
    </ButtonWrap>
  );
};

export default LoadMore;
