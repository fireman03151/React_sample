import React from 'react';
import { addNS } from 'berkeleys-redux-utils';

import ns from './ns.json';
import Main from './Quiz.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

const propTypes = {};
export const mapStateToPanes = addNS(
  ns,
  () => ({
    [types.toggleMap]: 'Map',
    [types.toggleMain]: 'Main'
  })
);

const nameToComponent = {
  Map: _Map,
  Main: Main
};

const renderPane = name => {
  const Comp = nameToComponent[name];
  return Comp ? <Comp /> : <span>Pane { name } not found</span>;
};

export default function ShowQuiz() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes render={ renderPane }/>
    </ChildContainer>
  );
}

ShowQuiz.displayName = 'ShowQuiz';
ShowQuiz.propTypes = propTypes;
