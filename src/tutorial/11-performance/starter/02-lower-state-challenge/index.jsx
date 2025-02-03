import { useState } from "react";
import { data } from "../../../../data";
import NameBox from "./NameBox";
import List from "./List";
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const addPerson = (name) => {
    console.log("addperson called");
    console.log(name);
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <NameBox addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
