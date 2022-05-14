import React, { useState } from "react";
import { data } from "../../../data";

const Practice = () => {
  //p1 - basic
  const [title, setTitle] = useState("Hi");

  //p2 - array
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      })
    );
  };

  //p3 - object
  const [obj, setObj] = useState({
    name: "lin",
    age: 18,
    msg: "hello world",
  });

  //p4 - counter
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>This is my practice of using 'useState'</h1>
      <h2>{title}</h2>
      <button
        className="btn"
        name="b1"
        value="3"
        onMouseOver={(e) => console.log(e.target.value)}
        onClick={() => setTitle("thanks")}
      >
        change
      </button>
      <button className="btn" onClick={() => setTitle("HI")}>
        go back
      </button>
      <p>------------------------------------------</p>
      <>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={() => handleRemove(id)}>remove</button>
            </div>
          );
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </>
      <p>-------------------------------------------</p>
      <>
        <h2>{obj.name}</h2>
        <h2>{obj.age}</h2>
        <h2>{obj.msg}</h2>
        <button
          className="btn"
          onClick={() => setObj({ ...obj, msg: "learning" })}
        >
          Change Msg
        </button>
      </>

      <p>-------------------------------------------</p>
      <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div style={{ marginBottom: "2rem" }}>
          <button className="btn" onClick={() => setCounter(counter + 1)}>
            +
          </button>
          <button className="btn" onClick={() => setCounter(counter - 1)}>
            -
          </button>
          <button className="btn" onClick={() => setCounter(0)}>
            reset
          </button>
        </div>
      </>
    </div>
  );
};

export default Practice;
