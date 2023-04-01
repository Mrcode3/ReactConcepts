import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  console.log(setCounter);

  const handleCounterPlus = (counter) => {
    console.log(counter);
    let newV = counter + 1;
    setCounter(newV);
  };

  const handleCounterMinus = (counter) => {
    let newV = counter - 1;
    setCounter(newV);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => handleCounterPlus(counter)}>
        +
      </button>
      <button className="btn" onClick={() => handleCounterMinus(counter)}>
        -
      </button>
      <button className="btn" onClick={() => setCounter(0)}>
        reset
      </button>

      <button
        type="button"
        className="btn"
        onClick={() =>
          setTimeout(() => {
            setCounter((pre) => pre + 1);
          }, 2000)
        }
      >
        {" "}
        Delay +
      </button>
    </>
  );
};

export default UseStateCounter;
