import React, { useState } from "react";
import CustomInput from "../../components/input/input";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import "./Login.css";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... (seu código de login)
  };

  const handleAdminChange = (event) => {
    setIsAdmin(event.target.value);
    };
    
  return (
    <div className="container">
      <div className="div-container">
        <div className="imagem">
          <div className="logoSoftex"></div>
          <div className="logoITBC"></div>
        </div>
        <div className="form-container">
          {loggedIn ? (
            <h1>Usuário logado com sucesso!</h1>
          ) : (
            <form onSubmit={handleLogin}>
              <CustomInput
                type="text"
                label="Usuário"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <br />
              <CustomInput
                type="password"
                label="Senha"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <NavLink to="/Home">
                <ButtonSalve type="submit" text="Entrar" href="/Home" />
              </NavLink>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
