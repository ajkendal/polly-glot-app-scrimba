# PollyGlot

A language-learning quiz app built with **Vite**, **React**, **TypeScript**, and **SCSS Modules**, inspired by the Scrimba **AI Engineer Path** project.

## 📚 Overview

PollyGlot is a simple, interactive quiz application that helps users test their vocabulary knowledge in multiple languages. It leverages the speed of **Vite** for development, the type safety of **TypeScript**, the component-based architecture of **React**, and the styling power of **SCSS**.

The app displays a word in a given language and provides multiple choice answers for the translation. The user selects an answer, receives immediate feedback, and can move through a series of questions to test their knowledge.

You can view the original design mockups here: [🎨 Figma Design – PollyGlot](https://www.figma.com/design/5zQQiaSDdUu8AqVGlg9PZ3/OpenAi-API---PollyGlot?node-id=1-168&t=VBu5mK7ufECFQWA1-1)

---

## 🛠️ Tech Stack

- **Vite** – fast build tool and dev server
- **React** – UI library for building components
- **Vercel** – fast, reliable hosting and deployment platform
- **TypeScript** – strongly typed JavaScript for safer, more maintainable code
- **SCSS** – enhanced CSS with variables, nesting, and mixins
- **Figma** – collaborative interface design and prototyping tool

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/pollyglot.git
cd pollyglot
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open the local URL shown in your terminal (e.g., http://localhost:5173) to view the app.

---

### 📦 Build for production

```bash
npm run build
```

This will create an optimized production build in the dist/ folder.

---

### Deploy to Vercel

You can easily deploy this project to Vercel by:

1. Creating a Vercel account
2. Importing your GitHub repository into Vercel
3. Configuring environment variables (if any) in the Vercel dashboard
4. Deploying — your app will be live in seconds!

---

### 🎨 Styling with SCSS Modules

PollyGlot uses SCSS Modules for styling, meaning styles are automatically scoped to the component where they’re imported.

Example:

```tsx
import styles from './Button.module.scss';

export default function Button() {
  return <button className={styles.primary}>Click me</button>;
}
```

With this approach:

- No global style conflicts
- Clear mapping between components and their styles
- Support for variables, nesting, and mixins

---

### 📂 Project Structure

```csharp
polly-glot-app-scrimba/
├── public/          # Static assets
├── src/
│   ├── assets/      # Assets
│   ├── components/  # React components
│   ├── styles/      # SCSS styles
│   ├── App.tsx      # Root React component
│   ├── main.tsx     # Entry point
├── package.json
├── vite.config.ts
└── README.md
```

---

### 💡 Notes

- This project was built as part of the Scrimba AI Engineer Path curriculum and adapted for personal learning.
- You can easily extend it with more languages, difficulty levels, or API-based word lists.

---

### 🔮 Future Updates

- **Error State** – Add user-friendly error handling for failed API calls or invalid data.
- **Stretch Goal** – Continue adding more translated text displayed as conversation bubbles, creating a flowing, chat-like experience for users.
