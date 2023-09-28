import i18next from 'i18next';
import React, { Component, ReactElement } from 'react';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@freecodecamp/ui';

import {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane
} from '../redux/actions';
import {
  portalWindowSelector,
  showPreviewPortalSelector,
  showPreviewPaneSelector
} from '../redux/selectors';
import { TOOL_PANEL_HEIGHT } from '../../../../config/misc';
import ToolPanel from '../components/tool-panel';
import PreviewPortal from '../components/preview-portal';
import EditorTabs from './editor-tabs';

interface MobileLayoutProps {
  editor: JSX.Element | null;
  guideUrl: string;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: JSX.Element;
  notes: ReactElement;
  preview: JSX.Element;
  windowTitle: string;
  showPreviewPortal: boolean;
  showPreviewPane: boolean;
  removePortalWindow: () => void;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  portalWindow: null | Window;
  updateUsingKeyboardInTablist: (arg0: boolean) => void;
  testOutput: JSX.Element;
  videoUrl: string;
  usesMultifileEditor: boolean;
}

enum Tab {
  Editor = 'editor',
  Preview = 'preview',
  Console = 'console',
  Notes = 'notes',
  Instructions = 'instructions'
}

interface MobileLayoutState {
  currentTab: Tab;
}

const mapDispatchToProps = {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane
};

const mapStateToProps = createSelector(
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  portalWindowSelector,

  (
    showPreviewPortal: boolean,
    showPreviewPane: boolean,
    portalWindow: null | Window
  ) => ({
    showPreviewPortal,
    showPreviewPane,
    portalWindow
  })
);

class MobileLayout extends Component<MobileLayoutProps, MobileLayoutState> {
  static displayName: string;

  #toolPanelGroup!: HTMLElement;

  state: MobileLayoutState = {
    currentTab: this.props.hasEditableBoundaries ? Tab.Editor : Tab.Instructions
  };

  switchTab = (tab: string): void => {
    this.setState({
      currentTab: tab as Tab
    });
  };

  // Keep the tool panel visible when mobile address bar and/or keyboard are in view.
  setToolPanelPosition = (): void => {
    // Detect the appearance of the mobile virtual keyboard.
    if (visualViewport?.height && window.innerHeight > visualViewport.height) {
      setTimeout(() => {
        if (visualViewport?.height !== undefined && this.#toolPanelGroup) {
          this.#toolPanelGroup.style.top =
            String(visualViewport.height - TOOL_PANEL_HEIGHT) + 'px';
        }
      }, 200);
    } else {
      if (visualViewport?.height !== undefined) {
        // restore the height of html element on Firefox.
        document.documentElement.style.height = '100%';
        if (this.#toolPanelGroup)
          this.#toolPanelGroup.style.top =
            String(window.innerHeight - TOOL_PANEL_HEIGHT) + 'px';
      }
    }
  };

  isMobileDevice = (): RegExpExecArray | null =>
    /iPhone|Android.+Mobile/.exec(navigator.userAgent);

  componentDidMount(): void {
    this.#toolPanelGroup = (
      document.getElementsByClassName(
        'tool-panel-group-mobile'
      ) as HTMLCollectionOf<HTMLElement>
    )[0];

    if (this.isMobileDevice()) {
      visualViewport?.addEventListener('resize', this.setToolPanelPosition);
      if (this.#toolPanelGroup)
        this.#toolPanelGroup.style.top =
          String(window.innerHeight - TOOL_PANEL_HEIGHT) + 'px';
    }
  }

  componentWillUnmount(): void {
    if (this.isMobileDevice()) {
      visualViewport?.removeEventListener('resize', this.setToolPanelPosition);
      document.documentElement.style.height = '100%';
    }
  }

  handleKeyDown = (): void => this.props.updateUsingKeyboardInTablist(true);

  handleClick = (): void => this.props.updateUsingKeyboardInTablist(false);

  render(): JSX.Element {
    const { currentTab } = this.state;
    const {
      hasEditableBoundaries,
      instructions,
      editor,
      testOutput,
      hasNotes,
      hasPreview,
      notes,
      preview,
      showPreviewPane,
      showPreviewPortal,
      removePortalWindow,
      setShowPreviewPane,
      setShowPreviewPortal,
      portalWindow,
      windowTitle,
      guideUrl,
      videoUrl,
      usesMultifileEditor
    } = this.props;

    const displayPreviewPane = hasPreview && showPreviewPane;
    const displayPreviewPortal = hasPreview && showPreviewPortal;

    const togglePane = (pane: string): void => {
      if (pane === 'showPreviewPane') {
        if (!showPreviewPane && showPreviewPortal) {
          setShowPreviewPortal(false);
        }
        setShowPreviewPane(!showPreviewPane);
        portalWindow?.close();
        removePortalWindow();
      } else if (pane === 'showPreviewPortal') {
        if (!showPreviewPortal && showPreviewPane) {
          setShowPreviewPane(false);
        }
        setShowPreviewPortal(!showPreviewPortal);
        if (showPreviewPortal) {
          portalWindow?.close();
          removePortalWindow();
        }
      } else {
        setShowPreviewPane(true);
        setShowPreviewPortal(false);
      }
    };

    // sets screen reader text for the portal button
    function getPortalBtnSrText() {
      // preview open in main window
      let portalBtnSrText = i18next.t('aria.move-preview-to-new-window');

      // preview open in external window
      if (showPreviewPortal && !showPreviewPane) {
        portalBtnSrText = i18next.t('aria.close-external-preview-window');
      }

      return portalBtnSrText;
    }

    // Unlike the desktop layout the mobile version does not have an ActionRow,
    // but still needs a way to switch between the different tabs.

    return (
      <>
        <Tabs
          id='mobile-layout'
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.handleClick}
          onTouchStart={this.handleClick}
          defaultValue={currentTab}
          onValueChange={this.switchTab}
          {...(hasPreview && { 'data-haspreview': 'true' })}
        >
          <TabsList className='nav-lists'>
            {!hasEditableBoundaries && (
              <TabsTrigger value={Tab.Instructions}>
                {i18next.t('learn.editor-tabs.instructions')}
              </TabsTrigger>
            )}
            <TabsTrigger value={Tab.Editor}>
              {i18next.t('learn.editor-tabs.code')}
            </TabsTrigger>
            {hasNotes && usesMultifileEditor && (
              <TabsTrigger value={Tab.Notes}>
                {i18next.t('learn.editor-tabs.notes')}
              </TabsTrigger>
            )}
            <TabsTrigger value={Tab.Console}>
              {i18next.t('learn.editor-tabs.console')}
            </TabsTrigger>
            {hasPreview && (
              <TabsTrigger value={Tab.Preview}>
                {i18next.t('learn.editor-tabs.preview')}
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent tabIndex={-1} className='tab-content' value={Tab.Editor}>
            {usesMultifileEditor && <EditorTabs />}
            {editor}
          </TabsContent>
          {!hasEditableBoundaries && (
            <TabsContent
              tabIndex={-1}
              className='tab-content'
              value={Tab.Instructions}
            >
              {instructions}
            </TabsContent>
          )}
          <TabsContent
            tabIndex={-1}
            className='tab-content'
            value={Tab.Console}
          >
            {testOutput}
          </TabsContent>
          {hasNotes && usesMultifileEditor && (
            <TabsContent
              tabIndex={-1}
              className='tab-content'
              value={Tab.Notes}
            >
              {notes}
            </TabsContent>
          )}
          {hasPreview && (
            <TabsContent
              tabIndex={-1}
              className='tab-content'
              value={Tab.Preview}
              forceMount
              // forceMount causes the preview tabpanel to never be hidden,
              // so we need to manually add it when preview is not active.
              {...(this.state.currentTab === 'preview' ? {} : { hidden: true })}
            >
              <div className='portal-button-wrap'>
                <button
                  className='portal-button'
                  aria-expanded={!!showPreviewPortal}
                  onClick={() => togglePane('showPreviewPortal')}
                >
                  <span className='sr-only'>{getPortalBtnSrText()}</span>
                  <FontAwesomeIcon icon={faWindowRestore} />
                </button>
              </div>
              {displayPreviewPane && preview}
              {showPreviewPortal && (
                <p className='preview-external-window'>
                  {i18next.t('learn.preview-external-window')}
                </p>
              )}
            </TabsContent>
          )}
          {!hasEditableBoundaries && (
            <ToolPanel
              guideUrl={guideUrl}
              isMobile={true}
              videoUrl={videoUrl}
            />
          )}
          {hasPreview && this.state.currentTab !== 'preview' && (
            <div className='portal-button-wrap'>
              <button
                className='portal-button'
                aria-expanded={!!showPreviewPortal}
                onClick={() => togglePane('showPreviewPortal')}
              >
                <span className='sr-only'>{getPortalBtnSrText()}</span>
                <FontAwesomeIcon icon={faWindowRestore} />
              </button>
            </div>
          )}
        </Tabs>
        {displayPreviewPortal && (
          <PreviewPortal windowTitle={windowTitle}>{preview}</PreviewPortal>
        )}
      </>
    );
  }
}

MobileLayout.displayName = 'MobileLayout';

export default connect(mapStateToProps, mapDispatchToProps)(MobileLayout);
