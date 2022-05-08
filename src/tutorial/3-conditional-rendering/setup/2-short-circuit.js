import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

/*
var a; // undefined (falsy value)
var b = null; // null (falsy value)
var c = undefined; undefined (falsy value)
var d = 4; // number (NOT falsy)
var e = 'five'; // assigment short circuits before reaching here

var f = a || b || c || d || e;

console.log(f); //4
*/

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("testing...");
  const [isError, setIsError] = useState(false);

  // const first = text || "hi";
  // const second = text && "yes";

  return (
    <>
      <h1>{text || "lin"}</h1>
      {/* <h1>{text && "ou"}</h1>
      {text && <h1>hello</h1>} */}

      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle
      </button>
      {isError && <h1>Error.</h1>}
      {isError ? (
        <p>Error catched</p>
      ) : (
        <div>
          <h5>Successful</h5>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
