import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/checkbox/checkbox.tsx';
// @ts-ignore

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checkedDefault: false,
    label: 'Test Checkbox',
  },
};