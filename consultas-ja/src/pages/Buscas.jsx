import { useContext, createContext } from "react";
import mockDataPessoas from "../data/mock";


const CadastroProvider = () => {

//   const items = [];
//   for (let i = 0; i < mockData.length; i++) {
//     const pessoa = mockData[i];
//     items.push(
//       <li key={i}>
//         <h2>{pessoa.nome}</h2>
//         <p>CPF: {pessoa.cpf}</p>
//         <p>RG: {pessoa.rg}</p>
//         <p>Telefone: {pessoa.telefone}</p>
//         <p>Endereço: {pessoa.endereco}</p>
//         <img src={pessoa.imageProfile} alt={`Perfil de ${pessoa.nome}`} />
//       </li>
//     );
//   }
    return (

        <div>
            <input type="text" />

            <div>
                <div>

                    {
          mockDataPessoas
        .filter((peixinho) => peixinho.nome === 'João Pereira')
        .map((peixinho, index) => (
            <div key={index}>
                <h2>{peixinho.nome}</h2>
                <p>CPF: {peixinho.cpf}</p>
                <p>Telefone: {peixinho.telefone}</p>
            </div>
        ))
                    }

                    <button>Visualizar</button>
                    <button>Editar</button>
                    <button>Deletar</button>

                </div>
            </div>

        </div>
    )   
    
}

export default CadastroProvider;