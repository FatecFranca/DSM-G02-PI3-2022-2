import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/header";
import imgavaliar from "../../img/avaliarimg.png"

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
        

        return (
          <div className="avaliar" key={key}>
          <form>
          <h2></h2>
            <div className="avaliar-box">
              <input type="text" name="" required=""></input>
              
            </div>
            <div className="segmento-box">
              <input type="text" name="" required=""></input>
            </div>
            <p>Questao:{quest.enunciation}</p>
          </form>
        </div> 
        )
      })}
      
    </div>
  );
};


