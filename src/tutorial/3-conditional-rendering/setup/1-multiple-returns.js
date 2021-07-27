import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsErroe] = useState(false);
  const [user, setUser] = useState("No User at this time");

  async function fetchText() {
    let response = await fetch(url);
    let data = await response.json();
    const { login } = data;
    setUser(login);
    setIsLoading(false);
    console.log(data);
  }

  useEffect(() => {
    fetchText();
  }, []);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { login } = data;
  //       setUser(login);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
