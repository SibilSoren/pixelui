# 🦉 PixelUI

A modern React component library with a dark navy theme and TypeScript support.

**[📖 Storybook Documentation](http://localhost:6006)**

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Storybook](https://img.shields.io/badge/Storybook-10-purple)

---

## ✨ Features

- 🎨 Dark navy + blue accent theme
- 📦 6 core components
- 🔤 Full TypeScript support
- ♿ WCAG accessibility
- 🌗 Dark/Light theme support
- 📚 Storybook documentation

---

## 📦 Components

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, ghost, danger variants |
| **Input** | Text input with label, error, icons |
| **Switch** | Toggle switch with sizes |
| **Card** | Container with elevated, outlined, filled styles |
| **Modal** | Dialog with animations, keyboard support |
| **Alert** | Info, success, warning, error notifications |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build
```

---

## 📖 Usage

```tsx
import { Button, Input, Modal } from '@pixelui/core';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Input label="Email" placeholder="you@example.com" />
    </div>
  );
}
```

---

## 🎨 Theming

PixelUI uses CSS custom properties for theming:

```css
:root {
  --pixel-primary: #3b82f6;
  --pixel-bg-dark: #0f0f23;
  --pixel-bg-panel: #1a1a3e;
  --pixel-text: #e5e5f0;
}

/* Light mode */
[data-theme="light"] {
  --pixel-bg-dark: #f5f5f5;
  --pixel-text: #171717;
}
```

---

## 📄 License

MIT
