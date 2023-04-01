import React, { useContext } from "react";
import { PeopleContext } from "./1-context-api";

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PeopleContext);
  return (
    <div className="item">
      <h3>{id}</h3>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default SinglePerson;
