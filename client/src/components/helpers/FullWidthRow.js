import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@freecodecamp/react-bootstrap';

function FullWidthRow({ children, className }) {
  return (
    <Row className={className}>
      <Col sm={8} smOffset={2} xs={12}>
        {children}
      </Col>
    </Row>
  );
}

FullWidthRow.displayName = 'FullWidthRow';
FullWidthRow.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default FullWidthRow;
