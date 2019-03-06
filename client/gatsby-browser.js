import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { createStore } from './src/redux/createStore';
import AppMountNotifier from './src/components/AppMountNotifier';

import {
  CertificationLayout,
  DefaultLayout,
  GuideLayout
} from './src/components/layouts';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <AppMountNotifier render={() => element} />
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const wrapPageElement = ({ element, props }) => {
  const {
    location: { pathname }
  } = props;
  if (pathname === '/') {
    return (
      <DefaultLayout disableSettings={true} landingPage={true}>
        {element}
      </DefaultLayout>
    );
  }
  if (/^\/certification(\/.*)*/.test(pathname)) {
    return <CertificationLayout>{element}</CertificationLayout>;
  }
  if (/^\/guide(\/.*)*/.test(pathname)) {
    return (
      <DefaultLayout onGuide={true}>
        <GuideLayout>{element}</GuideLayout>
      </DefaultLayout>
    );
  }
  if (/^\/learn(\/.*)*/.test(pathname)) {
    return <DefaultLayout showFooter={false}>{element}</DefaultLayout>;
  }
  return <DefaultLayout>{element}</DefaultLayout>;
};

wrapPageElement.propTypes = {
  element: PropTypes.any,
  location: PropTypes.objectOf({ pathname: PropTypes.string }),
  props: PropTypes.any
};

export const disableCorePrefetching = () => true;
