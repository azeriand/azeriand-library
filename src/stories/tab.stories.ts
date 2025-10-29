import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../components/tab/tab';
// @ts-ignore

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    items: ['All', 'Active', 'Completed'],
    defaultValue: 'All',  
    },
};