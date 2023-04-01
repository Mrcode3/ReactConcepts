import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

/*async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise */

const UseEffectFetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(url);
      const users = await response.json();
      setUser(users);
    };
    getUser();
  }, []);

  return (
    <>
      <h1>GitHub Users</h1>
      <ul className="users">
        {user.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
