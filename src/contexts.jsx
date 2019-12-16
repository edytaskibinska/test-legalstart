import React from 'react';

/**
 * @desc  Custom theme context definition
 * @type  {React.Context<*>}
 */
export const ThemeContext = React.createContext( {
  theme: 'light',
  toggleTheme: () => {
  },
} );
