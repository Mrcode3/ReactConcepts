import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hey");

  return (
    <React.Fragment>
      <h2>useState basic example</h2>
      <h5 onMouseOut={() => setText("WOW")}>{text}</h5>
    </React.Fragment>
  );
};

export default UseStateBasics;
