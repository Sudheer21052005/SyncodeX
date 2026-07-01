# 🚀 SyncodeX

**A modern realtime collaborative coding environment for teams, built with live editing, drawing, chat, and shared workspace features.**

[![GitHub](https://img.shields.io/badge/GitHub-Sudheer21052005%2Fsyncodex-blue?logo=github)](https://github.com/Sudheer21052005/SyncodeX)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()

---

## ✨ Features

### 💻 **Realtime Collaboration**
- Live code editing across team members
- Shared file explorer and workspace state
- User presence and cursor tracking
- Instant synchronization with Socket.IO

### 🎨 **Interactive Workspace**
- Built-in drawing canvas for visual collaboration
- Live annotations and sketch sharing
- Collaborative whiteboard-style interactions

### 🛠️ **Developer-Friendly Editor**
- Syntax highlighting for multiple languages
- Theme and font customization
- File tabs and code navigation
- CodeMirror-based editor experience

### 💬 **Team Communication**
- Integrated chat for instant feedback
- Connected users list and status indicators
- Real-time notifications for room events

### 🔒 **Modern Web Architecture**
- React + Vite frontend
- Express + Socket.IO backend
- Lightweight and responsive UI
- Configurable settings and storage

---

## 🧩 Tech Stack

### **Frontend**
- React 18
- Vite
- Tailwind CSS
- CodeMirror
- React Router v6
- Socket.IO Client

### **Backend**
- Node.js
- Express.js
- Socket.IO
- TypeScript

### **Tools & Utilities**
- ESLint
- Prettier
- Axios
- UUID
- React Hot Toast

---

## 🚀 Setup & Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Sudheer21052005/SyncodeX.git
cd SyncodeX
```

### 2. Install frontend dependencies
```bash
cd client
npm install
```

### 3. Install backend dependencies
```bash
cd ../server
npm install
```

### 4. Run the backend
```bash
cd server
npm run dev
```

### 5. Run the frontend
```bash
cd ../client
npm run dev -- --host 0.0.0.0
```

### 6. Open the app
Visit `http://localhost:5173/`

---

## 📁 Project Structure

```
SyncodeX/
├── client/                    # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── resources/
│   │   ├── styles/
│   │   └── types/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.mts
├── server/                    # Express + Socket.IO backend
│   ├── src/
│   │   ├── types/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── README.md                  # Project documentation
└── package-lock.json
```

---

## 🔌 Running the App

- Backend: `npm run dev` in `server/`
- Frontend: `npm run dev -- --host 0.0.0.0` in `client/`
- Frontend URL: `http://localhost:5173/`
- Backend API: `http://localhost:4000/`

---

## 🧠 Notes

- The app uses local storage for theme and user session settings.
- Socket.IO handles realtime collaboration events between clients.
- The current server implementation is intended for local testing and development.

---

## 🧪 Testing

There are no dedicated tests included in this repository yet, but you can add unit and integration tests using Jest or a similar framework.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"
4. Push to your branch: `git push origin feature/your-feature`
5. Open a pull request

---

## 📞 Contact

- GitHub: [Sudheer21052005](https://github.com/Sudheer21052005)

---

**Made with ❤️ for the SyncodeX collaboration experience.**
