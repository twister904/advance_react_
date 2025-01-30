import React from "react";
import UserContainer from "./UserContainer";
const Navlinks = ({ user, logout, login }) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} login={login} />
    </div>
  );
};

export default Navlinks;
