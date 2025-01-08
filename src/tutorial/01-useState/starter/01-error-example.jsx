const ErrorExample = () => {
  let val = 0;
  function updateValue() {
    val = val + 1;
    console.log(val);
    return val;
  }
  return (
    <div>
      <h2>Count: {val}</h2>
      <button
        onClick={() => {
          updateValue();
        }}
        className='btn'
      >
        click to increase count
      </button>
    </div>
  );
};

export default ErrorExample;
