import Login from "./pages/Login"
import { useState } from 'react';
import Consultas from "./pages/Consultas"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState(''); // Criamos o use state para passar via props
  console.log(username, '------')
  return (
          //Props são propriedades que desejamos levar de um componente para o outro. Passamos elas
          // através da tag html como podemos ver no exemplo abaixo em Login ou Consultas
          // Ex: {<Login setUsername={setUsername} />}
          // Ex: {<Consultas nome={username} />}
      <div className = "bg-red-100  min-h-screen w-full">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login setUsername={setUsername} />} />
          <Route path='/consultas' element={<Consultas username={username} />} />
         </Routes>
       </BrowserRouter>
       </div> 
  )
}

export default App
