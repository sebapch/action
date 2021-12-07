import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__logo"
          alt=""
          src="https://www.actionfintech.com/assets/img/ActionFintech_logo.jpg"
        />
        <h1>Acceso a NFT de contratos</h1>

        <button className="login__clientButton"> Client Login</button>

        <button className="login__adminButton" type="submit">
          Admin Login
        </button>
      </div>
    </div>
  );
}

export default Login;
