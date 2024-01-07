import React, { useState } from 'react';
import CustomInput from '../../components/input/input';
import ButtonSalve from '../../components/buttonsalve/ButtonSalve';
import './Login.css';
import Logo_softex from '../../components/logos/Logo_softex';
import Logo_itbc from '../../components/logos/logo_itbc';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... (seu código de login)
  };
  /*
    const TipoUser= () => {
      if(setUsername === "admin"){
  
      }
    };*/


  return (
    <div className="container">
      <div className="div-container">
        <Logo_softex />
        <Logo_itbc />
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
              <ButtonSalve type="submit">ENTRAR</ButtonSalve>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

