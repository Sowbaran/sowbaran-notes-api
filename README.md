# 📝 Notes API

A simple Express.js backend server for managing notes — built as part of my backend-heavy MERN stack development journey.
---

## 🚀 Features

- `GET /notes` – Get all notes
- `GET /notes/:id` – Get a note by ID
- `POST /notes` – Add a new note
- `PUT /notes/:id` – Update a note
- `DELETE /notes/:id` – Delete a note

---

## 📂 Folder Structure

notes-api/
├── index.js # Entry point
└── routes/
└── notes.js # All CRUD route logic


---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📦 Getting Started

### Prerequisites

- Node.js (v12+)
- npm (Node Package Manager)

### Installation

```bash
git clone https://github.com/Sowbaran/sowbaran-notes-api.git
cd sowbaran-notes-api
npm install
node index.js
