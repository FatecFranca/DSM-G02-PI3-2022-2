import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logoergon.png";

import "./header.css";

//Header da aplicaçãõ
export default function Header() {
  return (
    <div className="header">
      <nav>
        <ul className="lista">
          <img className="imglogo" src={Logo} />
          <li>
            <Link className="linkslogin" to="/Login">
              ErgoAssess
            </Link>
          </li>
          <li>
            <Link className="links" to="/Home">
              HOME
            </Link>
          </li>
          <li>
            <Link className="links" to="/Sobre">
              SOBRE
            </Link>
          </li>
          <li>
            <Link className="links" to="/Avaliar">
              AVALIAR
            </Link>
          </li>
          <li>
            <Link className="links" to="/Glossario">
              GLOSSARIO
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}
