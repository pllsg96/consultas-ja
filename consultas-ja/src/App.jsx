import AppProvider from './context/AppProvider';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from "./pages/Login";
import Consultas from "./pages/Consultas";
import Cadastro from "./pages/Cadastro";
import Xablau from './pages/xablau';
import Buscas from './pages/Buscas';




function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="flex justify-center flex-row p-40">
          <div className="p-10 bg-slate-200 space-y-3">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/consultas' element={<Consultas />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/xablau' element={<Xablau />} />
              <Route path='/buscas' element={<Buscas />} />
            </Routes>
          </div>
    
          
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;