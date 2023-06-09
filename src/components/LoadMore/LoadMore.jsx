import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../../redux/usersCardSlice";
import { ButtonWrap } from "./LoadMore.styled";
import { Button } from "./LoadMore.styled";
import { selectIsLoading, selectStatusLoadMoreButton } from "../../redux/selectors";

const Scroll = require("react-scroll");

const LoadMore = () => {
  const scroll = Scroll.animateScroll;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isVisible = useSelector(selectStatusLoadMoreButton);

  const handleClick = (event) => {
    event.target.blur();
    dispatch(nextPage());
    scroll.scrollToBottom();
  };

  return (
    <ButtonWrap>
      {isVisible && <Button type="button" onClick={handleClick}>
        Load more{" "}
        {isLoading && (
          <Oval
            height={20}
            width={20}
            color="#5736a3"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ae7be3"
            strokeWidth={10}
            strokeWidthSecondary={10}
          />
        )}
      </Button> }
    </ButtonWrap>
  );
};

export default LoadMore;
