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
    label: 'Success',
    color: 'gray'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Success',
    color: 'green'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Success',
    color: 'red'
  },
};