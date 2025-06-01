# 📸 Snaps — Photo Sharing App

**Snaps** is a full-stack photo-sharing web app built using modern **JavaScript**, with a React frontend and a custom Express + MySQL API backend. Designed for simplicity, responsiveness, and extensibility, Snaps enables users to share, view, and explore photos in a sleek, modular environment.

---

## 🧱 Architecture

- 🖥 **Frontend**: React + Vite + Sass + JavaScript (this repo)  
- 🛠 **Backend API**: Node.js + Express + MySQL + JavaScript ([API repo here](https://github.com/eradaeva1/elizaveta_radaeva-snaps-api))

---

## 🔧 Tech Stack

### Frontend:
- ⚛️ **React 18** with React Router
- 💅 **Sass** for scoped styling
- ⚡ **Vite** for fast dev builds
- 🌐 **Axios** for API communication
- 🟨 **JavaScript (ES6+)** for component logic and interactivity

### Backend (separate repo):
- 🧠 **Node.js + Express**
- 🗃 **MySQL** Database
- 🔒 **JWT Authentication** (planned)
- 📁 **RESTful routes** for photo management
- 🟨 **JavaScript** for all backend logic

---

## 🚀 Features

- 🖼 View shared photos in a dynamic gallery
- 🔗 Connects to a custom-built REST API
- 🌍 Client-side routing (React Router)
- 🎨 Clean and responsive UI
- 🧩 Ready to extend with uploads, auth, likes, and more

---

## 📦 Getting Started (Frontend)

### Clone the frontend repo

git clone https://github.com/eradaeva1/snaps.git
cd snaps

Install dependencies

npm install
Set up environment variables
Create a .env file in the root:

VITE_APP_API_URL=http://localhost:5050
Run the dev server

npm run dev
🔌 Connecting to the API
Make sure the Snaps API is running locally:


# in the backend repo
npm install
npm run dev

📁 Project Structure
pgsql
Copy
Edit
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── main.jsx
├── .env
├── index.html
└── package.json
📌 Future Enhancements
🔐 Authentication & Authorization

🖼 Image upload to cloud storage

❤️ Likes, comments, and user feed

🔔 Notifications & real-time updates
