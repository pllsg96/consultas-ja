import { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [nomeCadastro, setNomeCadastro] = useState('')
  
  console.log(nomeCadastro, '-----------')

  const contextValue = {
      setNomeCadastro,
      nomeCadastro
  };

  return (
    <AppContext.Provider
      value={ contextValue }
    >
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
