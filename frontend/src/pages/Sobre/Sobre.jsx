import React from "react";
import Header from "../../components/header/header";
import fotosobre from "../../img/sobresvg.svg"


import "./sobre.css";

//Pagina Sobre da Aplicação
export default function Sobre() {
  return (
    <div className="app">
      <Header />
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
        ErgoAssess é uma ferramenta digital que visa auxiliar os profissionais da área de desenvolvimento de softwares que atuam em front-end e UX/UI, possibilitando que as interfaces de seus produtos sejam avaliadas, por seus pares, no tocante à ergonomia, de acordo com os critérios ergonômicos propostos pelo Professor Walter Cybis.
        </p>
        <img src={fotosobre} />
      </div>
    </div>
  );
}
