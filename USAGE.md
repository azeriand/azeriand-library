# Usage Example

## In a Next.js project:

### 1. Install the library
```bash
npm install azeriand-library
```

### 2. Import and use components

```tsx
// app/page.tsx
import { Button, Card } from 'azeriand-library';
import 'azeriand-library/dist/style.css';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Using Azeriand Library</h1>
      
      <div className="space-y-4">
        <Button color="#3b82f6">Primary Button</Button>
        <Button color="#ef4444">Danger Button</Button>
        <Button color="#10b981">Success Button</Button>
        
        <Card color="#f3f4f6" />
      </div>
    </div>
  );
}
```

### 3. If using Tailwind CSS in your project

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Add this line to include the library's styles
    './node_modules/azeriand-library/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then you don't need to import the CSS file:

```tsx
// app/page.tsx
import { Button, Card } from 'azeriand-library';
// No need to import CSS when using Tailwind

export default function Home() {
  return (
    <div className="p-8">
      <Button color="#3b82f6">Button with Tailwind</Button>
    </div>
  );
}
```

## Publishing to NPM

1. Update version in package.json
2. Run `yarn build` to build the library
3. Run `npm publish` to publish to NPM

## Local Development & Testing

### Testing with yarn link

To test the library locally in another project before publishing:

#### 1. In the library directory:
```bash
# Build the library
yarn build

# Create a symlink
yarn link
```

#### 2. In your test project directory:
```bash
# Link the library
yarn link "azeriand-library"

# Install peer dependencies if not already installed
yarn add react react-dom
```

#### 3. Use the library in your test project:
```tsx
// Import and use components
import { Button, Card } from 'azeriand-library';

// If your project uses Tailwind CSS, no need to import CSS
// Otherwise, import the bundled CSS:
// import 'azeriand-library/dist/style.css';

function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Testing Azeriand Library</h1>
      
      <div className="space-y-4">
        <Button color="#3b82f6">Test Button</Button>
        <Button color="#ef4444">Another Button</Button>
        <Card />
      </div>
    </div>
  );
}
```

#### 4. When done testing:
```bash
# In your test project, unlink the library
yarn unlink "azeriand-library"

# In the library directory, remove the global symlink
yarn unlink
```

### Alternative: Using npm pack

```bash
# In the library directory
yarn build
npm pack

# This creates azeriand-library-1.0.0.tgz
# In your test project
npm install ../path/to/azeriand-library-1.0.0.tgz
```

