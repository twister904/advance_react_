import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "coding",
    id: 0,
  });

  const displayPerson = () => {
    if (
      person.id == 0
        ? setPerson({ name: "john", age: 25, hobby: "read book", id: 1 })
        : setPerson({ name: "peter", age: 24, hobby: "coding", id: 0 })
    );
  };

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h4>Enjoys to: {person.hobby} </h4>
      <button className='btn' onClick={displayPerson}>
        {" "}
        show Next{" "}
      </button>
    </>
  );
};

export default UseStateObject;
