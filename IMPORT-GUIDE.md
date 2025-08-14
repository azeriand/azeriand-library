# How to Use Azeriand Library

## 🎯 Basic Usage (Recommended)

**Components work out of the box - no CSS imports needed!**

```jsx
import { Card, Button } from 'azeriand-library';

function App() {
  return (
    <Card>
      <Button color="blue">Click me!</Button>
    </Card>
  );
}
```

## 🎨 With Global Styles (Optional)

**Only needed if you want to use Tailwind classes in your own code:**

```jsx
import { Card, Button } from 'azeriand-library';
import 'azeriand-library/dist/styles.css'; // Optional global styles

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-8">
      <Card>
        <Button color="green">Styled Button</Button>
      </Card>
    </div>
  );
}
```

## 🔧 Available Components

- `Card` - Glass morphism container
- `Button` - Customizable button with Card wrapper
- `Avatar` - User avatar component

## 🎛️ Advanced Usage

```jsx
import { Card, Button, Avatar, injectCSS } from 'azeriand-library';

// injectCSS is available if you need to inject custom CSS
// (though this is rarely needed as components handle their own CSS)
```
