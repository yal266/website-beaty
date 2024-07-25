import { RiLock2Line, RiUserLine } from "@remixicon/react";
import React from "react";
import "./login.css";
import UseLogin from "./UseLogin";

export const Login = () => {
  const { email, password, onInputChange, onLogin } = UseLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action="#"
        onSubmit={onLogin}
        className="bg-white p-8 rounded shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl text-center font-medium text-gray-900 mb-8">
          Log In
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="login_label">
            Email
          </label>
          <div className="login_form">
            <span className="login_icon">
              <RiUserLine size={18} />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              required
              placeholder="Write your Email"
              className="login_input "
            />
          </div>
        </div>
        <div className="mb-4">
          <label for="password" className="login_label">
            Password
          </label>
          <div className="login_form">
            <span className="login_icon">
              <RiLock2Line size={18} />
            </span>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
              required
              placeholder="Enter your Password"
              className="login_input"
            />
          </div>
        </div>

        <div className="relative flex mx-auto gap-2 mb-4">
          <input type="checkbox" name="remember" id="check_login" />
          <label for="check_login" className="login_label_check">
            Remenber me
          </label>
        </div>

        <div className="text-center text-sm ">
          <p className="login-text">
            Don't have an account?{" "}
            <a href="#" className="italic text-blue-950">
              Sign up
            </a>
          </p>
          <div className="login-text">
            <a
              href="https://example.com/reset-password"
              className="text-blue-950 underline"
            >
              Forgot your password
            </a>
          </div>
          <button type="submit" className="login-button mt-4">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
