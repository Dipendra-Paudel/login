import React from "react";

export default function Login() {
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      username: username.current.value,
      password: password.current.value,
    };

    const url = "";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      body: obj,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    console.log(obj);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input type="text" placeholder="Name" id="name" ref={username} />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          ref={password}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}
