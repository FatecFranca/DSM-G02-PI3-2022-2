import React from "react";

import Header from "../../components/header/header";

import "./home.css";

//Pagina Home da Aplicação
export default function Home() {
  return (
    <div className="app">
      <Header />
      <div className="Inicio">
        <h1 className="h">Minhas Atividades</h1>
        <button className="salv">Nova Avaliação</button>
        <button className="salve">Continuar Avaliação</button>
        <div className="Informacoes">
          <div className="i1">Avaliações Realizadas</div>
          <div className="i2">Avaliações em Andamento</div>
          <div className="i3">Avaliações Concluidas</div>
        </div>
      
      </div>
    </div>
    
  );
}