import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { isEmpty } from 'lodash';

const Suggestion = ({ hit, handleMouseEnter, handleMouseLeave }) => {
  const dropdownFooter = hit.objectID.includes('default-hit-');
  return isEmpty(hit) || isEmpty(hit.objectID) ? null : (
    <a
      className={
        dropdownFooter
          ? 'fcc_suggestion_footer fcc_suggestion_item'
          : 'fcc_suggestion_item'
      }
      href={
        dropdownFooter
          ? `https://freecodecamp.org/news/search/?query=${encodeURIComponent(
              hit.query
            )}`
          : hit.url
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className='hit-name'>
        {dropdownFooter ? (
          <Highlight attribute='query' hit={hit} tagName='strong' />
        ) : (
          <Highlight attribute='title' hit={hit} />
        )}
      </span>
    </a>
  );
};

Suggestion.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  hit: PropTypes.object
};

export default Suggestion;
