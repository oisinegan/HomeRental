import React, { useState } from "react";
import Nav from "../components/nav";

function Login() {
  const [info, setInfo] = useState([{}]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/Login", {
      method: "post",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result === "SUCESS") {
      window.location.href = "http://localhost:3000";
    } else {
      alert("ERROR: wrong user or pass");
    }
  };

  return (
    <>
      <Nav />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="username" type="email" required onChange={handleChange} />
        <br /> <br />
        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
      <a href="/Register">Sign up here</a>
    </>
  );
}

export default Login;
