import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    //do something
    const id = list[list.length - 1].id + 1;
    if (!name) {
      alert("enter the name first before submitting");
      return;
    }
    const newUser = { id: id, name: name };
    const newList = [...list, newUser];
    console.log(newList);
    setList(newList);
    console.log(list);
    setName("");
  };
  const removeItem = (id) => {
    const btnId = id;
    const newList = list.filter((person) => person.id !== btnId);
    setList(newList);
  };
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
      </form>
      <div className='form'>
        {list.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h4>
                id:{item.id} name:{item.name}
              </h4>
              <button
                className='btn'
                id={item.id}
                onClick={() => removeItem(item.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
