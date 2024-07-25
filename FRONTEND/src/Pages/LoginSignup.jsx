import React, { useState } from "react";

import "./CSS/LoginSignup.css";

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login", formdata);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((response) =>
      response.json().then((data) => (responseData = data))
    );

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup", formdata);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((response) =>
      response.json().then((data) => (responseData = data))
    );

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="LoginSignup">
      <div className="LoginSignup-container">
        <h1>{state}</h1>

        <div className="LoginSignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formdata.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formdata.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formdata.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="LoginSignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="LoginSignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="LoginSignup-agree">
          <input type="checkbox" name="" id="" />

          <p>
            By continuing, I agree to use the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
