import UserCardList from "../../components/UserCardList/UserCardList";
import BackButton from "../../components/BackLink/BackLink";
import LoadMore from "../../components/LoadMore/LoadMore";
import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import { PageWrap } from "./Tweets.styled";
import { selectStatusLoadMoreButton } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Tweets = () => {
    const isVisible = useSelector(selectStatusLoadMoreButton);
  return (
    <PageWrap>
      <BackButton />
      <UserCardList />
    {isVisible && <LoadMore/>}
      <ButtonToTop />
    </PageWrap>
  );
};

export default Tweets;
