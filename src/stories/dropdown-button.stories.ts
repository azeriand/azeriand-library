import type { Meta, StoryObj } from '@storybook/react';
import { DropdownButton } from '../components/dropdown/dropdown-button';
// @ts-ignore

const meta: Meta<typeof DropdownButton> = {
  title: 'Components/DropdownButton',
  component: DropdownButton,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DropdownButton>;

export const Default: Story = {
  args: {
    children: 'Select an option',
  },
};