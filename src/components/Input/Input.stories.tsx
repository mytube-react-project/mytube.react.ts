import { Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    inputSize: {
      options: ['small', 'medium', 'large', 'xLarge', 'xxLarge', 'full'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['square', 'round'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  inputSize: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  inputSize: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  inputSize: 'large',
};

export const XLarge = Template.bind({});
XLarge.args = {
  inputSize: 'xLarge',
};

export const XxLarge = Template.bind({});
XxLarge.args = {
  inputSize: 'xxLarge',
};

export const Full = Template.bind({});
Full.args = {
  inputSize: 'full',
};
