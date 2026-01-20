import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '../components/timeline/timeline';
import { TlListItem } from '../components/timeline/timeline-list-item';
// @ts-ignore

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    faded: false,
    children: [
      <TlListItem label="Timeline Item 1" />,
      <TlListItem label="Timeline Item 2" />,
      <TlListItem label="Timeline Item 3"/>,
    ],
  },
};

export const Faded: Story = {
  args: {
    faded: true,
    children: [
      <TlListItem label="Timeline Item 1" />,
      <TlListItem label="Timeline Item 2" />,
      <TlListItem label="Timeline Item 3"/>,
    ],
  },
};