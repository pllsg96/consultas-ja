

function Consultas( ) {
  return (


    <div className="flex flex-col p-5">
      <div>
      
        <div className="mb-10">
          <h1 className="text-xl text-center">Pesquise por um registro!</h1>
        </div>
        
      <input 
      type="text" 
      className="w-100 rounded-xl pl-2 mr-3 mb-8"
      placeholder="Buscar..."
      />
      <button
      className="bg-gray-300 p-1 rounded-3xl"
      >Pesquisar</button>
      </div>

      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>nome</th>
              <th>cpf</th>
              <th>telefone</th>
              <th>outros dados</th>
            </tr>
          </thead>
            
            <tbody>
              <tr>
              <td>André</td>
              <td>123.456</td>
              <td>(82)99999-9999</td>
              <td>outros dados</td>
            </tr>
            </tbody>
            
        </table>
      </div>
      
    </div>
  );
}

export default Consultas;
