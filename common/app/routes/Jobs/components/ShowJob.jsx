import React, { PropTypes } from 'react';
import { Row, Col, Thumbnail, Panel } from 'react-bootstrap';
import moment from 'moment';

const defaultImage =
  'https://pbs.twimg.com/' +
  'profile_images/562385977390272512/AK29YaTf_400x400.png';

const thumbnailStyle = {
  backgroundColor: 'white',
  maxHeight: '100px',
  maxWidth: '100px'
};

export default React.createClass({
  displayName: 'ShowJob',
  propTypes: {
    job: PropTypes.object,
    params: PropTypes.object
  },

  renderHeader({ company, position }) {
    return (
      <div>
        <h4 style={{ display: 'inline-block' }}>{ company }</h4>
        <h5
          className='pull-right hidden-xs hidden-md'
          style={{ display: 'inline-block' }}>
          { position }
        </h5>
      </div>
    );
  },

  render() {
    const { job = {} } = this.props;
    const {
      logo,
      position,
      city,
      company,
      state,
      locale,
      email,
      phone,
      postedOn,
      description
    } = job;

    return (
      <div>
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }
            xs={ 12 }>
            <Panel>
              <Row>
                <h2 className='text-center'>
                  { company }
                </h2>
              </Row>
              <div className='spacer' />
              <Row>
                <Col
                  md={ 3 }
                  mdPush={ 7 }>
                  <Thumbnail
                    alt={ logo ? company + 'company logo' : 'stock image' }
                    src={ logo || defaultImage }
                    style={ thumbnailStyle } />
                </Col>
                <Col
                  md={ 4 }>

                  Position: { position || 'N/A' }
                  <br />
                  Location: { locale ? locale : `${city}, ${state}` }
                  <br />
                  Contact: { email || phone || 'N/A' }
                  <br />
                  Posted On: { moment(postedOn).format('MMMM Do, YYYY') }
                </Col>
              </Row>
              <div className='spacer' />
              <Row>
                <Col
                  md={ 6 }
                  mdOffset={ 3 }
                  xs={ 12 }>
                  <p>{ description }</p>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});
