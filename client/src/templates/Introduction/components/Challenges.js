import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'gatsby';
import { withTranslation } from 'react-i18next';

import { completedChallengesSelector, executeGA } from '../../../redux';
import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';

const mapStateToProps = state => {
  return createSelector(
    completedChallengesSelector,
    completedChallenges => ({
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ executeGA }, dispatch);

const propTypes = {
  challengesWithCompleted: PropTypes.array,
  executeGA: PropTypes.func,
  isProjectBlock: PropTypes.bool
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

export class Challenges extends Component {
  constructor(...props) {
    super(...props);

    this.handleChallengeClick = this.handleChallengeClick.bind(this);
  }

  handleChallengeClick(slug) {
    return () => {
      return this.props.executeGA({
        type: 'event',
        data: {
          category: 'Map Challenge Click',
          action: slug
        }
      });
    };
  }

  renderCheckMark(isCompleted) {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  }

  render() {
    const { challengesWithCompleted, isProjectBlock } = this.props;

    return (
      <ul className='map-challenges-ul'>
        {[...challengesWithCompleted].map(challenge => (
          <li
            className={`map-challenge-title ${
              isProjectBlock ? 'map-project-wrap' : ''
            }`}
            id={challenge.dashedName}
            key={'map-challenge' + challenge.fields.slug}
          >
            {!isProjectBlock ? (
              <Link
                onClick={this.handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
              >
                <span className='badge map-badge'>
                  {this.renderCheckMark(challenge.isCompleted)}
                </span>
                {challenge.title}
              </Link>
            ) : (
              <Link
                onClick={this.handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
              >
                {challenge.title}
                <span className='badge map-badge map-project-checkmark'>
                  {this.renderCheckMark(challenge.isCompleted)}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

Challenges.displayName = 'Challenges';
Challenges.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Challenges));
