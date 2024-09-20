import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [nomeCadastro, setNomeCadastro] = useState(() => {
    // Recupera o nome do localStorage ao inicializar o estado
    const savedNome = localStorage.getItem('nomeCadastro');
    return savedNome ? savedNome : '';
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que nomeCadastro mudar
    localStorage.setItem('nomeCadastro', nomeCadastro);
        console.log('eae André')
  }, [nomeCadastro]);

    useEffect(() => {
    // Atualiza o localStorage sempre que nomeCadastro mudar
    console.log('eae André')
  }, []);

  const contextValue = {
    setNomeCadastro,
    nomeCadastro,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
