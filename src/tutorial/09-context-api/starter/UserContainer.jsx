import { useState } from "react";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout, login } = useAppContext();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const value = name;
    console.log(value);
    setName("");
    login(value);
  };
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>{user}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='btn' type='submit'>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default UserContainer;
