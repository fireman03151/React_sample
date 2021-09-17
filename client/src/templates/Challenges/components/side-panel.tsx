import React, { useEffect, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { mathJaxScriptLoader } from '../../../utils/script-loaders';
import { challengeTestsSelector } from '../redux';
import TestSuite from './Test-Suite';
import ToolPanel from './Tool-Panel';

import './side-panel.css';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  (tests: Record<string, unknown>[]) => ({
    tests
  })
);
interface SidePanelProps {
  block: string;
  challengeDescription: ReactElement;
  challengeTitle: ReactElement;
  guideUrl?: string;
  instructionsPanelRef: React.RefObject<HTMLDivElement>;
  showToolPanel: boolean;
  tests?: Record<string, unknown>[];
  videoUrl?: string;
}

export function SidePanel({
  block,
  challengeDescription,
  challengeTitle,
  guideUrl,
  instructionsPanelRef,
  showToolPanel = false,
  tests,
  videoUrl
}: SidePanelProps): JSX.Element {
  useEffect(() => {
    const MathJax = global.MathJax;
    const mathJaxMountPoint = document.querySelector('#mathjax');
    const mathJaxChallenge =
      block === 'rosetta-code' || block === 'project-euler';
    if (MathJax) {
      // Configure MathJax when it's loaded and
      // users navigate from another challenge
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ],
          processEscapes: true,
          processClass: 'rosetta-code|project-euler'
        }
      });
      MathJax.Hub.Queue([
        'Typeset',
        MathJax.Hub,
        document.querySelector('.rosetta-code'),
        document.querySelector('.project-euler')
      ]);
    } else if (!mathJaxMountPoint && mathJaxChallenge) {
      mathJaxScriptLoader();
    }
  }, [block]);

  return (
    <div
      className='instructions-panel'
      ref={instructionsPanelRef}
      role='complementary'
      tabIndex={-1}
    >
      {challengeTitle}
      {challengeDescription}
      {/* @ts-expect-error ToolPanel's redux props are being inferred here, but we don't need to provide them here */}
      {showToolPanel && <ToolPanel guideUrl={guideUrl} videoUrl={videoUrl} />}
      <TestSuite tests={tests} />
    </div>
  );
}

SidePanel.displayName = 'SidePanel';

export default connect(mapStateToProps)(SidePanel);
