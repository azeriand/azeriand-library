import type { Meta, StoryObj } from '@storybook/react';
import { TlListItem } from '../components/timeline/timeline-list-item';
// @ts-ignore

const meta: Meta<typeof TlListItem> = {
  title: 'Components/TimelineListItem',
  component: TlListItem,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof TlListItem>;

export const Default: Story = {
  args: {
    label: 'Timeline Item',
  },
};