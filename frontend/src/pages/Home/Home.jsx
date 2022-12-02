import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";

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

            <h3>Inicie agora a sua avaliação</h3>
            <p>Chip com velocidade impressionante. Um aumento notável na duração da bateria. E novos recursos de foto e vídeo. No iPhone 13, você faz coisas que nunca pôde. E ele ainda vem em dois tamanhos.</p>
            <h6>Nos informe como esta nosso site</h6>
            <button className="btn"><Link className="link-sobre" to="/Avaliar">Iniciar Avaliação </Link></button>
            <div className="text">
              <h5></h5>
            </div>
            <div className="content">
             
            </div>
          </div>
          <div className="main-img">

          </div>
        </section>
      </main>
   

    </div>

  );
}