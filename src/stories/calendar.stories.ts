import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../components/calendar/calendar';
// @ts-ignore

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    selectedDates: [new Date(2023, 9, 5), new Date(2023, 9, 15), new Date(2023, 9, 25)],
    appearance: 'outlined',
  },
};