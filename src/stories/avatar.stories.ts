import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../components/avatar';
// @ts-ignore
import goku2 from './assets/goku2.jpg'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: goku2,
  },
};

export const WithCustomClass: Story = {
  args: {
    src: goku2,
    className: 'border-4 border-blue-500',
  },
};

export const WithInlineStyle: Story = {
  args: {
    src: goku2,
    style: { boxShadow: '0 0 10px #333' },
  },
};