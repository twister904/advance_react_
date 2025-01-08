import { useState } from "react";
const UseStateBasics = () => {
  const [val, setVal] = useState(0);
  function handleClick() {
    setVal(val === 0 ? 1 : 0);
  }
  return (
    <div>
      <h2> {val === 0 ? "👎" : "👍"} </h2>
      <button className='btn' onClick={handleClick}>
        click to {val === 0 ? "Like " : "Dislike "}
      </button>
    </div>
  );
};

export default UseStateBasics;
