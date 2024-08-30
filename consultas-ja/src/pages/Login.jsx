import LoginButton from "../components/LoginButton";
import React, { useState } from 'react';


function Login() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div class="flex flex-col p-5">
        <h4>Usuário:</h4>
        <input class="w-50 " onChange={() => setNomeUsuario(event.target.value)} id="usuario" type="text" placeholder="Nome do usuário"  />
        <h4>Senha:</h4>
        <input class ="w-50" onChange={() => setSenha(event.target.value)} type="password" placeholder="Senha" maxLength="20"/>

        <h3>{nomeUsuario}</h3>
        <h3>{senha}</h3>

        <button class="bg-slate-400 text-black font-bold py-2 px-4 rounded border">Login</button>
          
    </div>
    
  )
}

export default Login
