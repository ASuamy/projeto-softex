import React from "react";
import "./Saudacao.css";


const Saudacao = ({ nomeUser }) => {
  nomeUser = "Carol";
  return (
    <>
    <div className="saudacao"></div>
      <div className="title">Bem-vindo, {nomeUser}</div>
      </>
  );
};

export default Saudacao;
