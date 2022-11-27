import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button className="loginScreen__button">Sign In</button>
      </div>
    </div>
  );
}
