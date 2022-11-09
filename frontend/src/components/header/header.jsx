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
        <ul className="list">
          <img className="logo" src={Logo} />

          <li>
            <Link className="l1" to="/">
              ErgonAssess
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/Sobre">
              SOBRE
            </Link>
          </li>
          <li>
            <Link className="link" to="/Avaliar">
              AVALIAR
            </Link>
          </li>
          <li>
            <Link className="link" to="/Glossario">
              GLOSSARIO
            </Link>
          </li>
          <img className="icone" src={Icone} />
        </ul>
      </nav>
    </div>
  );
}
