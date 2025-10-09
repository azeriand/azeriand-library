import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button/button'
import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";


// @ts-ignore
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;


export const Appearance: Story = {
  render: function DefaultCards() {
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
        Button,
        { appearance: 'mate', label: 'Mate button', className: 'mr-[1rem]' },
      ),
      React.createElement(
        Button,
        { label: 'Default button', className: 'mr-[1rem]' },
      ),
      React.createElement(
        Button,
        { label: 'Outlined button', appearance: 'outlined', className: 'mr-[1rem]' },
      ),
      React.createElement(
        Button,
        { label: 'Ghost button', appearance: 'ghost', className: 'mr-[1rem]' },
      )
    );
  },
};


export const Size: Story = {
  render: function Size() {
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
        Button,
        { appearance: 'mate', label: 'Normal', className: 'mr-[1rem]' },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Small', size: 'sm', className: 'mr-[1rem]' },
      ),
    );
  },
};
export const IconAndPosition: Story = {
  render: function IconAndPosition() {
    return React.createElement(
      'div',
      {
        style: {
          backgroundImage: "url(/background.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 32,
          minHeight: 400,
          display: 'flex',
          justifyItems: 'start',
          alignItems: 'start',
        }
      },
      
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Left', position: 'left', icon: React.createElement(FaCircleLeft), className: 'mr-[1rem]' },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Without Icon', className: 'mr-[1rem]' },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Right', position: 'right', icon: React.createElement(FaCircleRight), className: 'mr-[1rem]' },
      ),
    );
  },
};
