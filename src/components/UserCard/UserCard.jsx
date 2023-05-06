import messageImg from "../../images/message.png";
import logo from "../../images/Logo.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableFollow, disableFollow } from "../../redux/operation";
import PropTypes from "prop-types";
import {
  Card,
  Avatar,
  Tweet,
  Follower,
  BlueButton,
  GreenButton,
  Image,
  Line,
  AvatarWrap,
  Logo,
  InteractiveField,
} from "./UserCards.styled";

const UserCard = ({ userCard }) => {
  const { tweets, avatar, followers, id } = userCard;
  const dispatch = useDispatch();

  const [isFollowing, setIsFollowing] = useState(
    () => JSON.parse(localStorage.getItem(`following_${id}`)) || false
  );

  useEffect(() => {
    localStorage.setItem(`following_${id}`, JSON.stringify(isFollowing));
  }, [id, isFollowing]);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    if (isFollowing === false) {
      dispatch(enableFollow({ id, followers }));
    }
    if (isFollowing === true) {
      dispatch(disableFollow({ id, followers }));
    }
  };

  return (
    <Card>
      <Logo src={logo} alt="logo" />
      <Image src={messageImg} alt="decoration" />
      <Line />
      <AvatarWrap>
        <Avatar src={avatar} alt="avatar" />
      </AvatarWrap>
      <InteractiveField>
        <Tweet>{tweets.toLocaleString("en-US")} tweets</Tweet>
        <Follower>{followers.toLocaleString("en-US")} followers</Follower>
        {isFollowing ? (
          <GreenButton type="button" onClick={handleClick}>
            Following
          </GreenButton>
        ) : (
          <BlueButton type="button" onClick={handleClick}>
            Follow
          </BlueButton>
        )}
      </InteractiveField>
    </Card>
  );
};

export default UserCard;

UserCard.propTypes = {
  userCard: PropTypes.exact({
    user: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
    id: PropTypes.string,
  }),
};
