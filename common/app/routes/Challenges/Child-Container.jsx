import React from 'react';
import PropTypes from 'prop-types';

import CompletionModal from './Completion-Modal.jsx';
import AppChildContainer from '../../Child-Container.jsx';

const propTypes = {
  challenge: PropTypes.object,
  children: PropTypes.node,
  showLoading: PropTypes.bool
};

function ChildContainer(props) {
  const { children, ...restProps } = props;
  return (
    <AppChildContainer { ...restProps }>
      { children }
      <CompletionModal />
    </AppChildContainer>
  );
}

ChildContainer.propTypes = propTypes;

export default ChildContainer;
