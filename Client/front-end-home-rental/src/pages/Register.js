import Nav from "../components/nav";
import React, { useState } from "react";

function Register() {
  const [info, setInfo] = useState([{}]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info);

    const response = await fetch("/Register", {
      method: "post",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result) {
      window.location.href = "http://localhost:3000/Login";
    } else {
      alert("ERROR: USER ALREADY EXISTS");
    }
  };
  return (
    <>
      <Nav />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="Name" type="text" required onChange={handleChange} />
        <br /> <br />
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
      <a href="/Login">Already have an account?</a>
    </>
  );
}

export default Register;
