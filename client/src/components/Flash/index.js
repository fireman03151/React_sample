import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@freecodecamp/react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';

import './flash.css';

function Flash({ flashMessage, onClose }) {
  // flash messages coming from the server are already translated
  // messages on the client get translated here and need a
  // needsTranslating variable set to true with the object
  const { type, message, id, needsTranslating = false } = flashMessage;
  const { t } = useTranslation();
  const [flashMessageHeight, setFlashMessageHeight] = useState(null);

  useEffect(() => {
    setFlashMessageHeight(
      document.querySelector('.flash-message').offsetHeight
    );
    document.documentElement.style.setProperty(
      '--flash-message-height',
      flashMessageHeight + 'px'
    );
  }, [flashMessageHeight]);

  function handleClose() {
    document.documentElement.style.setProperty('--flash-message-height', '0px');
    onClose();
  }

  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames='flash-message' key={id} timeout={500}>
          <Alert
            bsStyle={type}
            className='flash-message'
            onDismiss={handleClose}
          >
            {needsTranslating ? t(`${message}`) : message}
          </Alert>
        </CSSTransition>
      </TransitionGroup>
      {flashMessage && (
        <div
          style={{
            height: flashMessageHeight + 'px'
          }}
        />
      )}
    </>
  );
}

Flash.displayName = 'FlashMessages';
Flash.propTypes = {
  flashMessage: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string,
    needsTranslating: PropTypes.bool
  }),
  onClose: PropTypes.func.isRequired
};

export default Flash;
