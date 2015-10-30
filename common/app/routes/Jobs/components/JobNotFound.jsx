import React, { createClass } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col, Panel } from 'react-bootstrap';

export default createClass({
  displayName: 'NoJobFound',

  render() {
    return (
      <div>
        <Row>
          <Col
            md={ 6 }
            mdOffset={ 3 }>
            <Panel>
              No job found...
              <LinkContainer to='/jobs'>
                <Button
                  block={ true }
                  bsSize='large'
                  bsStyle='primary'>
                  Go to the job board
                </Button>
              </LinkContainer>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});
