# PollyGlot

A language-learning quiz app built with **Vite**, **React**, **TypeScript**, and **SCSS Modules**, inspired by the Scrimba **AI Engineer Path** project.

## 📚 Overview

PollyGlot is a simple, interactive quiz application that helps users test their vocabulary knowledge in multiple languages. It leverages the speed of **Vite** for development, the type safety of **TypeScript**, the component-based architecture of **React**, and the styling power of **SCSS**.

The app displays a word in a given language and provides multiple choice answers for the translation. The user selects an answer, receives immediate feedback, and can move through a series of questions to test their knowledge.

---

## 🛠️ Tech Stack

- **Vite** – fast build tool and dev server
- **React** – UI library for building components
- **TypeScript** – strongly typed JavaScript for safer, more maintainable code
- **SCSS** – enhanced CSS with variables, nesting, and mixins

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

### 🎨 Styling with SCSS

All styles are organized in .scss files for better maintainability. You can customize variables, color palettes, and mixins in the styles/ folder to easily adjust the look and feel of the app.

---

### 📂 Project Structure

```csharp
polly-glot-app-scrimba/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── data/        # Quiz data
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
