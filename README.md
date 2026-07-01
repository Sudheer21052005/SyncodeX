# SyncodeX

**SyncodeX is a realtime collaborative coding platform for teams, powered by a shared code editor, live chat, drawing board, and synchronized workspace.**

[![GitHub](https://img.shields.io/badge/GitHub-Sudheer21052005%2FSyncodeX-blue?logo=github)](https://github.com/Sudheer21052005/SyncodeX)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()

---

## ✨ Features

### 🚀 Realtime Collaboration
- Live shared code editing across multiple users
- Instant sync for file changes, cursor presence, and editor state
- Room-based sessions for team workspaces

### 💻 Developer Experience
- Syntax-highlighted code editor using CodeMirror
- Multiple file support with file tree navigation
- Tabbed editor layout for fast file switching
- Dark and light theme support

### 💬 Communication & Productivity
- Built-in chat for team messaging
- User presence indicators and activity status
- Realtime notifications for session events

### 🧠 Visual Collaboration
- Integrated drawing board powered by `tldraw`
- Shared canvas for quick sketches and brainstorming
- Easy switching between editor and drawing modes

### 🔧 Settings & Customization
- Theme, font family, and font size controls
- Option to show or hide GitHub corner badge
- Responsive layout for desktop and mobile screens

---

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- TypeScript
- Tailwind CSS
- React Router v6
- CodeMirror editor
- Socket.IO client
- tldraw for drawing collaboration

### Backend
- Node.js
- Express.js
- Socket.IO
- Realtime synchronization server

---

## 📁 Project Structure

```
SyncodeX/
├── client/               # React + Vite frontend
└── server/               # Express + Socket.IO backend
```

---

## 🚀 Local Setup

### 1. Install dependencies
```bash
cd client
npm install

cd ../server
npm install
```

### 2. Start the backend
```bash
cd server
npm run dev
```

### 3. Start the frontend
```bash
cd ../client
npm run dev
```

### 4. Open the application
Visit `http://localhost:5173/`

---

## 🌐 Backend Configuration

The backend runs on port `4000` by default and provides the realtime Socket.IO server.

No database is currently required for the realtime collaboration features in this version.

---

## ✅ GitHub
Repository: https://github.com/Sudheer21052005/SyncodeX

---

## 📌 Notes
- This project is designed for realtime code collaboration and visual teamwork.
- Production deployment should include secure HTTPS configuration and environment hardening.
- The current server implementation is optimized for local development.

---

## 💬 Contribution
1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"
4. Push to GitHub: `git push origin feature/your-feature`
5. Open a pull request

---

## 🙌 Acknowledgments
Built with React, Vite, Express, Socket.IO, CodeMirror, and tldraw.
