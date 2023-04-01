import React, { useState } from "react";
import { useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setSize(window.innerWidth));
    };
  }, []);
  return (
    <div>
      <h3>Windows</h3>
      <h3>{size} px</h3>
    </div>
  );
};

const Practice = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  const [toggle, isToggle] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const { name } = data;
        setUser(name);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <h2>{user}</h2>
      <p>-----------------------------</p>
      <button className="btn" onClick={() => isToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <Item />}
    </div>
  );
};

export default Practice;
