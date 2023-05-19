import messageImg from "../../images/message.png";
import logo from "../../images/logo.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableFollow, disableFollow } from "../../redux/operation";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
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
  User,
} from "./UserCards.styled";
import { filterStore } from "../../services/utils";

const UserCard = ({ userCard }) => {
  const { tweets, avatar, followers, id, user } = userCard;
  const store = JSON.parse(localStorage.getItem(`following`));

  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(() => filterStore(store, id));
  const [stateFollowing, setStateFollowing] = useState(() => store || []);

  useEffect(() => {
    localStorage.setItem(`following`, JSON.stringify(stateFollowing));
  }, [id, isFollowing, stateFollowing, dispatch]);

  const handleClick = () => {
    setStateFollowing(store);
    setIsFollowing(!isFollowing);
    if (isFollowing === false) {
      dispatch(enableFollow({ id, followers }));
      setStateFollowing((pervState) => [...pervState, ...id]);
      toast.info(`You following ${user}!`);
    }
    if (isFollowing === true) {
      dispatch(disableFollow({ id, followers }));
      setStateFollowing((pervState) => pervState.filter((el) => el !== id));
      toast.info(`You unfollowing ${user}!`);
    }
  };

  return (
    <Card>
      <Logo src={logo} alt="logo" />
      <Image src={messageImg} alt="decoration" />
      <Line />
      <AvatarWrap>
        <Avatar src={avatar} alt="avatar" width={62} />
      </AvatarWrap>
      <InteractiveField>
        <User>{user}</User>
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
    isFollowing: PropTypes.bool,
  }),
};
