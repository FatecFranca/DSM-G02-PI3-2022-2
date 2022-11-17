import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logoacesso from "../../img/logolacesso.png";
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
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
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
    <input type="hidden" name="_next" value="http:localhost:3000/Home" />;
  }

  return (
    <div className="app">
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={logoacesso} />
          <h1>Ergon Aceess</h1>
          <label>
            Nome
            <input type="text" {...register("name", { required: true })} />
            <span>{errors.name?.message}</span>
          </label>

          <label>
            Email
            <input type="text" {...register("email")} />
            <span>{errors.email?.message}</span>
          </label>

          <label>
            Senha
            <input type="password" {...register("password")} />
            <span>{errors.password?.message}</span>
          </label>

          <label>
            Confirmar Senha
            <input type="password" {...register("confirmPassword")} />
            <span>{errors.confirmPassword?.message}</span>
          </label>

          <button type="submit" name="_next" value="http:localhost:3000/Home">
            Realizar Acesso Para Avaliar
          </button>
        </form>
      </div>
    </div>
  );
}
