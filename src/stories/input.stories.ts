import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/input/input';
import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";

// @ts-ignore
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Size: Story = {
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
        { placeholder: 'Size: 50', size: 50, className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Size: 20', size: 20, className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Size: 10', size: 10, className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Size: 5', size: 5, className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: '1', size: 1, className:'mb-4' },
      )
    );
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
        { placeholder: 'Write text! - maxLenght: 50', size: 30, maxLength: 50, className:'mb-4'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 20', size: 30, maxLength: 20, className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 10', size: 30, maxLength: 10, className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Write text! - maxLenght: 5', size: 30, maxLength: 5, className:'mb-4' },
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
        { placeholder: 'Without icon', size: 30, onChange: (val) => console.log(val), className:'mb-4'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Icon left', size: 30, icon: React.createElement(FaCircleLeft), iconPosition: 'left', className:'mb-4' },
      ),
      React.createElement(
        Input,
        { placeholder: 'Icon right', size: 30, icon: React.createElement(FaCircleRight), iconPosition: 'right', className:'mb-4' },
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
        { placeholder: 'Text not centered', size: 30, className:'mb-4'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Text centered', size: 30, centerText: true, className:'mb-4' },
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
        { placeholder: 'Abled input', size: 30, className:'mb-4'},
      ),
      React.createElement(
        Input,
        { placeholder: 'Disabled input', size: 30, disabled: true, className:'mb-4' },
      ),
    );
  },
};