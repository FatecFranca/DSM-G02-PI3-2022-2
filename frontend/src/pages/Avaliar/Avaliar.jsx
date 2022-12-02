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
      .string(),
  })
  .required();
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>



      {quest.map((quest, key) => {
        return (

          <div className="asad" key={key}>

            <div className="lal">
              <form className="kkk" onSubmit={handleSubmit(addPost)}>
             
                <p>QUESTION: {quest.enunciation}</p>
                
                <p>CRITERION : {quest.criterion.name} : {quest.criterion.description}</p>
                
                <label className="labelavaliar">
                  Resposta
                  <input className="input-avaliar" type="text" placeholder="Digite sua resposta"{...register("answer")} />
                </label>
                <label className="labelavaliar">
                  Comentario
                  <input className="input-avaliar" type="text" placeholder="Digite seu commentario"{...register("comment")} />
                </label>
                <label className="labelavaliar">
                  <input type="hidden" value={quest._id} {...register("question")} />
                </label>
                <button className="button-avaliar" type="submit">
                  Enviar Resposta
                </button>
              </form>
            </div>
          </div>
        )
      })}

    </div>
  );
};