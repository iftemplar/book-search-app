# 🔍 Quick Book Search — Open Library

This is a practical task implementing a real-time book search using the Open Library API.  
Built with a focus on modern UI/UX, performance, and clean architecture.

---

## 🚀 Tech Stack

- **React**
- **Redux Toolkit + RTK Query**
- **styled-components**
- **TypeScript**
- **Vite**

---

## 🎨 Features

- 🔍 Live search for books from OpenLibrary API
- 📘 Display of book title, author, and cover image
- 🪄 Styled dropdown with animation and arrow
- 📉 Handles `isLoading`, `no results`, and API errors
- ⌨️ Closes dropdown on `Escape` and outside clicks
- 📱 Fully responsive design for mobile devices
- ✅ Global Inter font integration

---

## 🧠 Architectural Decisions

- Separation of concerns: UI, API, types, hooks
- RTK Query for data fetching and caching
- styled-components for scoped, component-level styling
- Custom useDebounce hook for input optimization
- Fallback image when book covers are missing

---

## 📦 Getting Started

```bash
npm install
npm run dev
```
