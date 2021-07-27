import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Jack",
    age: 24,
    message: "None",
  });

  const handleClick = () => {
    setPerson({ ...person, message: "Hi, I am Jack" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message} </h3>
      <button className="btn" onClick={handleClick}>
        change messsage
      </button>
    </>
  );
};

export default UseStateObject;
