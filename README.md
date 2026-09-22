# JamLog

JamLog is a backend application designed for musicians to organize their projects, songs, rehearsals, performances, recordings, and shared resources in one place.

This repository contains the API layer for the JamLog ecosystem. It provides authentication, user management, and the base backend infrastructure that the frontend application connects to.

> Project status: early prototype / active development
>
> The backend currently includes the main Express server, Prisma integration, PostgreSQL setup, and authentication routes. The project is still evolving toward a full music-project management platform.

---

## Project goal

JamLog aims to help musicians centralize all the important parts of their creative work, including:

- user accounts;
- music projects;
- groups and collaborators;
- songs / tracks;
- song progress tracking;
- rehearsals;
- concerts;
- recording sessions;
- related files and shared resources.

The long-term idea is to give bands, solo artists, and music teams a single place to manage their work and coordination.

---

## Tech stack

- **Node.js**
- **Express**
- **JavaScript (ES modules)**
- **Prisma**
- **PostgreSQL**
- **JWT authentication**
- **bcrypt**
- **CORS**
- **dotenv**

---

## Repository structure

```text
JamLog/
├── prisma/
│   └── (Prisma schema and database configuration)
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── ...
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── test-db.js
└── README.md
```

---

## Architecture

The backend is organized around a classic Express API structure:

- `src/index.js` starts the server
- `src/routes/` defines API routes
- `src/controllers/` handles request logic
- `src/services/` contains business logic
- `src/models/` defines data models
- Prisma handles database access and schema management

This keeps the API modular and easier to extend as new music-related features are added.

---

## Main server entry point

The Express app is initialized in:

```js
src/index.js
```

It currently:

- creates the Express app;
- enables JSON parsing;
- enables CORS;
- registers the `/auth` routes;
- starts the server on port `3000`.

---

## Authentication

The backend includes authentication routes under:

```text
/auth
```

Current routes appear to include:

- `POST /auth/register`
- `POST /auth/login`

The project uses:

- `bcrypt` for password hashing;
- `jsonwebtoken` for JWT generation/validation.

This is a standard authentication setup for a web app that needs session-like access control.

---

## Database

The project uses Prisma with PostgreSQL.

This means the app is designed to be scalable and production-ready compared to a simple JSON-based backend.

The Prisma setup is intended to support future data models for:

- users;
- bands or groups;
- projects;
- songs;
- events;
- recordings;
- uploaded files;
- team members.

---

## Current status

### Implemented

- Express backend setup
- CORS configuration
- authentication routes
- JSON request parsing
- Prisma installation and configuration
- PostgreSQL-ready architecture
- JWT-based auth pattern
- environment variable support

### Still in progress / not yet fully implemented

- full user profiles
- project management flows
- tracks/song management
- event management
- recording session management
- file storage
- advanced music collaboration logic
- production-grade validation
- full API documentation
- testing and QA

---

## Environment configuration

The app uses environment variables through `dotenv`.

Typical configuration should include:

- database URL
- JWT secret
- CORS origin
- port settings

You should set these in a `.env` file before running the app in a real environment.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/bryte-dev/JamLog.git
cd JamLog
npm install
```

---

## Run locally

Start the backend:

```bash
npm run dev
```

or

```bash
node src/index.js
```

The API runs by default on:

```text
http://localhost:3000
```

---

## Notes

This backend is designed to work alongside the frontend repository:

```text
bryte-dev/JamLogFrontEnd
```

The frontend already targets auth routes such as:

- `POST /auth/register`
- `POST /auth/login`

This means the backend and frontend are intended to be used together as a complete application.

---

## Roadmap

Future development is expected to include:

- user dashboard
- project creation and editing
- band/group management
- song management
- rehearsal scheduling
- concert tracking
- recording session logging
- resource sharing
- file uploads and metadata
- authorizations and permissions
- API documentation and tests

---

## Summary

JamLog is a backend API focused on helping musicians organize their work and creative projects.

It is still an early-stage project, but the current structure already shows a clear direction:

- structured Express API
- Prisma + PostgreSQL support
- JWT authentication
- modular backend architecture
- readiness for a larger music management platform
