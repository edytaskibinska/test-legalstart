import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMessage = styled.div`
  font-size: 12px;
  color: rgba(255, 42, 42, 0.75);
`;

/**
 * @desc    Internationalized Error component
 * @param   {String}    text    i18n error key
 * @returns {Node}
 * @constructor
 */
const Error = ( { text } ) => (
  <ErrorMessage>
    {text}
  </ErrorMessage>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
