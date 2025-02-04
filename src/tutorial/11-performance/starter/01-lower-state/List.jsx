import Person from "./Person";
import { memo } from "react";
const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <Person {...person} removePerson={removePerson} />
          </div>
        );
      })}
    </div>
  );
};
export default memo(List);
