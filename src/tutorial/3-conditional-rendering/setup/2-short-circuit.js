import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

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
