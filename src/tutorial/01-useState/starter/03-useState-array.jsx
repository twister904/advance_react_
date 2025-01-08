import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([]);
  };
  const handleSingleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const enterDetails = (e) => {
    e.preventDefault();
    let name = e.target.elements.Name.value;
    if (name) {
      setPeople([...people, { id: people.length + 1, name }]);
      e.target.elements.Name.value = "";
    }
  };

  return (
    <div>
      <h2>useState array example</h2>
      <h3>{people.length} people in the list</h3>
      <form onSubmit={enterDetails}>
        <input type='text' name='Name'></input>
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <div>
              <button className='btn' onClick={() => handleSingleRemove(id)}>
                remove
              </button>
            </div>
          </div>
        );
      })}
      <button
        onClick={handleClick}
        className='btn'
        style={{ marginTop: "2rem" }}
      >
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
