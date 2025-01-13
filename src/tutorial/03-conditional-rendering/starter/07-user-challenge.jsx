import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const loggedOut = () => {
    setUser(null);
  };
  const loggedIn = () => {
    //  normally connect to db or api
    setUser({ name: "Naruto Uzumaki the 9 tailed jinchuriki" });
  };
  const InKonoha = () => {
    return (
      <div style={{ backgroundColor: "orange" }}>
        <h2>Hello {user.name}</h2>
        <p>Welcome to Konoha The hidden leaf village</p>
        <button onClick={loggedOut} className='btn'>
          Press this button for the mission
        </button>
      </div>
    );
  };
  const OnMission = () => {
    return (
      <div style={{ backgroundColor: "Yellow" }}>
        <h2>Now You are on mission</h2>
        <p>You will be Hokage one day</p>
        <button onClick={loggedIn} className='btn'>
          Press this button for get back to Konoha
        </button>
      </div>
    );
  };
  return <div>{user ? <InKonoha /> : <OnMission />}</div>;
};

export default UserChallenge;
