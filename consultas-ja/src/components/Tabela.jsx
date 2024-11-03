export function Tabela() {

    const lista_cadastros = []

    for (let i = 1; i <= localStorage.length; i++) {
        
        let cadastro = JSON.parse(localStorage.getItem(i))
        

        if (cadastro !== null) { // exclui item null da lista de cadastros
            
            lista_cadastros[i] = cadastro 
        }
    }   

    return (
        <>
            <div className="overflow-x-auto max-h-64 overflow-y-auto">
                <table className="table-auto text-left border-collapse">
                    
                    <thead className="sticky top-0">
                        <tr className="bg-gray-300">
                            <th className="px-4 py-2 border">Nome</th>
                            <th className="px-4 py-2 border">CPF</th>
                            <th className="px-4 py-2 border">Telefone</th>
                            <th className="px-4 py-2 border">Outros dados</th>
                        </tr>
                    </thead>
                    
                    <tbody id="cadastros">
                        {lista_cadastros.map((cadastro, index) => (
                            <tr key={index} className="even:bg-gray-100"> {/* key necessária para identificar o componente e evitar retorno de erro */}
                                <td className="px-4 py-2 border whitespace-nowrap">{cadastro.nome}</td>
                                <td className="px-4 py-2 border whitespace-nowrap">{cadastro.cpf}</td>
                                <td className="px-4 py-2 border whitespace-nowrap">{cadastro.telefone}</td>
                                <td className="px-4 py-2 border whitespace-nowrap">{cadastro.dados_adicionais}</td>
                            </tr>
                        ))}
                    </tbody>
               
                </table>

            </div>
        </>
    )
}