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
import { Button, Card } from 'azeriand-library';

function App() {
  return (
    <div>
      <Card>
        <Button color="blue">
          Click me!
        </Button>
      </Card>
    </div>
  );
}
```

**Note**: Component styles are automatically injected when you import components. No separate CSS imports are required for component functionality.

### Optional: Global Styles

If you want to use Tailwind classes and design tokens in your own code, you can optionally import the global styles:

```tsx
import { Button, Card } from 'azeriand-library';
import 'azeriand-library/dist/styles.css'; // Optional: for Tailwind classes and design tokens

function App() {
  return (
    <div className="bg-red-500"> {/* This will work with global styles imported */}
      <Card>
        <Button color="blue">
          Click me!
        </Button>
      </Card>
    </div>
  );
}
```

### With Tailwind CSS

Component styles are automatically included, but if you want to use Tailwind classes in your own application, you have two options:

**Option 1: Import global styles** (includes design tokens and Tailwind base styles)
```tsx
import { Button } from 'azeriand-library';
import 'azeriand-library/dist/styles.css';

function App() {
  return (
    <div className="bg-blue-500 p-4"> {/* Tailwind classes work */}
      <Button color="red">My Button</Button>
    </div>
  );
}
```

**Option 2: Configure Tailwind to scan the library** (if you want to use your own Tailwind config)
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
