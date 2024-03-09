"use client";

import Link from "next/link";
import "../../globals.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/actions/api";

const DEFAULT_VALUE = {
  email: "",
  password: "",
};

const Login = () => {
  const [fields, setFields] = useState(DEFAULT_VALUE);

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationFn: (data) => api.auth("/user/login", data),
  });

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate(fields);
  };

  const isRegisterPage = true;

  return (
    <div id={isRegisterPage ? "register-root" : ""}>
      <div className="card">
        <form className="login-form form-add-task" onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              required
              value={fields.email}
              onChange={handleChange}
              name="email"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              required
              value={fields.password}
              onChange={handleChange}
              name="password"
            />
            <label>Password</label>
          </div>
          <button className="button-submit" type="submit">
            Login
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </form>
        <p className="text-color-1">
          Can&apos;t log in? <Link href="register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
