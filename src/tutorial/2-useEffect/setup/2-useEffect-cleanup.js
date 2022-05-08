import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("effect");
    //The second parameter is the function we want to call when
    //the event occurs.
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("clean");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
      <button className="btn" id="1">
        +
      </button>
    </>
  );
};

export default UseEffectCleanup;
