import React from "react";
import Header from "../../components/Header/header";

import "./login.css";

//Pagina Home da Aplicação
export default function Login() {

  return (
    <div className="app">
      <Header />
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required=""></input>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""></input>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""></input>
            <label>Password</label>
          </div>
          <a href="http://localhost:3000">Submit</a>
        </form>
      </div>
    </div>

  )
}
