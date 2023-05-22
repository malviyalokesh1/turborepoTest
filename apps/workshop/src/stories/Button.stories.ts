import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui/atoms'

// type ButtonVariant = 'primary' | 'outline' | 'light' | 'dark';

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
    text: 'Button',
    isLoading: false,
  },
};
export const PrimaryLoading: Story = {
  args: {
    variant: "primary",
    text: 'Button',
    isLoading: true,
  },
};
export const Outlined: Story = {
  args: {
    variant: "outline",
    text: 'Button',
    isLoading: false,
  },
};
export const OutlinedLoading: Story = {
  args: {
    variant: "outline",
    text: 'Button',
    isLoading: true,
  },
};
export const Light: Story = {
  args: {
    variant: "light",
    text: 'Button',
    isLoading: false,
  },
};
export const LightLoading: Story = {
  args: {
    variant: "light",
    text: 'Button',
    isLoading: true,
  },
};
export const Dark: Story = {
  args: {
    variant: "dark",
    text: 'Button',
    isLoading: false,
  },
};
export const DarkLoading: Story = {
  args: {
    variant: "dark",
    text: 'Button',
    isLoading: true,
  },
};
