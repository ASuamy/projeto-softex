import React from 'react';
import ButtonSalve from '../../components/buttonsalve/ButtonSalve';
import Title from '../../components/Texts/Title/Title';
import ButtonUpload from '../../components/buttonupload/ButtonUpload'
import Label from '../../components/Texts/label/Label'
import CustomInput from '../../components/input/input'
import './Cad_empresas.css'


export default function Cad_empresas() {
  return (
    <>
    <header>
    <Title text="Cadastro de empresas"/>
    </header>
    <section>
      <form>
    <CustomInput type="text" label="CNPJ"/>
    <CustomInput type="text" label="Razão social"/>
    <CustomInput type="text" label="Nome fantasia"/>
    <CustomInput type="password" label="Senha"/>
    <CustomInput type="text" label="Contato"/>
    <ButtonUpload label="Anexar Logomarca" className="buttonLogo"/>
    <Label text1="*Formato PNG" text2="*até 50MB"/>
    <ButtonSalve text="Salvar"/>
    </form>
    </section>
    </>
  )
}
