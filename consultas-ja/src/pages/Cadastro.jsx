

function Cadastro() {

    return(
        
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
                        className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="data_nascimento" className="mr-1">Data de nascimento:</label>
                        <input 
                        id="data_nascimento"
                        type="date" 
                        name="data_nascimento"
                        className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="email" className="mr-1">E-mail:</label>
                        <input 
                        id="email"
                        type="text" 
                        name="email_usuario"
                        placeholder="E-mail"
                        className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="telefone" className="mr-1">Telefone:</label>
                        <input 
                        id="telefone"
                        type="tel" 
                        name="telefone_usuario"
                        placeholder="(XX)9XXXX-XXXX"
                        className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>
                </fieldset>

                <fieldset>
                    <legend className="mb-5 mt-8">Endereço</legend>
                    
                    <p className="flex flex-col ">
                        <label htmlFor="estado" className="mr-1">Estado:</label>
                        <select 
                        id="estado"
                        type="text" 
                        name="nome_usuario"
                        className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white">

                            <option value="">Selecione...</option>
                            <option value="">Acre</option>
                            <option value="">Alagoas</option>
                            <option value="">Amapá</option>
                            <option value="">Amazonas</option>
                            <option value="">Bahía</option>
                            <option value="">Ceará</option>
                            <option value="">Distrito Federal</option>
                            <option value="">Espirito Santo</option>
                            <option value="">Goiás</option>
                            <option value="">Maranhão</option>
                            <option value="">Mato Grosso</option>
                            <option value="">Mato Grosso do Sul</option>
                            <option value="">Minas Gerais</option>
                            <option value="">Pará</option>
                            <option value="">Paraíba</option>
                            <option value="">Paraná</option>
                            <option value="">Pernambuco</option>
                            <option value="">Piauí</option>
                            <option value="">Rio de Janeiro</option>
                            <option value="">Rio Grande do Norte</option>
                            <option value="">Rio Grande do Sul</option>
                            <option value="">Rondônia</option>
                            <option value="">Roraima</option>
                            <option value="">Santa Cararina</option>
                            <option value="">São Paulo</option>
                            <option value="">Sergipe</option>
                            <option value="">Tocantins</option>

                        </select>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="cidade" className="mr-1">Cidade:</label>
                        <input 
                        id="cidade"
                        type="text" 
                        name="cidade"
                        placeholder="Ex: Maceió"
                        className="rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="rua" className="mr-1">Rua:</label>
                        <input 
                        id="rua"
                        type="text" 
                        name="rua"
                        placeholder="Ex.: Av. Getúlio Vargas"
                        className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="numero_casa" className="mr-1">Número:</label>
                        <input 
                        id="numero_casa"
                        type="number" 
                        name="numero_casa"
                        placeholder="Ex: 366"
                        className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>

                    <p className="flex flex-col mt-2">
                        <label htmlFor="complemento_endereco" className="mr-1">Complemento:</label>
                        <input 
                        id="complemento_endereco"
                        type="text" 
                        name="complemento_endereco"
                        placeholder="Opcional..."
                        className="rounded-lg border  focus:outline-none focus:ring-2 focus:ring-slate-400"/>
                    </p>
                </fieldset>
            </form>

        </div>
    )
}

export default Cadastro;