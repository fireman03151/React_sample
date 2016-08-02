import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import Editor from './Editor.jsx';
import SidePanel from './Side-Panel.jsx';
import Preview from './Preview.jsx';
import BugModal from '../Bug-Modal.jsx';
import { challengeSelector } from '../../redux/selectors';
import {
  executeChallenge,
  updateMain,
  updateFile,
  loadCode
} from '../../redux/actions';

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.tests,
  state => state.challengesApp.files,
  state => state.challengesApp.key,
  (
    { showPreview, mode },
    tests,
    files = {},
    key = ''
  ) => ({
    content: files[key] && files[key].contents || '',
    file: files[key],
    showPreview,
    mode,
    tests
  })
);

const bindableActions = {
  executeChallenge,
  updateFile,
  updateMain,
  loadCode
};

export class Challenge extends PureComponent {
  static displayName = 'Challenge';

  static propTypes = {
    showPreview: PropTypes.bool,
    content: PropTypes.string,
    mode: PropTypes.string,
    updateFile: PropTypes.func,
    executeChallenge: PropTypes.func,
    updateMain: PropTypes.func,
    loadCode: PropTypes.func
  };

  componentDidMount() {
    this.props.loadCode();
    this.props.updateMain();
  }

  renderPreview(showPreview) {
    if (!showPreview) {
      return null;
    }
    return (
      <Col
        lg={ 3 }
        md={ 4 }
        >
        <Preview />
      </Col>
    );
  }

  render() {
    const {
      content,
      updateFile,
      file,
      mode,
      showPreview,
      executeChallenge
    } = this.props;
    return (
      <div>
        <Col
          lg={ showPreview ? 3 : 4 }
          md={ showPreview ? 3 : 4 }
          >
          <SidePanel />
        </Col>
        <Col
          lg={ showPreview ? 6 : 8 }
          md={ showPreview ? 5 : 8 }
          >
          <Editor
            content={ content }
            executeChallenge={ executeChallenge }
            mode={ mode }
            updateFile={ content => updateFile(content, file) }
          />
        </Col>
        { this.renderPreview(showPreview) }
        <BugModal />
      </div>
    );
  }
}

export default connect(mapStateToProps, bindableActions)(Challenge);
