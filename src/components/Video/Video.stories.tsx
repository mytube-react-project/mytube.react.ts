import { Story } from '@storybook/react';
import Video from './Video';

export default {
  title: 'shared/Video',
  component: Video,
};

const Template: Story = (args) => <Video {...args} />;
export const Default = Template.bind({});
