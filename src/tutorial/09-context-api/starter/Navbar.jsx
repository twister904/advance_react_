import React from "react";
import { useState } from "react";
import Navlinks from "./Navlinks";
const Navbar = () => {
  const [user, setUser] = useState("Mazhar Saifi");
  const logout = () => {
    setUser(null);
  };
  const login = (name) => {
    setUser(name);
  };
  return (
    <nav className='navbar'>
      <h5>Context API</h5>
      <Navlinks user={user} logout={logout} login={login} />
    </nav>
  );
};

export default Navbar;
