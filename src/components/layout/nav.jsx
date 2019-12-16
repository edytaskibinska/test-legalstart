import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts';
import { colors, sizing } from '../../style/variables';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: ${sizing.padding} calc(2 * ${sizing.padding});
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.dark {
    background-color: ${colors.darkestGrey};
    box-shadow: 0 4px 10px 0 rgba(226, 234, 232, 0.1);
  }
  
  &.light {
    background-color: ${colors.white};
    box-shadow: 0 4px 10px 0 rgba(15, 59, 47, 0.05);
  }
`;

/**
 * @desc    Custom navbar component
 * @param   {Node}    left    Child component to embed in the left side of the navbar
 * @param   {Node}    right   Child component to embed in the right side of the navbar
 * @returns {Node}
 * @constructor
 */
const Nav = ( { left, right } ) => {
  const themeContext = useContext( ThemeContext );

  return (
    <StyledNav className={themeContext.theme}>
      {left}
      {right}
    </StyledNav>
  );
};

Nav.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

Nav.defaultProps = {
  left: null,
  right: null,
};

export default Nav;
