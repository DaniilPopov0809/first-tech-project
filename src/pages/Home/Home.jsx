import { LinkTweets, Title } from "./Home.styled";

const Home = () => {
  return (
    <Title>
      Welcome! This is a simple app for viewing user cards with tweets. Click{" "}
      <LinkTweets to="/tweets">Tweets</LinkTweets> to view application.
    </Title>
  );
};

export default Home;
