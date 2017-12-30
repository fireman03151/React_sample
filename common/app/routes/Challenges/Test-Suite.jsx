import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';

const propTypes = {
  tests: PropTypes.arrayOf(PropTypes.object)
};

function getAccessibleText(err, pass, text) {
  let accessibleText = 'Waiting';

  // Determine test status (i.e. icon)
  if (err) {
    accessibleText = 'Error';
  } else if (pass) {
    accessibleText = 'Pass';
  }

  // Append the text itself
  return accessibleText + ' - ' + text;
}

export default class TestSuite extends PureComponent {
  renderTests(tests = []) {
    // err && pass > invalid state
    // err && !pass > failed tests
    // !err && pass > passed tests
    // !err && !pass > in-progress
    return tests.map(({ err, pass = false, text = '' }, index)=> {
      const iconClass = classnames({
        'big-icon': true,
        'ion-close-circled error-icon': err && !pass,
        'ion-checkmark-circled success-icon': !err && pass,
        'ion-refresh refresh-icon': !err && !pass
      });
      return (
        <Row
          aria-label={ getAccessibleText(err, pass, text) }
          key={ text.slice(-6) + index }
          tabIndex='0'
          >
          <Col
            className='text-center'
            xs={ 2 }
            >
            <i
              aria-hidden='true'
              className={ iconClass }
            />
          </Col>
          <Col
            aria-hidden='true'
            className='test-output'
            dangerouslySetInnerHTML={{ __html: text }}
            xs={ 10 }
          />
        </Row>
      );
    });
  }

  render() {
    const { tests } = this.props;
    return (
      <div
        className={ `${ns}-test-suite` }
        style={{ marginTop: '10px' }}
        >
        { this.renderTests(tests) }
        <div className='big-spacer' />
      </div>
    );
  }
}

TestSuite.displayName = 'TestSuite';
TestSuite.propTypes = propTypes;
