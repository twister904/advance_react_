import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("john");
  return (
    <div>
      {/* {if(someCondition){wont work }} */}
      <h3>Falsy AND: {text && "hello world"}</h3>
      <h3>Falsy OR: {text || "Hello world"} </h3>
      <h3>Truthy AND : {name && "Hello world"}</h3>
      <h3>Truthy OR: {name || "Hello World"}</h3>
    </div>
  );
};
export default ShortCircuitOverview;
