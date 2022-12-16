import { Story } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['alert', 'confirm'],
    },
    title: {
      control: { type: 'text' },
    },
  },
};

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'alert',
  title: '알림',
  children: '알림 내용입니다.',
  onSucces: () => {
    alert('확인 버튼 클릭');
  },
};

export const Confirm = Template.bind({});
Confirm.args = {
  variant: 'confirm',
  title: '알림',
  children: '알림 내용입니다.',
  onSucces: () => {
    alert('확인 버튼 클릭');
  },
  onCancle: () => {
    alert('취소 버튼 클릭');
  },
};
