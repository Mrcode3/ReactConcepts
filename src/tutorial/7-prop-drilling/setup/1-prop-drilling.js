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
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SingleList key={person.id} {...person} />;
      })}
    </>
  );
};

const SingleList = ({ name, id }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
    </div>
  );
};

export default PropDrilling;
