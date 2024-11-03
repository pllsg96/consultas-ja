import { useContext, createContext, useState } from "react";
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


export const CadastroContext = createContext()

const CadastroProvider = () => {

    const navigate = useNavigate();


  const [dadosCadastro, setDadosCadastro] = useState ({
        nome: '',
        cpf: '',
        telefone: '',
        dados_adicionais: ''
  })


function CadastraObjeto() {

        let chave = localStorage.length + 1

        localStorage.setItem(chave, JSON.stringify(dadosCadastro))
}
       

    return (

            <div 
            className='flex flex-col p-5'
            >
                <form className="space-x-2">
                    {/* <fieldset> */}
                        <legend className="mb-5">Dados pessoais </legend>
                        
                        <p className="flex flex-col ">
                            <label htmlFor="nome" className="mr-1">Nome:</label>
                            <input 
                            id="nome"
                            type="text" 
                            name="nome_usuario"
                            placeholder="Nome completo"
                            value={dadosCadastro.nome}
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setDadosCadastro({'nome': event.target.value})}/>
                        </p>

                        <p className="flex flex-col ">
                            <label htmlFor="cpf" className="mr-1">CPF:</label>
                            <input 
                            id="cpf"
                            type="text" 
                            name="cpf_usuario"
                            placeholder="Digite o CPF"
                            value={dadosCadastro.cpf}
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setDadosCadastro({...dadosCadastro,'cpf': event.target.value})}/>
                        </p>

                        <p className="flex flex-col ">
                            <label htmlFor="telefoe" className="mr-1">Telefone:</label>
                            <input 
                            id="telefone"
                            type="text" 
                            name="telefone_usuario"
                            placeholder="EX: (82)99999-9999"
                            value={dadosCadastro.telefone}
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setDadosCadastro({...dadosCadastro,'telefone': event.target.value})}/>
                        </p>

                        <p className="flex flex-col ">
                            <label htmlFor="dados_adicionais" className="mr-1">Dados adicionais:</label>
                            <input 
                            id="dados_adicionais"
                            type="text" 
                            name="dados_adicionais"
                            placeholder="Xablau"
                            value={dadosCadastro.dados_adicionais}
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setDadosCadastro({...dadosCadastro,'dados_adicionais': event.target.value})}/>
                        </p>
                       
                </form>

                <button type="submit"
                className="m-auto mt-10 bg-slate-300 w-20 ring-2 ring-slate-400 rounded-lg hover:bg-slate-400 hover:ring-white"
                onClick = {CadastraObjeto}
                    >Submit</button>
            </div>

        // </CadastroContext.Provider>

        
       
    )
}

export default CadastroProvider;


  



