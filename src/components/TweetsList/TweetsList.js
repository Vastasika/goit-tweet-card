import TweetsCard from "../TweetsCard/TweetsCard";
import s from "./TweetsList.module.css";

function TweetsList({ users }) {
  return (
    <ul className={s.tweets__list}>
      {users.map((user) => {
        return <TweetsCard key={user.id} user={user} />;
      })}
    </ul>
  );
}

export default TweetsList;