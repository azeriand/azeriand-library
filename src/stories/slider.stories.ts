import type { Meta, StoryObj } from '@storybook/react';
import { NewSlider } from '../components/slider/slider';
// @ts-ignore

const meta: Meta<typeof NewSlider> = {
  title: 'Components/NewSlider',
  component: NewSlider,
};

export default meta;

type Story = StoryObj<typeof NewSlider>;

export const Default: Story = {
  args: {
    defaultValue: 30
},
};