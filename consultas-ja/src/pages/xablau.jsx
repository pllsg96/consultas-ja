import { useContext } from "react";
import AppContext from '../context/AppContext';

function Xablau() {
  const {
      nomeCadastro,
  } = useContext(AppContext);

  return (
    <div className='bg-orange-500'>
      <h1>Xablassssssssssssssssu</h1>
      <h2>{nomeCadastro.nome}</h2>
      <h2>{nomeCadastro.nascimento}</h2>
    </div>
  );
}

export default Xablau;
