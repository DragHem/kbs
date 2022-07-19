import React, { useState } from "react";
import loginImg from "../assets/imgs/login.svg";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerFormHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://192.168.0.125:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username,
          name: fullName,
          email,
          password,
        }),
      });

      const data = await resp.json();

      console.log(data);
    } catch (e) {}
  };

  return (
    <form onSubmit={registerFormHandler}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={loginImg} alt="" className="absolute" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
            <div className="card-body">
              <h1 className="lg:text-5xl font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="input input-bordered"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
