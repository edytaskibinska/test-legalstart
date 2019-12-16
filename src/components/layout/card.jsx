import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts';
import { colors } from '../../style/variables';

const CardContainer = styled.div`
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.light {
    background-color: ${colors.white};
    box-shadow: 0 4px 10px 0 rgba(15, 59, 47, 0.05);
  }
  
  &.dark {
    background-color: ${colors.darkestGrey};
    box-shadow: 0 4px 10px 0 rgba(226, 234, 232, 0.1);
  }
`;

/**
 * @desc    Custom card component
 * @param   {Node}    children    Child element to embed in the card component
 * @returns {Node}
 * @constructor
 */
const Card = ( { children } ) => {
  const themeContext = useContext( ThemeContext );

  return (
    <CardContainer className={themeContext.theme}>
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
