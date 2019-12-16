import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useForm, { FormContext } from 'react-hook-form';

import { ThemeContext } from './contexts';

/**
 * @desc    Custom provider used to setup everything needed for the theme context
 * @param   {Node}    children    Child element to embed in the provider
 * @returns {Node}
 * @constructor
 */
const ThemeProvider = ( { children } ) => {
  const [theme, setTheme] = useState( 'light' );
  const methods = useForm();

  const toggleTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light' );
  };

  const context = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={context}>
      <FormContext {...methods}>
        {children}
      </FormContext>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
