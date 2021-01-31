/* global jest, expect */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CompletionModalBody from './CompletionModalBody';

const props = {
  blockName: 'Basic HTML and HTML5',
  completedPercent: Math.floor(Math.random() * 101)
};

describe('<CompletionModalBody />', () => {
  test('matches snapshot', () => {
    const { container } = render(<CompletionModalBody {...props} />);

    expect(container).toMatchSnapshot();
  });

  describe('progress-bar', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    test('renders with 0% width initially', () => {
      const { container } = render(<CompletionModalBody {...props} />);
      expect(container.querySelector('.progress-bar-percent')).toHaveAttribute(
        'style',
        'width: 0%;'
      );
    });

    test('has the correct width after animation', () => {
      const { container } = render(<CompletionModalBody {...props} />);

      fireEvent.animationEnd(
        container.querySelector('.completion-success-icon')
      );

      jest.runAllTimers();

      expect(container.querySelector('.progress-bar-percent')).toHaveAttribute(
        'style',
        `width: ${props.completedPercent}%;`
      );
    });
  });
});
