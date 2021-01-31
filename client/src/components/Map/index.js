import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import i18next from 'i18next';

import { ImageLoader, Link } from '../helpers';
import LinkButton from '../../assets/icons/LinkButton';
import { dasherize } from '../../../../utils/slugs';
import './map.css';

const propTypes = {
  currentSuperBlock: PropTypes.string,
  forLanding: PropTypes.bool
};

const codingPrepRE = new RegExp('Interview Prep');

function createSuperBlockTitle(str) {
  const superBlockTitle = i18next.t(`intro:${dasherize(str)}.title`);
  return codingPrepRE.test(str)
    ? `${superBlockTitle} ${i18next.t('learn.cert-map-estimates.coding-prep')}`
    : `${superBlockTitle} ${i18next.t('learn.cert-map-estimates.certs')}`;
}

const iconStyle = {
  width: '55px',
  height: '55px',
  marginRight: '20px'
};

const linkSpacingStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

function renderLandingMap(nodes) {
  nodes = nodes.filter(node => node.superBlock !== 'Coding Interview Prep');
  return (
    <ul data-test-label='certifications'>
      {nodes.map((node, i) => (
        <li key={i}>
          <Link
            className='btn link-btn btn-lg'
            to={`/learn/${dasherize(node.superBlock)}/`}
          >
            <div style={linkSpacingStyle}>
              <ImageLoader
                alt='building a website'
                offsetVertical={500}
                src={i18next.t(`intro:${dasherize(node.superBlock)}.icon`)}
                style={iconStyle}
              />
              {i18next.t(`intro:${dasherize(node.superBlock)}.title`)}
            </div>
            <LinkButton />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function renderLearnMap(nodes, currentSuperBlock = '') {
  nodes = nodes.filter(node => node.superBlock !== currentSuperBlock);
  return (
    <Row>
      <Col sm={10} smOffset={1} xs={12}>
        <ul data-test-label='learn-curriculum-map'>
          {nodes.map((node, i) => (
            <li key={i}>
              <Link
                className='btn link-btn btn-lg'
                to={`/learn/${dasherize(node.superBlock)}/`}
              >
                <div style={linkSpacingStyle}>
                  <ImageLoader
                    alt='building a website'
                    offsetVertical={500}
                    src={i18next.t(`intro:${dasherize(node.superBlock)}.icon`)}
                    style={iconStyle}
                  />
                  {createSuperBlockTitle(node.superBlock)}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

export function Map({ forLanding = false, currentSuperBlock = '' }) {
  /*
   * this query gets the first challenge from each block and the second block
   * from each superblock, leaving you with one challenge from each
   * superblock
   */
  const data = useStaticQuery(graphql`
    query SuperBlockNodes {
      allChallengeNode(
        sort: { fields: [superOrder] }
        filter: { order: { eq: 2 }, challengeOrder: { eq: 1 } }
      ) {
        nodes {
          superBlock
          dashedName
        }
      }
    }
  `);

  let nodes = data.allChallengeNode.nodes;

  return (
    <div className='map-ui' data-test-label='learn-curriculum-map'>
      {forLanding
        ? renderLandingMap(nodes)
        : renderLearnMap(nodes, currentSuperBlock)}
    </div>
  );
}

Map.displayName = 'Map';
Map.propTypes = propTypes;

export default Map;
