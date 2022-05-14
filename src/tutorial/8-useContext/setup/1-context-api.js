import React, { useState, useContext } from "react";
import { data } from "../../../data";
import SinglePerson from "./singlePerson";
import PeopleContext from "./peopleContext";

// more components
// fix - context api, redux (for more complex cases)
//useContext hook makes it easy to pass data throughout your app without
//manually passing props down the tree.

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PeopleContext.Provider value={{ removePerson, people }}>
      <h3>Context API</h3>
      <List />
    </PeopleContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PeopleContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

// const SinglePerson = ({ id, name }) => {
//   const { removePerson } = useContext(PersonContext);
//   return (
//     <div className="item">
//       <h3>{id}</h3>
//       <h4>{name}</h4>
//       <button onClick={() => removePerson(id)}>remove</button>
//     </div>
//   );
// };

export default ContextAPI;
