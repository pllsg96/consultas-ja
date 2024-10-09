import { useContext, createContext } from "react";


const CadastroProvider = () => {

    return (

        <div>
            <input type="text" />

            <div>
                <div>
                    <h2>Nome</h2>
                    <h2>CPF</h2>
                    <h2>Telefone</h2>

                    <button>Visualizar</button>
                    <button>Editar</button>
                    <button>Deletar</button>

                </div>
            </div>

        </div>
    )   
    
}

export default CadastroProvider;