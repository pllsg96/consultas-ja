
import { Tabela } from "../components/Tabela";

function Consultas( ) {
  return (


    <div className="flex flex-col p-5">
      <div>
      
        <div className="mb-10">
          <h1 className="text-xl text-center">Pesquise por um registro!</h1>
        </div>
        
        <input 
        type="text" 
        className="rounded-xl p-1 mr-3 mb-8 md:w-80"
        placeholder="Buscar..."
        />
        <button
        className="bg-gray-300 p-1 rounded-3xl"
        >Pesquisar</button>
      </div>

      <Tabela></Tabela>
      
      
    </div>
  );
}

export default Consultas;
