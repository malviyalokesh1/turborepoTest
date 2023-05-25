import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button'

// type ButtonVariant = 'primary' | 'outline' | 'light' | 'dark';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    clickHandler: { action: 'buttonClick' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    text: 'Button',
    isLoading: false,
    disabled: false
  },
};

export const Outlined: Story = {
  args: {
    variant: "outline",
    text: 'Button',
    isLoading: false,
    disabled: false
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    text: 'Button',
    isLoading: false,
    disabled: false
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    text: 'Button',
    isLoading: false,
    disabled: false
  },
};

