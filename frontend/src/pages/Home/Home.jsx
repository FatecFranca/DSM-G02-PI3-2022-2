import React from "react";
import Header from "../../components/header/header";
import "./home.css";

//Pagina Home da Aplicação
export default function Home() {
  return (
    <div className="app">
      <Header />
      <h1 className="t">VOCE ESTA NA PAGINA PRINCIPAL</h1>
      <div className="perfil"></div>
      <div className="atividade">
        <h1>Atividades</h1>
      </div>
      <div className="a1">
        <h2 className="t1"></h2>
      </div>
      <div className="a2">
        <h2 className="t1">Avaliações Concluidas</h2>
      </div>
      <div className="a3">
        <h2 className="t2">Avaliações em andamento</h2>
      </div>
      <div className="a4">
        <h2 className="t2">Participações no forum</h2>
      </div>
    </div>
  );
}