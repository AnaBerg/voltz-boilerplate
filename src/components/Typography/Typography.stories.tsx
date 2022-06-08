import { Story, Meta } from '@storybook/react';

import Typography from './';

export default {
  title: 'Typography',
  component: Typography,
  args: {
    children: 'Lorem ipsum',
    variant: 'title',
    color: 'secondary',
  },
} as Meta;

export const Default: Story = (args) => <Typography {...args} />;
