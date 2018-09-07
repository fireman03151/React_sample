import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@freecodecamp/react-bootstrap';

function SlimWidthRow({ children, ...restProps }) {
  return (
    <Row {...restProps}>
      <Col md={6} mdOffset={3} sm={12}>
        {children}
      </Col>
    </Row>
  );
}

SlimWidthRow.displayName = 'SlimWidthRow';
SlimWidthRow.propTypes = {
  children: PropTypes.any
};

export default SlimWidthRow;
