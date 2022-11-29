import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logoergon.png";
import Icone from "../../img/user.png";
import "./header.css";

//Header da aplicaçãõ
export default function Header() {
  return (
    <div className="nav">
      <nav>
        <ul className="lista-nav">
          <img className="logo" src={Logo} />

          <li>
            <Link className="login-teto" to="/Login">
              ErgonAssess
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/Home">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/Sobre">
              SOBRE
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/Avaliar">
              AVALIAR
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/Glossario">
              GLOSSARIO
            </Link>
          </li>
          <img className="icone" src={Icone} />
        </ul>
      </nav>
    </div>
  );
}
