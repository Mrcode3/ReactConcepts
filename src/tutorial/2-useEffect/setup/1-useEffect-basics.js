import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function

// second parameter
// 1.defalut(runs every rerender)
// 2.[] (only runs on initial/once)
// 3.[value] (runs when value changes)

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    document.title = `new value(${value})`;
  });

  console.log("render");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default UseEffectBasics;
