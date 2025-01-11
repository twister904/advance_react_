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
    const {
      id,
      avatar_url,
      login,
      url,
      company,
      location,
      followers,
      following,
      bio,
      blog,
    } = users;
    return (
      <section>
        <div key={id} className='user'>
          <a href={url}>
            <img
              src={avatar_url}
              alt={login}
              style={{ width: "150px", borderRadius: "25px" }}
            />
            <h3>{login}</h3>
          </a>
          <h5>{company}</h5>
          <p>Location: {location}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
          <p>blog: {blog}</p>
        </div>
      </section>
    );
  }
};
export default MultipleReturnsFetchData;
