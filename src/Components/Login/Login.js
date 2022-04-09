import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleLogo from "../../images/google.svg";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>

        <div className="or-container">
          <div className="or-style-left"></div>

          <p>or</p>

          <div className="or-style-right"></div>
        </div>

        <div className="input-wrapper">
          <button className="google-auth">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
