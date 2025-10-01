import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/badge/badge';
// @ts-ignore


const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Badge',
    color: 'gray'
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    color: 'green'
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    color: 'red'
  },
};