import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>useState "gotcha" {value}</h2>
      <button className='btn' onClick={handleClick} type='button'>
        Click here
      </button>
    </div>
  );
};

export default UseStateGotcha;
