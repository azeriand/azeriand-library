import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/badge/badge';
// @ts-ignore


const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Success',
    color: 'gray'
  },
};

export const Size: Story = {
  render: function Size() {
    return React.createElement(
        'div',
      {
        style: {
          backgroundSize: 'cover',
          display: 'flex',
          gap: '1rem',
        }
      },
      React.createElement(
        Badge,
        { label: 'Large', size: 'lg' },
      ),
      React.createElement(
        Badge,
        { label: 'Normal' },
      ),
      React.createElement(
        Badge,
        { label: 'Small', size: 'sm' },
      ),
    )
  }
}
