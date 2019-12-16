import React, { useContext, useState } from 'react';
import ToggleButton from 'react-toggle-button';

import { ThemeContext } from '../../contexts';

import Nav from './nav';
import Horizontal from './horizontal';

/**
 * @desc    Custom test navbar component
 * @returns {Node}
 * @constructor
 */
const Navbar = () => {
  const [isLight, setIsLight] = useState( true );
  const themeContext = useContext( ThemeContext );

  return (
    <Nav
      left={(
        <h2>
          LegalStart Test
        </h2>
      )}
      right={(
        <Horizontal>
          <ToggleButton
            inactiveLabel={<p>🌙</p>}
            activeLabel={<p>💡</p>}
            value={isLight}
            onToggle={() => {
              setIsLight( !isLight );
              themeContext.toggleTheme();
            }}
            colors={{
              activeThumb: {
                base: 'rgb(250,250,250)',
              },
              active: {
                base: 'rgb(177, 191, 215)',
                hover: 'rgb(177, 191, 215)',
              },
            }}
          />
        </Horizontal>
      )}
    />
  );
};

export default Navbar;
