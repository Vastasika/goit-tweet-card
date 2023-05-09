import { useState } from "react";

import classNames from "classnames";

import { followUser, unFollowUser } from "../../Service/UsersAPI";

import picture1x from "../../image/picture.png";
import logo1x from "../../image/logo.png";
import s from "./TweetsCard.module.css";

function TweetsCard({ user }) {
  const [folowing, setFollowing] = useState(user.followers);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing ?? false);
  const numberFormatter = new Intl.NumberFormat("en-IN");

  const getClassName = (isActive) => {
    return isActive
      ? classNames({
          [s.tweets_button]: true,
          [s.tweets__activeButton]: true,
        })
      : classNames({
          [s.tweets_button]: true,
          [s.tweets__activeButton]: false,
        });
  };

  const handleFollowing = async () => {
    setIsFollowing(true);
    setFollowing((prevState) => prevState + 1);
    await followUser(user.id, folowing + 1);
  };

  const handleUnFollowing = async () => {
    setIsFollowing(false);
    setFollowing((prevState) => prevState - 1);
    await unFollowUser(user.id, folowing - 1);
  };

  return (
    <li className={s.tweets__container}>
      <picture>
        <source srcSet={`${picture1x} `} />
        <img src={picture1x} alt="decoration background" />
      </picture>

      <picture className={s.tweets__logo}>
        <source srcSet={`${logo1x} `} />
        <img src={logo1x} alt="logo" />
      </picture>
      <div className={s.tweets__line} />
      <div className={s.tweets__avatarWrapper} />
      <img
        className={s.tweets__avatar}
        alt="user avatar"
        src={`${user.avatar}`}
      />
      <p className={s.tweets__tweetsText}>{user.tweets} Tweets</p>
      <p className={s.tweets__followers}>
        {numberFormatter.format(folowing)} followers
      </p>
      <button
        type="button"
        className={getClassName(isFollowing)}
        onClick={isFollowing ? handleUnFollowing : handleFollowing}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </li>
  );
}

export default TweetsCard;