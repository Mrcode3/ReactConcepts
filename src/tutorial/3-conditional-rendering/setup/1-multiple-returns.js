import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("No User at this time");

  // async function fetchText() {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   const { login } = data;
  //   setUser(login);
  //   setIsLoading(false);
  //   console.log(data);
  // }

  useEffect(() => {
    const fetchText = async () => {
      let res = await fetch(url);
      let data = await res.json();
      // const { login } = data;
      setUser(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

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

  return (
    <div>
      <h2>{user?.login}</h2>;<h2>{user?.location}</h2>
    </div>
  );
};

export default MultipleReturns;
