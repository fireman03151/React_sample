import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { createSelector } from 'reselect';
import {
  userSelector,
  isDonationModalOpenSelector
} from '../../../redux/selectors';
import {
  canFocusEditorSelector,
  consoleOutputSelector,
  visibleEditorsSelector
} from '../redux/selectors';
import { getTargetEditor } from '../utils/get-target-editor';
import './editor.css';
import { FileKey } from '../../../redux/prop-types';
import { Themes } from '../../../components/settings/theme';
import Editor, { type EditorProps } from './editor';

type VisibleEditors = {
  [key: string]: boolean;
};
type MultifileEditorProps = Pick<
  EditorProps,
  | 'usesMultifileEditor'
  | 'showProjectPreview'
  | 'title'
  | 'resizeProps'
  | 'isUsingKeyboardInTablist'
  | 'isMobileLayout'
  | 'initialTests'
  | 'editorRef'
  | 'containerRef'
  | 'challengeFiles'
  | 'description'
  // We use dimensions to trigger a re-render of the editor
  | 'dimensions'
> & {
  visibleEditors: {
    indexhtml?: boolean;
    indexjsx?: boolean;
    stylescss?: boolean;
    scriptjs?: boolean;
  };
};
const mapStateToProps = createSelector(
  visibleEditorsSelector,
  canFocusEditorSelector,
  consoleOutputSelector,
  isDonationModalOpenSelector,
  userSelector,
  (
    visibleEditors: VisibleEditors,
    canFocus: boolean,
    output: string[],
    open,
    { theme = Themes.Default }: { theme: Themes }
  ) => ({
    visibleEditors,
    canFocus: open ? false : canFocus,
    output,
    theme
  })
);

const MultifileEditor = (props: MultifileEditorProps) => {
  const {
    challengeFiles,
    containerRef,
    description,
    editorRef,
    initialTests,
    isMobileLayout,
    isUsingKeyboardInTablist,
    resizeProps,
    title,
    visibleEditors: { stylescss, indexhtml, scriptjs, indexjsx },
    usesMultifileEditor,
    showProjectPreview
  } = props;
  // TODO: the tabs mess up the rendering (scroll doesn't work properly and
  // the in-editor description)

  const reflexProps = {
    propagateDimensions: true
  };

  const targetEditor = getTargetEditor(challengeFiles);

  // Only one editor should be focused and that should happen once, after it has
  // been mounted. This ref allows the editors to co-ordinate, without having to
  // resort to redux.
  const canFocusOnMountRef = useRef(true);

  const editorKeys = [];

  if (indexjsx) editorKeys.push('indexjsx');
  if (indexhtml) editorKeys.push('indexhtml');
  if (stylescss) editorKeys.push('stylescss');
  if (scriptjs) editorKeys.push('scriptjs');

  const editorAndSplitterKeys = editorKeys.reduce((acc: string[] | [], key) => {
    if (acc.length === 0) {
      return [key];
    } else {
      return [...acc, `${key}-splitter`, key];
    }
  }, []);

  return (
    <ReflexContainer
      orientation='horizontal'
      {...reflexProps}
      {...resizeProps}
      className='editor-container'
    >
      <ReflexElement flex={10} {...reflexProps} {...resizeProps}>
        <ReflexContainer orientation='vertical'>
          {editorAndSplitterKeys.map(key => {
            const isSplitter = key.endsWith('-splitter');
            if (isSplitter) {
              return (
                <ReflexSplitter propagate={true} {...resizeProps} key={key} />
              );
            } else {
              return (
                <ReflexElement
                  data-cy={`editor-container-${key}`}
                  {...reflexProps}
                  {...resizeProps}
                  key={key}
                >
                  <Editor
                    canFocusOnMountRef={canFocusOnMountRef}
                    challengeFiles={challengeFiles}
                    containerRef={containerRef}
                    description={targetEditor === key ? description : ''}
                    editorRef={editorRef}
                    fileKey={key as FileKey}
                    initialTests={initialTests}
                    isMobileLayout={isMobileLayout}
                    isUsingKeyboardInTablist={isUsingKeyboardInTablist}
                    resizeProps={resizeProps}
                    dimensions={props.dimensions ?? { height: 0, width: 0 }}
                    title={title}
                    usesMultifileEditor={usesMultifileEditor}
                    showProjectPreview={showProjectPreview}
                  />
                </ReflexElement>
              );
            }
          })}
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
};

MultifileEditor.displayName = 'MultifileEditor';

export default connect(mapStateToProps)(MultifileEditor);
