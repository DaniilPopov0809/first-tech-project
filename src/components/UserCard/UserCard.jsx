import messageImg from "../../images/message.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { enableFollow, disableFollow } from "../../redux/operation";

const UserCard = ({ userCard }) => {
  const { user, tweets, avatar, followers, id } = userCard;

  const [isFollowing, setIsFollowing] = useState(
    () => JSON.parse(localStorage.getItem(`following_${id}`)) || false
  );
  const dispatch = useDispatch();

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
    <div>
      <img src={messageImg} alt="decoration" />
      <img src={avatar} alt="avatar" />
      <p>{user}</p>
      <p>{tweets.toLocaleString('en-US')} tweets</p>
      <p>{followers.toLocaleString('en-US')} followers</p>
      <button type="button" onClick={handleClick}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
