import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Horizontal from '../layout/horizontal';

import { sizing } from '../../style/variables';

const Row = styled( Horizontal )`
  align-items: flex-start;

  & + & { 
    margin-top: ${sizing.padding};
  }
`;

/**
 * @desc    Custom form row component
 * @param   {Node}    children    Child element to embed in the form row
 * @returns {Node}
 * @constructor
 */
const FormRow = ( { children } ) => (
  <Row className="form-row">
    {children}
  </Row>
);

FormRow.propTypes = {
  children: PropTypes.node,
};

FormRow.defaultProps = {
  children: null,
};

export default FormRow;
