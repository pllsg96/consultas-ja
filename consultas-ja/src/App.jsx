import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from "./pages/Login";
import Consultas from "./pages/Consultas";
import CadastroProvider from "./pages/Cadastro";



function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center flex-row p-40">
        <div className="p-10 bg-slate-200 space-y-3">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/consultas' element={<Consultas />} />
            <Route path='/cadastro' element={<CadastroProvider />} />
          </Routes>
        </div>

        <div className="bg-slate-400 w-200 flex flex-col justify-center space-y-5 p-10">
          <h1 style={{color: 'white'}}>Bem-vindo ao Consultas Já</h1>
          <h1 style={{color: 'white'}}>Ainda não é cadastrado?</h1>
          <Link to="/cadastro" className="flex justify-center bg-slate-600 border rounded-lg hover:bg-slate-500 text-white p-2">
            Cadastre-se
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

