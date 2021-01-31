import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from 'react-i18next';

import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { completedChallengesSelector, executeGA } from '../../../redux';
import Challenges from './Challenges';
import Caret from '../../../assets/icons/Caret';
import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import { Spacer } from '../../../components/helpers';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

  return createSelector(
    expandedSelector,
    completedChallengesSelector,
    (isExpanded, completedChallenges) => ({
      isExpanded,
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleBlock, executeGA }, dispatch);

const propTypes = {
  blockDashedName: PropTypes.string,
  challenges: PropTypes.array,
  completedChallenges: PropTypes.arrayOf(PropTypes.string),
  executeGA: PropTypes.func,
  isExpanded: PropTypes.bool,
  superBlockDashedName: PropTypes.string,
  t: PropTypes.func,
  toggleBlock: PropTypes.func.isRequired
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

export class Block extends Component {
  constructor(...props) {
    super(...props);

    this.handleBlockClick = this.handleBlockClick.bind(this);
  }

  handleBlockClick() {
    const { blockDashedName, toggleBlock, executeGA } = this.props;
    executeGA({
      type: 'event',
      data: {
        category: 'Map Block Click',
        action: blockDashedName
      }
    });
    return toggleBlock(blockDashedName);
  }

  renderCheckMark(isCompleted) {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  }

  renderBlockIntros(arr) {
    return (
      <div className='block-description'>
        {arr.map((str, i) => (
          <p dangerouslySetInnerHTML={{ __html: str }} key={i} />
        ))}
      </div>
    );
  }

  render() {
    const {
      blockDashedName,
      completedChallenges,
      challenges,
      isExpanded,
      superBlockDashedName,
      t
    } = this.props;

    let completedCount = 0;
    const challengesWithCompleted = challenges.map(challenge => {
      const { id } = challenge;
      const isCompleted = completedChallenges.some(
        completedId => id === completedId
      );
      if (isCompleted) {
        completedCount++;
      }
      return { ...challenge, isCompleted };
    });

    const isProjectBlock = challenges.some(challenge => {
      const isJsProject =
        challenge.order === 10 && challenge.challengeType === 5;

      const isOtherProject =
        challenge.challengeType === 3 ||
        challenge.challengeType === 4 ||
        challenge.challengeType === 10;

      const isTakeHomeProject = blockDashedName === 'take-home-projects';

      return (
        (isJsProject && !isTakeHomeProject) ||
        (isOtherProject && !isTakeHomeProject)
      );
    });

    const blockIntroObj = t(
      `intro:${superBlockDashedName}.blocks.${blockDashedName}`
    );
    const blockTitle = blockIntroObj ? blockIntroObj.title : null;
    const blockIntroArr = blockIntroObj ? blockIntroObj.intro : [];

    return isProjectBlock ? (
      <div className='block'>
        <h3>{blockTitle}</h3>
        {this.renderBlockIntros(blockIntroArr)}
        <Challenges
          challengesWithCompleted={challengesWithCompleted}
          isProjectBlock={isProjectBlock}
        />
      </div>
    ) : (
      <div className={`block ${isExpanded ? 'open' : ''}`}>
        <h3>{blockTitle}</h3>
        {this.renderBlockIntros(blockIntroArr)}
        <button
          aria-expanded={isExpanded}
          className='map-title'
          onClick={this.handleBlockClick}
        >
          <Caret />
          <h4>
            {t(`intro:misc-text.section-courses`, { section: blockTitle })}
          </h4>
          <div className='map-title-completed'>
            {this.renderCheckMark(
              completedCount === challengesWithCompleted.length
            )}
            <span className='map-completed-count'>{`${completedCount}/${challengesWithCompleted.length}`}</span>
          </div>
        </button>
        {isExpanded && (
          <Challenges
            challengesWithCompleted={challengesWithCompleted}
            isProjectBlock={isProjectBlock}
          />
        )}
        <Spacer size={2} />
      </div>
    );
  }
}

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Block));
