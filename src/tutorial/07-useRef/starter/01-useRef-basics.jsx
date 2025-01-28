import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    refContainer.current.focus(); // to focus the input field after the component is mounted/rendered
  });
  useEffect(() => {
    if (!isMounted.current) {
      //use to avoid the functionality in initial rendering
      isMounted.current = true;
      return;
    }
    console.log("re-rendering");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value; //to get the value of the input field
    console.log(name);
    setValue(""); // to set the value to empty after submit
    e.target.reset(); // to clear the input field of the form after submit
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='form-input'
            ref={refContainer}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
