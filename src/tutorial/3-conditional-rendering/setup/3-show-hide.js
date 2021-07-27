import React, { useState, useEffect } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h1>Window</h1>
      <h2>Size :{size}</h2>
    </div>
  );
};

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <Item />}
    </>
  );
};

export default ShowHide;
