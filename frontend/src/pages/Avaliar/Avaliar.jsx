import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/header";
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

  const addPost = data => axios.post("http://localhost:3001/assessment/637ec2e12affb96a174c85b2/answer", data)
    .then(() => {

      console.log("Cadastro de resposta completo")

    })
    .catch(() => {
      console.log("Error!")
    })
  return (
    <div className="app">
      <Header />
      {quest.map((quest, key) => {

<<<<<<< HEAD
        return (
          <div className="app" key={key}>
            <div className="form" >
              <form onSubmit={handleSubmit(addPost)}>

                <h1>Avaliações</h1>
                <label>

                  <p>Questão: {quest.enunciation}</p>

                  <input type="text" placeholder="complete com a sua resposta"{...register("answer", { required: true })} />
                  <input type="text" placeholder="Digite um comentario"{...register("comment")} />
                  <input type="text" placeholder="Digite o id da pergunta"{...register("question")} />

                </label>

                <button type="submit" name="_next">
                  Enviar Respostas
                </button>
              </form>

            </div>

=======
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
            
>>>>>>> c2864610755c72aa74636d751758353cba180c4a
          </div>
        )
      })}

    </div>
  );
};