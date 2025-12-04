import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/card/card';

// @ts-ignore
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    noPadding: {
      control: 'boolean',
    },
    noBlur: {
      control: 'boolean',
    },
    appearance: {
      control: 'select',
      options: ['glass', 'mate', 'outlined', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['neutral', 'purple', 'blue', 'green', 'yellow', 'red', 'pink', 'cyan', 'teal', 'orange', 'lime'],
    },
    intensity: {
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    blur: {
      control: 'number',
    },
    dark: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
    className: {
      control: 'text',
    },
    style: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;


export const Default: Story = {
  args: {
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Default Card'),
      React.createElement('p', null, 'This is the default card.')
    ),
  },
  render: (args) => {
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
      React.createElement(Card, args)
    )
  }
}

export const Appearance: Story = {
  args: {
    appearance: 'mate',
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Card with Appearance'),
      React.createElement('p', null, 'Change the appearance control to see different styles.')
    ),
  },
  render: (args) => {
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
      React.createElement(Card, args)
    );
  },
};


export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Card with No Padding'),
      React.createElement('p', null, 'Toggle noPadding control to see the difference.')
    ),
  },
  render: (args) => {
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
      React.createElement(Card, args)
    );
  },
};


export const NoBlur: Story = {
  args: {
    noBlur: true,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Card with No Blur'),
      React.createElement('p', null, 'Toggle noBlur control to see the backdrop blur effect.')
    ),
  },
  render: (args) => {
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
      React.createElement(Card, args)
    );
  },
};

export const ColorAndIntensity: Story = {
  args: {
    color: 'purple',
    intensity: 600,
    children: React.createElement(
      React.Fragment,
      null,
      React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Card with Color & Intensity'),
      React.createElement('p', null, 'Change color and intensity controls to see different combinations.')
    ),
  },
  render: (args) => {
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
      React.createElement(Card, args)
    );
  },
};