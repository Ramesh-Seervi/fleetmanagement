# Fleet Management System

Simple Node/Express + MongoDB backend and a minimal static frontend.

Setup

1. cd fleetmanagement
2. npm install
3. copy `.env.example` to `.env` and set `MONGO_URI`
4. npm run dev

API

- GET  /api/vehicles
- POST /api/vehicles
- GET  /api/vehicles/:id
- PUT  /api/vehicles/:id
- DELETE /api/vehicles/:id

- GET  /api/drivers
- POST /api/drivers
- GET  /api/drivers/:id
- PUT  /api/drivers/:id
- DELETE /api/drivers/:id

- GET  /api/trips
- POST /api/trips
- GET  /api/trips/:id
- PUT  /api/trips/:id
- DELETE /api/trips/:id

Front-end

Open http://localhost:5000/ after the server is running.

Notes

You said you'll create a new MongoDB instance — set its connection string in `.env` as `MONGO_URI`.
# fleetmanagement
