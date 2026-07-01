# SyncodeX

SyncodeX is a realtime collaborative coding workspace with live editing, chat, drawing, and file sharing.

## Features
- Realtime code collaboration across users
- Built-in code editor with syntax highlighting
- Shared file explorer and editor tabs
- Team chat and presence indicators
- Integrated drawing canvas for visual collaboration

## Project Structure
- `client/` - Vite + React frontend
- `server/` - Express + Socket.IO backend
- `README.md` - project overview and setup

## Local Setup
### 1. Install dependencies
```bash
cd client
npm install

cd ../server
npm install
```

### 2. Run the backend
```bash
cd server
npm run dev
```

### 3. Run the frontend
```bash
cd ../client
npm run dev
```

### 4. Open the app
Visit `http://localhost:5173/`

## GitHub Repository
https://github.com/Sudheer21052005/SyncodeX

## Notes
- The server listens on port `4000` by default.
- The app uses local storage for basic user and theme settings.
- For production deployment, update the server host/port configuration and secure the Socket.IO connection.
