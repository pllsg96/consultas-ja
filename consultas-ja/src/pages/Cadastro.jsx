import { useContext, useState, createContext } from "react";


export const CadastroContext = createContext()

const CadastroProvider = ({children}) => {

    // Dados pessoais 
    const [nomeCadastro, setNomeCadastro] = useState('')
    const [nascimentoCadastro, setNascimentoCadastro] = useState('')
    const [emailCadastro, setEmailCadastro] = useState('')
    const [telefoneCadastro, setTelefoneCadastro] = useState('')

    // Endereço
    const [estadoCadastro, setEstadoCadastro] = useState('')
    const [cidadeCadastro, setCidadeCadastro] = useState('')
    const [ruaCadastro, setRuaCadastro] = useState('')
    const [numeroCadastro, setNumeroCadastro] = useState('')
    const [complementoCadastro, setComplementoCadastro] = useState('')

    return (

        <CadastroContext.Provider value={{
            nomeCadastro, setNomeCadastro,
            nascimentoCadastro, setNascimentoCadastro,
            emailCadastro, setEmailCadastro,
            telefoneCadastro, setTelefoneCadastro,

            estadoCadastro, setEstadoCadastro,
            cidadeCadastro, setCidadeCadastro,
            ruaCadastro, setRuaCadastro,
            numeroCadastro, setNumeroCadastro,
            complementoCadastro, setComplementoCadastro
            }}>

            <div 
            className='flex flex-col pr-20'
            >
                <form className="space-y-4">
                    <fieldset>
                        <legend className="mb-5">Dados pessoais </legend>
                        
                        <p className="flex flex-col ">
                            <label htmlFor="nome" className="mr-1">Nome:</label>
                            <input 
                            id="nome"
                            type="text" 
                            name="nome_usuario"
                            placeholder="Nome completo"
                            value={nomeCadastro}
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setNomeCadastro(event.target.value)}/>
                        </p>
                        <p className="flex flex-col mt-2">
                            <label htmlFor="data_nascimento" className="mr-1">Data de nascimento:</label>
                            <input 
                            id="data_nascimento"
                            type="date" 
                            name="data_nascimento"
                            value={nascimentoCadastro}
                            className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setNascimentoCadastro(event.target.value)}/>
                        </p>

                        <p className="flex flex-col mt-2">
                            <label htmlFor="email" className="mr-1">E-mail:</label>
                            <input 
                            id="email"
                            type="text" 
                            name="email_usuario"
                            value={emailCadastro}
                            placeholder="E-mail"
                            className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setEmailCadastro(event.target.value)}/>
                        </p>

                        <p className="flex flex-col mt-2">
                            <label htmlFor="telefone" className="mr-1">Telefone:</label>
                            <input 
                            id="telefone"
                            type="tel" 
                            name="telefone_usuario"
                            value={telefoneCadastro}
                            placeholder="(XX)9XXXX-XXXX"
                            className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setTelefoneCadastro(event.target.value)}/>
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend className="mb-5 mt-8">Endereço</legend>
                        
                        <p className="flex flex-col ">
                            <label htmlFor="estado" className="mr-1">Estado:</label>
                            <select 
                            id="estado"
                            name="estado"
                            value={estadoCadastro}
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
                            onChange={(event) => setEstadoCadastro(event.target.value)}>

                                <option value="">Selecione...</option>
                                <option value="Acre">Acre</option>
                                <option value="Alagoas">Alagoas</option>
                                <option value="Amapá">Amapá</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Bahía">Bahía</option>
                                <option value="Ceará">Ceará</option>
                                <option value="Distrito Federal">Distrito Federal</option>
                                <option value="Espirito Santo">Espirito Santo</option>
                                <option value="Goiás">Goiás</option>
                                <option value="Maranhão">Maranhão</option>
                                <option value="Mato Grosso">Mato Grosso</option>
                                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                                <option value="Pará">Pará</option>
                                <option value="Paraíba">Paraíba</option>
                                <option value="Paraná">Paraná</option>
                                <option value="Pernambuco">Pernambuco</option>
                                <option value="Piauí">Piauí</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                <option value="Rondônia">Rondônia</option>
                                <option value="Roraima">Roraima</option>
                                <option value="Santa Catarina">Santa Catarina</option>
                                <option value="São Paulo">São Paulo</option>
                                <option value="Sergipe">Sergipe</option>
                                <option value="Tocantins">Tocantins</option>

                            </select>
                        </p>

                        <p className="flex flex-col mt-2">
                            <label htmlFor="cidade" className="mr-1">Cidade:</label>
                            <input 
                            id="cidade"
                            type="text" 
                            name="cidade"
                            value={cidadeCadastro}
                            placeholder="Ex: Maceió"
                            className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setCidadeCadastro(event.target.value)}/>
                        </p>

                        <p className="flex flex-col mt-2">
                            <label htmlFor="rua" className="mr-1">Rua:</label>
                            <input 
                            id="rua"
                            type="text" 
                            name="rua"
                            value={ruaCadastro}
                            placeholder="Ex.: Av. Getúlio Vargas"
                            className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setRuaCadastro(event.target.value)}/>
                        </p>

                        <p className="flex flex-col mt-2">
                            <label htmlFor="numero_casa" className="mr-1">Número:</label>
                            <input 
                            id="numero_casa"
                            type="number" 
                            name="numero_casa"
                            value={numeroCadastro}
                            placeholder="Ex: 366"
                            className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setNumeroCadastro(event.target.value)}/>
                        </p>

                        <p className="flex flex-col mt-2">
                            <label htmlFor="complemento_endereco" className="mr-1">Complemento:</label>
                            <input 
                            id="complemento_endereco"
                            type="text" 
                            name="complemento_endereco"
                            value={complementoCadastro}
                            placeholder="Opcional..."
                            className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"
                            onChange={(event) => setComplementoCadastro(event.target.value)}/>
                        </p>

                    </fieldset>
                </form>

                <button 
                type="button"
                className="m-auto mt-10 bg-slate-300 w-20 ring-2 ring-slate-400 rounded-lg hover:bg-slate-400 hover:ring-white"
                onClick={() => console.log(estadoCadastro)}>
                    Cadastrar
                </button>
            </div>

        </CadastroContext.Provider>

        
       
    )
}

export default CadastroProvider;


  



