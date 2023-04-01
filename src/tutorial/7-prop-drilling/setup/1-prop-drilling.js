import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const remove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} remove={remove} />
    </section>
  );
};

const List = ({ people, remove }) => {
  return (
    <>
      {people.map((person) => {
        return <SingleList key={person.id} {...person} remove={remove} />;
      })}
    </>
  );
};

const SingleList = ({ name, id, remove }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" onClick={() => remove(id)}>
        reomove
      </button>
    </div>
  );
};

export default PropDrilling;
