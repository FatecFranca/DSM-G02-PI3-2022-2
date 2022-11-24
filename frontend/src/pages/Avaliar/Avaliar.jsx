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


        return (
          <div className="avaliar" key={key}>

            
            <div className="tabela">
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Questao:{quest.enunciation}</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      })}

    </div>
  );
};


