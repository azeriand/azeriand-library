import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '../components/timeline/timeline';
import { TlListItem } from '../components/timeline/timeline-list-item';
// @ts-ignore

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    children: [
      <TlListItem label="Timeline Item 1" />,
      <TlListItem label="Timeline Item 2" />,
      <TlListItem label="Timeline Item 3"/>,
    ],
  },
};