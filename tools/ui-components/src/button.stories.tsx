import { Story } from '@storybook/react';
import React from 'react';
import { Button } from './button';
import { ButtonProps } from './button.types';

const story = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
      defaultValue: 'light'
    }
  }
};

const Template: Story<ButtonProps> = args => {
  return (
    <div
      className={`flex h-screen justify-center items-center ${
        args.theme === 'dark'
          ? 'dark bg-dark-theme-background'
          : 'light bg-light-theme-background'
      }`}
    >
      <Button {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};

export default story;
