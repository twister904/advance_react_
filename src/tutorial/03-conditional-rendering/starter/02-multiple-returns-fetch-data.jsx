import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUser] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              setError(true);
              setIsLoading(false);
              return;
            }
            const data = await response.json();
            setUser(data);
          } catch (error) {
            setError(true);
            console.log(error);
          }
          setIsLoading(false);
        };
        fetchData();
      }
    }, 3000);
  }, []);
  if (isLoading) {
    return <h2>Fetching Data....Please wait 👀👀👀 </h2>;
  } else if (error) {
    return <h2>Error...</h2>;
  } else {
    return (
      <section>
        <div key={users.id} className='user'>
          <a href={users.url}>
            <img
              src={users.avatar_url}
              alt={users.login}
              style={{ width: "150px", borderRadius: "25px" }}
            />
            <h3>{users.login}</h3>
          </a>
          <h5>{users.company}</h5>
          <p>Location: {users.location}</p>
          <p>Followers: {users.followers}</p>
          <p>Following: {users.following}</p>
          <p>Bio: {users.bio}</p>
          <p>blog: {users.blog}</p>
        </div>
      </section>
    );
  }
};
export default MultipleReturnsFetchData;
