import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/dropdown/dropdown';
// @ts-ignore

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    buttonText: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};