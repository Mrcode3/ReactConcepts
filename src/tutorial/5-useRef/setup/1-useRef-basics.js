import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refc = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    refc.current.focus();

    console.log(refc.current);
    console.log(refc.current.value);
    console.log(refc.current.type);
  };

  useEffect(() => {
    refc.current.focus();
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refc} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UseRefBasics;
