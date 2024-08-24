import Login from "./pages/Login"
import Consultas from "./pages/Consultas"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div style={{ backgroundColor: 'grey'}}>
      <h1>Xalbauzeta</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/consultas' element={<Consultas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
