import { useState, createContext, useContext } from "react";
import Navlinks from "./Navlinks";

export const NavbarContext = createContext();

export const useAppContext = () => {
  return useContext(NavbarContext);
};
const Navbar = () => {
  const [user, setUser] = useState("Mazhar Saifi");
  const logout = () => {
    setUser(null);
  };
  const login = (name) => {
    setUser(name);
  };
  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className='navbar'>
        <h5>Context API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
