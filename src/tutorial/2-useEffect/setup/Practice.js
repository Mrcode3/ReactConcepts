import React, { useState } from "react";
import { useEffect } from "react";
const Practice = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("call effect");
  }, [num]);

  console.log("render");

  return (
    <div>
      <h3>{num}</h3>
      <button className="btn" onClick={() => setNum(num + 1)}>
        plus
      </button>
    </div>
  );
};

export default Practice;
