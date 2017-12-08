import React from 'react';
import { addNS } from 'berkeleys-redux-utils';

import Editor from './Editor.jsx';
import { types, showPreviewSelector } from '../../redux';
import Preview from '../../Preview.jsx';
import SidePanel from '../../Side-Panel.jsx';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

const propTypes = {};

export const mapStateToPanes = addNS(
  'classic',
  state => {
    const panesMap = {
      [types.toggleMap]: 'Map',
      [types.toggleSidePanel]: 'Side Panel',
      [types.toggleClassicEditor]: 'Editor'
    };

    if (showPreviewSelector(state)) {
      panesMap[types.togglePreview] = 'Preview';
    }
    return panesMap;
  }
);

const nameToComponent = {
  Map: _Map,
  'Side Panel': SidePanel,
  Editor: Editor,
  Preview: Preview
};

const renderPane = name => {
  const Comp = nameToComponent[name];
  return Comp ? <Comp /> : <span>Pane for { name } not found</span>;
};

export default function ShowClassic() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes render={ renderPane }/>
    </ChildContainer>
  );
}

ShowClassic.displayName = 'ShowClassic';
ShowClassic.propTypes = propTypes;
