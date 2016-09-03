import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';

import MapHeader from './Header.jsx';
import SuperBlock from './Super-Block.jsx';
import { fetchChallenges } from '../../redux/actions';
import { updateTitle } from '../../../../redux/actions';

const bindableActions = { fetchChallenges, updateTitle };
const mapStateToProps = createSelector(
  state => state.app.windowHeight,
  state => state.app.navHeight,
  state => state.challengesApp.superBlocks,
  (windowHeight, navHeight, superBlocks) => ({
    superBlocks,
    height: windowHeight - navHeight - 150
  })
);
const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 1;
  }
};
export class ShowMap extends PureComponent {
  static displayName = 'Map';
  static propTypes = {
    superBlocks: PropTypes.array,
    height: PropTypes.number,
    updateTitle: PropTypes.func.isRequired,
    params: PropTypes.object,
    fetchChallenges: PropTypes.func.isRequired
  };

  componentWillMount() {
    // if no params then map is open in drawer
    // do not update title
    if (!this.props.params) {
      return;
    }
    this.props.updateTitle(
      'A Map to Learn to Code and Become a Software Engineer'
    );
  }

  renderSuperBlocks(superBlocks) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return <div>No Super Blocks</div>;
    }
    return superBlocks.map(dashedName => (
      <SuperBlock
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  render() {
    const { height, superBlocks } = this.props;
    return (
      <Col xs={ 12 }>
        <MapHeader />
        <div
          className='map-accordion center-block'
          style={{ height: height + 'px' }}
          >
          { this.renderSuperBlocks(superBlocks) }
          <div className='spacer' />
        </div>
      </Col>
    );
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(ShowMap);
