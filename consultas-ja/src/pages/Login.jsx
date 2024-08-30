import  { useState } from 'react';


function Login() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
  <div className="flex justify-center flex-row p-40">
    <div className="p-10 bg-slate-200 space-y-3">
      <h1>Sign In</h1>
        <div className="flex flex-col p-5">
            <h4>Usuário:</h4>
            <input className="w-50 " onChange={() => setNomeUsuario(event.target.value)} id="usuario" type="text" placeholder="Nome do usuário"  />
            <h4>Senha:</h4>
            <input className ="w-50" onChange={() => setSenha(event.target.value)} type="password" placeholder="Senha" maxLength="20"/>

            <h3>{nomeUsuario}</h3>
            <h3>{senha}</h3>

            <button className="bg-slate-400 text-black font-bold py-2 px-4 rounded border">Login</button>
                    
            </div>
          </div>
      <div className="bg-slate-400 w-200 flex flex-col justify-center space-y-5 p-10">
        <h1 style={{color: 'white'}}>Bem vindo ao Consultas Já</h1>
        <h1 style={{color: 'white'}}>Ainda não é cadastrado?</h1>
        <button className="bg-slate-600 border rounded-lg hover:bg-slate-500" style={{color: 'white'}}>Cadastre-se</button>
      </div>
    </div>
    
  )
}

export default Login
