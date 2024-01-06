import React, { useState } from 'react';
import CustomInput from '../../components/input/input';
import CustomButton from '../../components/button/button';
import './Login.css';
import Logo_softex from '../../components/logos/Logo_softex';
import Logo_itbc from '../../components/logos/logo_itbc';

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
        <Logo_softex/>
        <Logo_itbc/>
      <div className="form-container"> 
        {loggedIn ? (
          <h1>Usuário logado com sucesso!</h1>
        ) : (
          <form onSubmit={handleLogin}>
            <CustomInput
              type="text"
              label="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <CustomInput
              type="password"
              label="Senha"
              variant
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <CustomButton type="submit">ENTRAR</CustomButton>
          </form>
        )}
      </div>
      </div>
    </div>
  );
};

export default Login;

