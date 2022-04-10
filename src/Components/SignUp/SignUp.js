import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import GoogleLogo from "../../images/google.svg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password don't match!!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be atleast more than 6 character");
      return;
    }

    createUserWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handleConfirmPassword}
                type="password"
                name="confirm-password"
                id="password"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>

            <input className="form-submit" type="submit" value="SignUp" />
          </form>
          <p>
            Already Have an Account?{" "}
            <Link className="form-link" to="/login">
              Login
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
    </div>
  );
};

export default SignUp;
