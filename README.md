# 🦉 PixelUI

A modern React component library with a dark navy theme and TypeScript support.

**[📖 Live Documentation](https://pixelui-docs.netlify.app)** *(Deploy to get your link)*

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Storybook](https://img.shields.io/badge/Storybook-10-purple)

---

## ✨ Features

- 🎨 Dark navy + blue accent theme
- 📦 6 core components
- 🔤 Full TypeScript support
- ♿ WCAG accessibility (a11y addon)
- 🌗 Dark/Light theme via CSS variables
- 📚 Auto-generated Storybook docs

---

## 📦 Components

| Component | Description |
|-----------|-------------|
| **Button** | primary, secondary, ghost, danger variants |
| **Input** | Text input with label, error, icons |
| **Switch** | Toggle switch with sizes |
| **Card** | Container: elevated, outlined, filled |
| **Modal** | Dialog with animations, keyboard support |
| **Alert** | info, success, warning, error states |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/pixelui.git
cd pixelui

# Install
npm install

# Run Storybook locally
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

---

## 🌐 Deploy to Netlify

1. Push code to GitHub
2. Connect repo to Netlify
3. Auto-detects `netlify.toml`:
   - **Build**: `npm run build-storybook`
   - **Publish**: `storybook-static`

Or use CLI:
```bash
npm run build-storybook
npx netlify deploy --prod --dir=storybook-static
```

---

## 📖 Usage

```tsx
import { Button, Input, Modal } from './components';
import './styles/tokens.css';

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

CSS custom properties for easy theming:

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

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/      # Button.tsx, Button.css, Button.stories.tsx
│   ├── Input/
│   ├── Switch/
│   ├── Card/
│   ├── Modal/
│   └── Alert/
├── styles/
│   └── tokens.css   # Design tokens (colors, spacing, etc.)
└── index.ts         # Main exports
```

---

## 📄 License

MIT
