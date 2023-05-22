import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui/atoms'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'variant' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: 'Button',
    isLoading: true,
  },
};
export const PrimaryLoading: Story = {
  args: {
    variant: "primary",
    children: 'Button',
    isLoading: true,
  },
};
