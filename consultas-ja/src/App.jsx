import Login from "./pages/Login"
import Consultas from "./pages/Consultas"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <>
        <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login />} />
           <Route path='/consultas' element={<Consultas />} />
         </Routes>
       </BrowserRouter>
      </>
  )
}

export default App
