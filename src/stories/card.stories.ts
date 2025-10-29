import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/card/card'

// @ts-ignore
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
    parameters: {
    docs: {
      page: null,
    },
  }
};

export default meta;

type Story = StoryObj<typeof Card>;


export const Default: Story = {
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
        Card,
         { style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Default Card'),
        React.createElement('p', null, 'This is the default card.')
      ),
    )
  }
}

export const Appearance: Story = {
  render: function AppearanceCards() {
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
        Card,
        { appearance: 'mate', style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Mate Card'),
        React.createElement('p', null, 'This is a card with mate appearance.')
      ),
      React.createElement(
        Card,
        { style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Default Card'),
        React.createElement('p', null, 'This is the default card.')
      ),
      React.createElement(
        Card,
        { appearance: 'outlined' },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Outlined Card'),
        React.createElement('p', null, 'This is a card with outlined appearance.')
      ),
      React.createElement(
        Card,
        { appearance: 'ghost' },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Ghost Card'),
        React.createElement('p', null, 'This is a card with ghost appearance.')
      )
    );
  },
};


export const NoPadding: Story = {
  render: function NoPaddingCards() {
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
        Card,
        { style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Default Card'),
        React.createElement('p', null, 'This is the default card.')
      ),
      React.createElement(
        Card,
        { noPadding: true, style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'NoPadding Default Card'),
        React.createElement('p', null, 'This is a card with no padding prop.')
      ),
    );
  },
};


export const NoBlur: Story = {
  render: function NoPaddingCards() {
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
        Card,
        { style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Default Card'),
        React.createElement('p', null, 'This is the default card.')
      ),
      React.createElement(
        Card,
        { noBlur: true, style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'NoBlur Default Card'),
        React.createElement('p', null, 'This is a default card with no blur.')
      ),
    );
  },
};

export const ColorAndIntensity: Story = {
  render: function NoPaddingCards() {
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
        Card,
        { style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Default Card'),
        React.createElement('p', null, 'This is the default card.')
      ),
      React.createElement(
        Card,
        { color: 'purple', intensity: 200, style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Purple Card Intensity 200'),
        React.createElement('p', null, 'This is a purple card with an intensity value of 200.')
      ),
      React.createElement(
        Card,
        { color: 'purple', intensity: 400, style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Purple Card Intensity 400'),
        React.createElement('p', null, 'This is a purple card with an intensity value of 400.')
      ),
      React.createElement(
        Card,
        { color: 'purple', intensity: 600, style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Purple Card Intensity 600'),
        React.createElement('p', null, 'This is a purple card with an intensity value of 600.')
      ),
      React.createElement(
        Card,
        { color: 'purple', intensity: 800, style: { marginBottom: 16 } },
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Purple Card Intensity 800'),
        React.createElement('p', null, 'This is a purple card with an intensity value of 800.')
      ),  
    );
  },
};