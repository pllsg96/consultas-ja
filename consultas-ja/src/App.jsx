import Login from "./pages/Login"
import Consultas from "./pages/Consultas"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div class="flex justify-center flex-row p-40">
      <div class="p-10 bg-slate-200 space-y-3">
        <h1>Sign In</h1>
      
        <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login />} />
           <Route path='/consultas' element={<Consultas />} />
         </Routes>
       </BrowserRouter>
       </div>

       <div class="bg-slate-400 w-200 flex flex-col justify-center space-y-5 p-10">
        <h1 style={{color: 'white'}}>Bem vindo ao Consultas Já</h1>
        <h1 style={{color: 'white'}}>Ainda não é cadastrado?</h1>
        <button class="bg-slate-600 border rounded-lg hover:bg-slate-500" style={{color: 'white'}}>Cadastre-se</button>
       </div>
      
      
    </div>
  )
}

export default App
