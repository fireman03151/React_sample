import React, { PropTypes } from 'react';
import { Thumbnail, Panel, Well } from 'react-bootstrap';
import moment from 'moment';

const thumbnailStyle = {
  backgroundColor: 'white',
  maxHeight: '100px',
  maxWidth: '100px'
};
export default React.createClass({
  displayName: 'ShowJob',
  propTypes: {
    job: PropTypes.object
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
    const { job } = this.props;
    const {
      logo,
      position,
      city,
      state,
      email,
      phone,
      postedOn,
      description
    } = job;

    return (
      <Well>
        <Thumbnail
          alt='200x200' src={ logo }
          style={ thumbnailStyle } />
        <Panel>
          Position: { position }
          Location: { city }, { state }
          <br />
          Contact: { email || phone || 'N/A' }
          <br />
          Posted On: { moment(postedOn).format('MMMM Do, YYYY') }
        </Panel>
        <p>{ description }</p>
      </Well>
    );
  }
});
