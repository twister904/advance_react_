import { useState } from "react";
const ToggleChallenge = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <h2 className='alert' style={{ color: "Blue" }}>
      Hello Mazhar you are doing great!keep doing it
    </h2>
  );
};

export default ToggleChallenge;
