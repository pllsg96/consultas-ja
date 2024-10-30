import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

function Login() {
  const [loginNome, setLoginNome] = useState('');
  const [loginSenha, setLoginSenha] = useState('');

  const { nomeCadastro } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        
        <h2 className="text-center text-gray-700 mb-2">{nomeCadastro.nome}</h2>
        <h2 className="text-center text-gray-700 mb-4">{nomeCadastro.nascimento}</h2>
        
        <label htmlFor="loginNome" className="font-semibold text-gray-600">Usuário:</label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-indigo-200"
          onChange={(event) => setLoginNome(event.target.value)}
          id="loginNome"
          type="text"
          placeholder="Nome do usuário"
        />
        
        <label htmlFor="loginSenha" className="font-semibold text-gray-600">Senha:</label>
        <input
          className="w-full px-3 py-2 mb-6 border rounded focus:outline-none focus:ring focus:ring-indigo-200"
          onChange={(event) => setLoginSenha(event.target.value)}
          id="loginSenha"
          type="password"
          placeholder="Senha"
          maxLength="20"
        />

        <button className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">
          Login
        </button>

        <div className="mt-4 text-center text-gray-500">
          <p>Usuário: {loginNome}</p>
          <p>Senha: {loginSenha}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

