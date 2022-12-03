import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import lh from "../../img/img-home.png";

import "./home.css";

//Pagina Home da Aplicação
export default function Home() {

  return (
    <div className="app">
      <Header />
      <main>
        <section>
          <div className="circle"></div>
          <div className="main-text">

            <h3>Bem-vindo ao ErgoAssess</h3>
            <p>Sua ferramenta para avaliações
              de ergonomia a usabilidade!</p>
            <h6>Começar uma nova avaliação</h6>
            <button className="btn"><Link className="link-sobre" to="/Avaliar">Clique aqui!</Link></button>
            <div className="text">
              <h5></h5>
            </div>
            <div className="content">

            </div>
          </div>
          <div className="main-img">
            <img src={lh} />
          </div>
        </section>
      </main>

    </div>

  );
}