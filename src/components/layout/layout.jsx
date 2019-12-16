import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts';
import { colors } from '../../style/variables';

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.dark {
    background-color: ${colors.black};
    color: ${colors.white};
  }
  
  &.light {
    background-color: ${colors.lightestGrey};
    color: ${colors.darkestGrey};
  }
`;

/**
 * @desc    Custom layout component
 * @param   {Node}    children    Child element to embed in the layout
 * @returns {Node}
 * @constructor
 */
const Layout = ( { children } ) => {
  const themeContext = useContext( ThemeContext );

  return (
    <LayoutContainer className={themeContext.theme}>
      {children}
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
