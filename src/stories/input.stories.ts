import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/input/input';
import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";

// @ts-ignore
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Write text here...',
  },
};

export const maxLenght: Story = {
  render: function DefaultInputs() {
    return React.createElement(
        'div',
      {
        style: {
          backgroundImage: "url(/background.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 32,
          minHeight: 400,
        }
      },
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 50', maxLength: 50, className:'mb-4 w-[30rem]'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 20', maxLength: 20, className:'mb-4 w-[25rem]' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 10', maxLength: 10, className:'mb-4 w-[20rem]' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 5', maxLength: 5, className:'mb-4 w-[15rem]' },
      )
    );
  },
};

export const WithIcon: Story = {
  render: function DefaultInputs() {
    return React.createElement(
        'div',
      {
        style: {
          backgroundImage: "url(/background.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 32,
          minHeight: 400,
        }
      },
      React.createElement(
        Input,
        { placeholder: 'Without icon', onChange: (val) => console.log(val), className:'mb-4 w-[15rem]'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Icon left', icon: React.createElement(FaCircleLeft), iconPosition: 'left', className:'mb-4 w-[15rem]' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Icon right', icon: React.createElement(FaCircleRight), iconPosition: 'right', className:'mb-4 w-[15rem]' },
      )
    );
  },
};

export const CenterText: Story = {
  render: function DefaultInputs() {
    return React.createElement(
        'div',
      {
        style: {
          backgroundImage: "url(/background.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 32,
          minHeight: 400,
        }
      },
      React.createElement(
        Input,
        { placeholder: 'Text not centered', className:'w-[15rem] mb-4'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Text centered', size: 30, centerText: true, className:'w-[15rem] mb-4' },
      ),
    );
  },
};

export const DisabledInput: Story = {
  render: function DefaultInputs() {
    return React.createElement(
        'div',
      {
        style: {
          backgroundImage: "url(/background.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 32,
          minHeight: 400,
        }
      },
      React.createElement(
        Input,
        { placeholder: 'Abled input', className:'mb-4 w-[10rem]'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Disabled input', disabled: true, className:'mb-4 w-[10rem]' },
      ),
    );
  },
};