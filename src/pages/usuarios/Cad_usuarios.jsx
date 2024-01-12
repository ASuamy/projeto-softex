import React from "react";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Title from "../../components/Texts/Title/Title";
import CheckboxUser from "../../components/CheckBox/CheckBox";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";

function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, "$1.$2.$3-$4");
}

function Cad_usuarios() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

    <div className="cad-usuario">
      <div className="cad-usuario-container">
        <div className="cad-dados-usuario">
          <div>
            <form>
              <CustomInput type="text" label="CPF" onChange={formatarCPF} />
              <CustomInput type="text" label="Nome Completo" />
              <CustomInput type="email" label="Email" />
              <Subtitle text="Tipo de Usuário" />
              <CheckboxUser />
              <CustomInput type="text" label="Nome do usuário" />
              <CustomInput type="password" label="Senha" />
              <ButtonSalve text="SALVAR" />
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Cad_usuarios;
