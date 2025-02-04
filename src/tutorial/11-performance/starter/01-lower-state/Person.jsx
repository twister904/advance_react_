import { useEffect } from "react";

const Person = ({ name, removePerson, id }) => {
  console.log("render");
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  return (
    <div>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
