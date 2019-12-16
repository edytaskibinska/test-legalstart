import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 12px;
  text-transform: capitalize;
`;

/**
 * @desc    Custom label component
 * @param   {String}    name    i18n label key
 * @returns {Node}
 * @constructor
 */
const Label = ( { name } ) => (
  <StyledLabel htmlFor={name}>
    {name}
  </StyledLabel>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Label;
