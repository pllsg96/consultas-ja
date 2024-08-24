import LoginButton from "../components/LoginButton";
import React, { useState } from 'react';


function Login() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div style={{ backgroundColor: 'blue'}}>
        <input onChange={() => setNomeUsuario(event.target.value)} id="usuario" type="text" placeholder="Nome do usuário"  />
        <input onChange={() => setSenha(event.target.value)} type="password" placeholder="Senha" maxLength="20"/>

        <h3>{nomeUsuario}</h3>
        <h3>{senha}</h3>

        <button>Login</button>
          
    </div>
    
  )
}

export default Login
