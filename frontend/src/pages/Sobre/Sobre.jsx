import React from "react";
import Header from "../../components/header/header";



import "./sobre.css";

//Pagina Sobre da Aplicação
export default function Sobre() {
  return (
    <div className="app">
      <Header />
      <div className="sobre">

        <img src={fotosobre} />
      </div>      
    </div>
  );
}
