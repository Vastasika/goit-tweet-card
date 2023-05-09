import { useEffect, useState } from "react";


import { getUsers } from "./Service/UsersAPI";

import Loader from "./components/Loader/Loader";
import TweetsList from "./components/TweetsList/TweetsList";
import s from "./components/TweetsList/TweetsList.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getUsers(page);
      setUsers([...users, ...data]);
      setIsLoading(false);
    })();
    // eslint-disable-next-line
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (!users.length) {
    return <Loader />;
  } else {
    return (
      <>
        <div className={s.linkWrapper}>
        </div>
        <TweetsList users={users} />
        {isLoading && <Loader />}
        <button
          type="button"
          className={s.tweets__button}
          onClick={handleLoadMore}
          disabled={page === 3}
        >
          Load more
        </button>
      </>
    );
  }
}

export default App;
