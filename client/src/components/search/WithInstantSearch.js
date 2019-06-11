import React, { Component } from 'react';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import qs from 'query-string';

import {
  isSearchDropdownEnabledSelector,
  searchQuerySelector,
  toggleSearchDropdown,
  updateSearchQuery
} from './redux';

import { createSelector } from 'reselect';

const propTypes = {
  children: PropTypes.any,
  isDropdownEnabled: PropTypes.bool,
  location: PropTypes.object.isRequired,
  query: PropTypes.string,
  toggleSearchDropdown: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  searchQuerySelector,
  isSearchDropdownEnabledSelector,
  (query, isDropdownEnabled) => ({ query, isDropdownEnabled })
);
const mapDispatchToProps = {
  toggleSearchDropdown,
  updateSearchQuery
};

const searchStateToUrl = ({ pathname }, query) =>
  `${pathname}${query ? `?${qs.stringify({ query })}` : ''}`;

const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

class InstantSearchRoot extends Component {
  componentDidMount() {
    const { toggleSearchDropdown } = this.props;
    toggleSearchDropdown(!this.isSearchPage());
    this.setQueryFromURL();
  }

  componentDidUpdate(prevProps) {
    const { location, toggleSearchDropdown, isDropdownEnabled } = this.props;

    const enableDropdown = !this.isSearchPage();
    if (isDropdownEnabled !== enableDropdown) {
      toggleSearchDropdown(enableDropdown);
    }

    if (location !== prevProps.location) {
      const { query, updateSearchQuery } = this.props;
      if (this.isSearchPage()) {
        this.setQueryFromURL();
      } else if (query) {
        updateSearchQuery('');
      }
    }
  }

  isSearchPage = () => this.props.location.pathname.startsWith('/search');

  setQueryFromURL = () => {
    if (this.isSearchPage()) {
      const { updateSearchQuery, location, query } = this.props;
      const { query: queryFromURL } = urlToSearchState(location);
      if (query !== queryFromURL) {
        updateSearchQuery(queryFromURL);
      }
    }
  };

  onSearchStateChange = ({ query }) => {
    const { updateSearchQuery, query: propsQuery } = this.props;
    if (propsQuery === query || typeof query === 'undefined') {
      return;
    }
    updateSearchQuery(query);
    this.updateBrowserHistory(query);
  };

  updateBrowserHistory = query => {
    if (this.isSearchPage()) {
      clearTimeout(this.debouncedSetState);

      this.debouncedSetState = setTimeout(() => {
        if (this.isSearchPage()) {
          window.history.pushState(
            { query },
            null,
            searchStateToUrl(this.props.location, query)
          );
        }
      }, 400);
    }
  };

  render() {
    const { query } = this.props;
    return (
      <InstantSearch
        apiKey='4318af87aa3ce128708f1153556c6108'
        appId='QMJYL5WYTI'
        indexName='query_suggestions'
        onSearchStateChange={this.onSearchStateChange}
        searchState={{ query }}
      >
        <Configure hitsPerPage={8} />
        {this.props.children}
      </InstantSearch>
    );
  }
}

InstantSearchRoot.displayName = 'InstantSearchRoot';
InstantSearchRoot.propTypes = propTypes;

const InstantSearchRootConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(InstantSearchRoot);

const WithInstantSearch = ({ children }) => (
  <Location>
    {({ location }) => (
      <InstantSearchRootConnected location={location}>
        {children}
      </InstantSearchRootConnected>
    )}
  </Location>
);

WithInstantSearch.displayName = 'WithInstantSearch';
WithInstantSearch.propTypes = { children: PropTypes.any };

export default WithInstantSearch;
