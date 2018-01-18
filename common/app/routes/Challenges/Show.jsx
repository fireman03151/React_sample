import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { challengeMetaSelector } from './redux';

import Classic from './views/classic';
import Step from './views/step';
import Project from './views/project';
import BackEnd from './views/backend';
import Quiz from './views/quiz';
import Modern from './views/Modern';

import {
  fetchChallenge,
  challengeSelector,
  updateTitle
} from '../../redux';
import { makeToast } from '../../Toasts/redux';
import { paramsSelector } from '../../Router/redux';

const views = {
  backend: BackEnd,
  classic: Classic,
  modern: Modern,
  project: Project,
  quiz: Quiz,
  simple: Project,
  step: Step
};

const mapDispatchToProps = {
  fetchChallenge,
  makeToast,
  updateTitle
};

const mapStateToProps = createSelector(
  challengeSelector,
  challengeMetaSelector,
  paramsSelector,
  (
    { dashedName, isTranslated },
    { viewType, title },
    params
  ) => ({
    challenge: dashedName,
    isTranslated,
    params,
    title,
    viewType
  })
);

const link = 'http://forum.freecodecamp.org/t/' +
  'guidelines-for-translating-free-code-camp' +
  '-to-any-language/19111';
const helpUsTranslate = <a href={ link } target='_blank'>Help Us</a>;
const propTypes = {
  isTranslated: PropTypes.bool,
  makeToast: PropTypes.func.isRequired,
  params: PropTypes.shape({
    block: PropTypes.string,
    dashedName: PropTypes.string,
    lang: PropTypes.string.isRequired
  }),
  title: PropTypes.string,
  updateTitle: PropTypes.func.isRequired,
  viewType: PropTypes.string
};

export class Show extends PureComponent {

  isNotTranslated({ isTranslated, params: { lang } }) {
    return lang !== 'en' && !isTranslated;
  }

  makeTranslateToast() {
    this.props.makeToast({
      message: 'We haven\'t translated this challenge yet.',
      action: helpUsTranslate,
      timeout: 15000
    });
  }

  componentDidMount() {
    this.props.updateTitle(this.props.title);
    if (this.isNotTranslated(this.props)) {
      this.makeTranslateToast();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.title !== nextProps.title) {
      this.props.updateTitle(nextProps.title);
    }
    const { params: { dashedName } } = nextProps;
    if (
      this.props.params.dashedName !== dashedName &&
      this.isNotTranslated(nextProps)
    ) {
      this.makeTranslateToast();
    }
  }

  render() {
    const { viewType } = this.props;
    const View = views[viewType] || Classic;
    return  <View />;
  }
}

Show.displayName = 'Show(ChallengeView)';
Show.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Show);
