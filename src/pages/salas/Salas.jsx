import React, { useState } from "react";
import CustomButton from "../../components/button/button";
import Title from "../../components/Texts/Title/Title";
import DataTable from "../../components/tabela/tabela";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../Styles/stylesPages.css";
import Navbar from "../../components/navbar/Navbar";
import Select from "../../components/select/Select";

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  { field: "andar", headerName: "Andar", width: 120 },
  { field: "id", headerName: "Sala", width: 80 },
  { field: "empresa", headerName: "Empresa", width: 150 },
  {
    field: "edit",
    headerName: "",
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <IconButton
        aria-label="edit"
        size="small"
        onClick={() => handleEdit(params.row.id)}
      >
        <EditOutlined />
      </IconButton>
    ),
  },
  {
    field: "delete",
    headerName: "",
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleDelete(params.row.id)}
      >
        <DeleteOutline />
      </IconButton>
    ),
  },
];

const customRows = [
  { id: 200, andar: "2º Andar", empresa: "Teste 1" },
  { id: 1, andar: "Mezanino", empresa: "Teste 2" },
  { id: 301, andar: "3º Andar", empresa: "Teste 3" },
  { id: 405, andar: "4º Andar", empresa: "Teste 4" },
  { id: 603, andar: "6º Andar", empresa: "Teste 5" },
  // Adicione mais usuários conforme necessário

  // Preencha com os dados necessários
  // ...
];

function Salas() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      
      <div className="salas">
      <div className="salas-container">
        <Title text="Salas" />
        <div className="dados-salas">
        <CustomButton >
                <NavLink to="/salas/cadastrosalas" className='buttonAdd'>
                  ADICIONAR
                  </NavLink>
                  </CustomButton>
          <div className="geral-salas">
            <div className="input-salas">
              <Select
                andar={[
                  { value: 0, label: "Mezanino" },
                  { value: 1, label: "1º andar" },
                  // ...mais opções de andar
                ]}
                label="Andar"
              />
              <Select
                sala={[
                  { value: 101, label: "Sala 101" },
                  { value: 102, label: "Sala 102" },
                  // ...mais opções de sala
                ]}
                label="Sala"
              />
              <Select
                empresas={[
                  { value: "company1", label: "Empresa 1" },
                  { value: "company2", label: "Empresa 2" },
                  // ...mais opções de empresa
                ]}
                label="Empresa"
              />
              <ButtonSalve text="Assossiar" />
            </div>
            <div className="tabela-salas">
              <DataTable
                rows={customRows}
                columns={customColumns}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Salas;
