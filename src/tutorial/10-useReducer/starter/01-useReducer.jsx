import React, { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";
const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = React.useState(data);
  var list = data;
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearItems = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const resetItems = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(list);
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length !== 0 ? (
        <>
          {" "}
          <button
            className='btn'
            style={{ marginTop: "2rem" }}
            onClick={clearItems}
          >
            clear items
          </button>
        </>
      ) : (
        <>
          {" "}
          <button
            className='btn'
            style={{ marginTop: "2rem" }}
            onClick={resetItems}
          >
            reset
          </button>
        </>
      )}
    </div>
  );
};

export default ReducerBasics;
