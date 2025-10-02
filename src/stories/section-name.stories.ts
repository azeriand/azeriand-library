import type { Meta, StoryObj } from '@storybook/react';
import { SectionName } from '../components/section-name/section-name';
// @ts-ignore

const meta: Meta<typeof SectionName> = {
  title: 'Components/SectionName',
  component: SectionName,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SectionName>;

export const Default: Story = {
  args: {
    section: 'Section Name',
  },
};