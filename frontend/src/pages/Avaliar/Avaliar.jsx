import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/header";

import { Table } from "react-bootstrap";

import "./avaliar.css";

//Pagina Avaliação da Aplicação
export default function Questoes() {
  const [quest, setQuest] = useState([])

  useEffect(() => {
   
    axios.get("http://localhost:3001/question")
      .then((response) => {
        setQuest(response.data)
        console.log(response.data)
        console.log("Requisição realizada")
      })
      .catch(() => {
        console.log("Error!")
      })
  }, [])
  return (
    <div className="app">
      <Header />
      {quest.map((quest, key) => {

        <br />
        return (
          <div className="container-box" key={key}>
            
            <div className="index">
              <p>{quest.criterion.name}</p>
            </div>            
            <div className="quest"><p>{quest.enunciation}</p></div>
            <div class='button' id='next'><a href='#'>SIM</a></div>
            <div class='button' id='prev'><a href='#'>NÃO</a></div>
            <div class='button' id='start'> <a href='#'>NÃO APLICÁVEL</a></div>
            
          </div>
        )
      })}

    </div>
  );
};