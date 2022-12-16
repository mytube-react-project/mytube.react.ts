import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  // decorators: [(story: any) => <div style={{ padding: '16px' }}>{story()}</div>],
  argTypes: {
    variant: {
      options: ['primary', 'text'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['square', 'round'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  size: 'small',
  children: 'Button ',
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
  variant: 'primary',
  children: 'Button ',
};

export const PrimaryRound = Template.bind({});
PrimaryRound.args = {
  size: 'small',
  variant: 'primary',
  shape: 'round',
  children: 'Button ',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'primary',
  children: 'Button ',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  variant: 'primary',
  children: 'Button ',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'primary',
  children: 'Button ',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  size: 'full',
  variant: 'primary',
  children: 'Button ',
};
