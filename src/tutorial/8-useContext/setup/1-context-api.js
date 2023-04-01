import React, { useState, useContext } from "react";
import { data } from "../../../data";
import SinglePerson from "./singlePerson";
// import PeopleContext from "./peopleContext";

// more components
// fix - context api, redux (for more complex cases)
//useContext hook makes it easy to pass data throughout your app without
//manually passing props down the tree.

export const PeopleContext = React.createContext();

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

export default ContextAPI;
