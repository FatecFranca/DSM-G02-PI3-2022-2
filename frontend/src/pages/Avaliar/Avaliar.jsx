import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



import "./avaliar.css";

//Pagina Avaliação da Aplicação
const schema = yup
  .object({
    question: yup.string(),
    answer: yup
      .string(),
    comment: yup
      .string()
  })

export default function Questoes() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });



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

  const addPost = data => axios.post("http://localhost:3001/assessment/6340e4003feb7c46425ad26e/answer", data)
    .then(() => {
      console.log(data)
      console.log("Cadastro de resposta completo")

    })
    .catch(() => {
      console.log(data)
      console.log("Error!")
    })
  return (
    <div className="app">
      <Header />
      
      <div>
        <p></p>
      </div>
    
      <div>
        <h1>avaliar</h1>
      </div>
      <div>
        <h1>Avaliações</h1>
      </div>

      {quest.map((quest, key) => {
  

        return (
        
            <div className="app" key={key}>
              <div >
                <form  className="forms" onSubmit={handleSubmit(addPost)}>
                  <label className="labelavaliar">
                    <p>Questão: {quest.enunciation}</p>
                    <input className="input-avaliar" type="text" placeholder="complete com a sua resposta"{...register("answer", { required: true })} />
                    <input className="input-avaliar" type="text" placeholder="Digite um comentario"{...register("comment")} />
                    <input className="input-avaliar" type="text" placeholder="Digite o id da pergunta"{...register("question")} />
                  </label>
                  <button className="button-avaliar"type="submit" name="_next">
                    Enviar Respostas
                  </button>
                </form>
              </div>
            </div>
          
        )
      })}

    </div>
  );
};