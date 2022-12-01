import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";
import logoacesso from "../../img/logolacesso.png";
import axios from "axios"
import * as yup from "yup";

import "./login.css";

//Pagina Home da Aplicação
const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password_hash: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("A senha é obrigatória"),

  })
  .required();
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(watch("name"));

  function onSubmit(userData) {
    console.log(userData);
    window.alert("Acesso Liberado");


  }
  let navigate = useNavigate()

  const addPost = data => axios.post("http://localhost:3001/user", data)
    .then(() => {
      console.log("Cadastro de usuario realizado com sucesso")
      window.alert("Acesso Liberado");
      navigate('/Home')
    })
    .catch(() => {
      console.log("Error!")
    })



  return (
    <div className="app">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit(addPost)}>
          <img className="logologin" src={logoacesso} />
          <h1 className="tittlelogin">Ergon Aceess</h1>
          <label className="loginlabel">
            Nome
            <input className="input-login" type="text" placeholder="Digite seu Nome"{...register("name", { required: true })} />
            <span className="error-span">{errors.name?.message}</span>
          </label>

          <label className="loginlabel">
            Email
            <input className="input-login" type="text" placeholder="Digite seu Email"{...register("email")} />
            <span className="error-span">{errors.email?.message}</span>
          </label>

          <label className="loginlabel">
            Senha
            <input className="input-login" type="password" placeholder="Digite sua senha"{...register("password_hash")} />
            <span className="error-span">{errors.password_hash?.message}</span>
          </label>

          <button className="button-login" type="submit" name="_next">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
