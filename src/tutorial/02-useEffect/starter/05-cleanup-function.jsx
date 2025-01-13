import { useEffect, useState } from "react";
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("renders");
  return (
    <div>
      <button
        className='btn'
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm , this is useEffect console tag");
    const intId = setInterval(() => {
      console.log("hello from setInterval.....");
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log("cleanup function called...");
    };
  }, []);
  return <h1>Hello Champion</h1>;
};

export default CleanupFunction;
