import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
    if (firstName && email) {
      console.log("submit the form");
      const newPerson = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      console.log(newPerson);
      setPeople([...people, newPerson]);
      setFirstname("");
      setEmail("");
    } else {
      alert("empty values");
    }
  };

  const handleChangeName = (e) => {
    setFirstname(e.target.value);
  };
  const handleChangeEmail = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  return (
    <>
      <article>
        <h1>My List</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Please enter your full name here."
              value={firstName}
              onChange={handleChangeName}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="123@mail.com"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
