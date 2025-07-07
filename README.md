# Azeriand Library

A React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install azeriand-library
# or
yarn add azeriand-library
```

## Usage

### Basic Usage

```tsx
import { Button } from 'azeriand-library';
import 'azeriand-library/dist/style.css'; // Import the CSS

function App() {
  return (
    <div>
      <Button color="#ff6b6b">
        Click me!
      </Button>
    </div>
  );
}
```

### With Tailwind CSS

If your project uses Tailwind CSS, make sure to include the library's source files in your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/azeriand-library/dist/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  // ... rest of your config
}
```

Then you can use the components without importing the CSS:

```tsx
import { Button } from 'azeriand-library';

function App() {
  return (
    <Button color="#ff6b6b">
      Click me!
    </Button>
  );
}
```

## Components

### Button

A customizable button component with Tailwind CSS styling.

#### Props

- `color?: string` - Background color for the button

#### Example

```tsx
<Button color="#3b82f6">Primary Button</Button>
<Button color="#10b981">Success Button</Button>
```

## Development

```bash
# Install dependencies
yarn install

# Start Storybook for development
yarn storybook

# Build the library
yarn build

# Build Storybook for production
yarn build-storybook
```
