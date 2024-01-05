import React from "react";
import Carousel from "./carousel";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./TipoTela.css"
import Design from "../../imagens/saudacao/Design.svg"


export default function TipoTela() {
  return (
    <>
    <div className="Navbar">
      <Navbar />
    </div>
    <div className="telas">
    
    <div className="recepcao">
      <NavLink to="/telas/tvRecepcao" target="blank">
        <h1>Tv Recepção</h1>
      </NavLink>
      </div>
      <div className="torre">
      <NavLink to="/telas/tvTorre" target="blank">
        <h1>Tv Torre</h1>
      </NavLink>
    </div>
    </div>
    </>
  );
}
