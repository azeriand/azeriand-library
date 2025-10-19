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
          display: 'flex',
          gap: '1rem',
          justifyItems: 'start',
          alignItems: 'start',
        }
      },
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Mate button' },
      ),
      React.createElement(
        Button,
        { label: 'Default button' },
      ),
      React.createElement(
        Button,
        { label: 'Outlined button', appearance: 'outlined' },
      ),
      React.createElement(
        Button,
        { label: 'Ghost button', appearance: 'ghost' },
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
          display: 'flex',
          gap: '1rem',
          justifyItems: 'start',
          alignItems: 'start',
        }
      },
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Normal' },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Small', size: 'sm' },
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
          gap: '1rem',
          justifyItems: 'start',
          alignItems: 'start',
        }
      },
      
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Left', position: 'left', icon: React.createElement(FaCircleLeft) },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Without Icon' },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', icon: React.createElement(FaCircleRight) },
      ),
      React.createElement(
        Button,
        { appearance: 'mate', label: 'Right', position: 'right', icon: React.createElement(FaCircleRight) },
      ),
    );
  },
};
