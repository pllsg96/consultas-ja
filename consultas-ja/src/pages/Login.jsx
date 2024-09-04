
import React, { useState } from 'react';


function Login() {
  const [loginNome, setloginNome] = useState('');
  const [loginSenha, setloginSenha] = useState('');

  return (
    
    <div className="flex flex-col p-5">
        <h1>Sign In</h1>
        <h4>Usuário:</h4>
        <input className="w-50 " onChange={() => setloginNome(event.target.value)} id="loginNome" type="text" placeholder="Nome do usuário"  />
        <h4>Senha:</h4>
        <input className ="w-50" onChange={() => setloginSenha(event.target.value)} type="password" placeholder="Senha" maxLength="20"/>

        <h3>{loginNome}</h3>
        <h3>{loginSenha}</h3>

        <button className="bg-slate-400 text-black font-bold py-2 px-4 rounded border">Login</button>

        
          
    </div>
    
  )
}

export default Login
