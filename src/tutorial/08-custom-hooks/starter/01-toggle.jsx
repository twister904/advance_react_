import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(false); //using a custom hook for repeated logic in multiple components
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
