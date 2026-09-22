# JamLog

JamLog is an app made to help musicians organize their work, projects, and related resources.

## Overview

The visible backend structure suggests a music-oriented organization platform with authentication and data models for users, projects, project members, events, songs, and files.

## Goal / Objective

JamLog appears to focus on helping musicians keep collaborative work structured: managing projects, planning events, tracking songs, and storing related files in one system.

> TODO: Add the original product vision and explain whether JamLog is intended for solo musicians, bands, or broader creative teams.

## Visuals

- **System overview graphic:** TODO
- **Admin / project workflow screenshot:** TODO
- **Demo link:** TODO

## Stack

- JavaScript
- Node.js
- Express
- Prisma
- PostgreSQL
- JWT-based authentication (visible from dependencies)

## Key Features

- Registration and login routes
- Data model for users and owned projects
- Project membership tracking
- Event and song entities linked to projects
- File attachments linked to songs and events

## Architecture Summary

- `src/index.js`: Express server bootstrap and CORS setup
- `src/routes/authRoutes.js`: authentication endpoints
- `src/routes/userRoutes.js`: user-related routes
- `prisma/schema.prisma`: application data model

## Run Locally

```bash
npm install
npm run dev
```

> TODO: Add the required `.env` variables (`DATABASE_URL`, JWT secret, and any other runtime configuration), Prisma migration steps, and the exact frontend/client integration notes.

## Notes to Fill In Later

- API documentation or sample requests
- Relationship between JamLog and JamLogFrontEnd
- Deployment setup
- Screenshots or architecture diagram

---
