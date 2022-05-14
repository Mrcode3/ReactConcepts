import React, { useState } from "react";

const Practice = () => {
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newName = e.value
    const { firstName, email } = e.target.elements;
    console.log(email.value);
    console.log(firstName.value);
    if (firstName.value && email.value) {
      setPeople([
        ...people,
        {
          id: new Date().getTime().toString(),
          name: firstName.value,
          email: email.value,
        },
      ]);

      firstName.value = null;
      email.value = null;
    } else {
      alert("missing info");
    }
  };
  console.log(people);

  return (
    <article>
      <h1>My List</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" />
        </div>
        <button type="submit">Add Person</button>
      </form>

      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <div key={id}>
            <p>
              {name} {email}
            </p>
          </div>
        );
      })}
    </article>
  );
};

export default Practice;
