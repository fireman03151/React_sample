/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';

import FourOhFourPage from '../../src/pages/404';
import Certification from '../../src/pages/certification';
import Learn from '../../src/pages/learn';
import { createStore } from '../../src/redux/create-store';
import layoutSelector from './layout-selector';

jest.mock('../../src/analytics');

const store = createStore();

// TODO: rather than testing which props passed from layoutSelector to the
// component it renders, test that the rendered component has the expected
// features (i.e. has a footer or not, etc.). That should be possible in
// react-testing-library.

interface NameAndProps {
  props: Record<string, unknown>;
  name: string;
}
function getComponentNameAndProps(
  elementType: React.JSXElementConstructor<never>,
  pathname: string,
  pageContext?: { challengeMeta?: { block?: string; superBlock?: string } }
): NameAndProps {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const shallow = ShallowRenderer.createRenderer();
  const LayoutReactComponent = layoutSelector({
    element: { type: elementType, props: {}, key: '' },
    props: {
      location: {
        pathname
      },
      pageContext
    }
  });
  shallow.render(<Provider store={store}>{LayoutReactComponent}</Provider>);
  const view = shallow.getRenderOutput();
  return {
    props: view.props.children.props as Record<string, unknown>,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    name: view.props.children.type.WrappedComponent.displayName
    // TODO: Revisit this when react-test-renderer is replaced with
    // react-testing-library
  };
}

const challengePageContext = {
  challengeMeta: {
    block: 'Basic HTML and HTML5',
    superBlock: 'responsive-web-design'
  }
};

test('Challenges should have DefaultLayout and no footer', () => {
  const challengePath =
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements';
  const compnentObj = getComponentNameAndProps(
    Learn,
    challengePath,
    challengePageContext
  );
  expect(compnentObj.name).toEqual('DefaultLayout');
  expect(compnentObj.props.showFooter).toEqual(false);
});

test('SuperBlock path should have DefaultLayout and footer', () => {
  const superBlockPath = '/learn/responsive-web-design/';
  const compnentObj = getComponentNameAndProps(Learn, superBlockPath);
  expect(compnentObj.name).toEqual('DefaultLayout');
  expect(compnentObj.props.showFooter).toEqual(true);
});

test('i18n challenge path should have DefaultLayout and no footer', () => {
  const challengePath =
    'espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements/';
  const compnentObj = getComponentNameAndProps(
    Learn,
    challengePath,
    challengePageContext
  );
  expect(compnentObj.name).toEqual('DefaultLayout');
  expect(compnentObj.props.showFooter).toEqual(false);
});

test('i18n superBlock path should have DefaultLayout and footer', () => {
  const superBlockPath = '/learn/responsive-web-design/';
  const compnentObj = getComponentNameAndProps(Learn, superBlockPath);
  expect(compnentObj.name).toEqual('DefaultLayout');
  expect(compnentObj.props.showFooter).toEqual(true);
});

test('404 page should have DefaultLayout and footer', () => {
  const challengePath =
    '/espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements/';
  const compnentObj = getComponentNameAndProps(FourOhFourPage, challengePath);
  expect(compnentObj.name).toEqual('DefaultLayout');
  expect(compnentObj.props.showFooter).toEqual(true);
});

test('Certification path should have CertificationLayout', () => {
  const challengePath =
    '/certification/mot01/javascript-algorithms-and-data-structures/';
  const compnentObj = getComponentNameAndProps(Certification, challengePath);
  expect(compnentObj.name).toEqual('CertificationLayout');
});
