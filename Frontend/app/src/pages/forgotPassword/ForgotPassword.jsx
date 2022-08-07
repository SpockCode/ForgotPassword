import React from "react";
import { useState } from "react";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <main className="forgot-password">
      <div className="forgot">
        <img src="close-square.svg" alt="" />
        <div className="text">
          <p className="top">FORGOT PASSWORD?</p>
          <p>
            Please enter the address associated <br /> with your account
          </p>
        </div>
        <div className="form">
          <form>
            <label className="label">
              <b> Email/Phone number </b>
            </label>{" "}
            <br />
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
