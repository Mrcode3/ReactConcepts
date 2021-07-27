import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Ramdon Title");

  const showEvent = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name + value);
  };
  return (
    <div>
      <h2>{title}</h2>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setTitle("Welcom");
        }}
        value="4"
        name="me"
        onMouseOver={showEvent}
      >
        Change Title
      </button>
    </div>
  );
};

export default ErrorExample;
