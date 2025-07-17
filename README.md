# firstname-innovaxel-lastname

A simple URL shortening service built with Express.js and MongoDB.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
   * [Environment Variables](#environment-variables)
   * [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Branch & Commit Guidelines](#branch--commit-guidelines)
7. [Pull Request & Code Review](#pull-request--code-review)
8. [Testing](#testing)
9. [Contact](#contact)

---

## Overview

This repository implements a URL shortening service supporting full CRUD operations plus access statistics. It uses:

* **Express.js** as the web framework
* **MongoDB** (via Mongoose) for data storage
* **dotenv** for environment configuration
* **valid-url** for URL validation
* **nodemon** for development auto-reloading

---

## Features

* Create, retrieve, update, and delete shortened URLs
* Redirect original URLs via short code
* Track and view access counts for each short URL
* Input validation and centralized error handling
* Simple frontend (`public/index.html`) demonstrating CRUD

---

## Project Structure

```
your-project/
├── .env              # Environment variable definitions (ignored)
├── .gitignore        # Specifies untracked files
├── package.json      # NPM package manifest
├── README.md         # This documentation
├── public/           # Static assets and front-end
│   └── index.html    # Minimal UI for CRUD operations
└── src/
    ├── server.js     # Express application setup
    ├── controllers/  # Request handler logic
    │   └── urlController.js
    ├── models/       # Mongoose schemas
    │   └── Url.js
    ├── routes/       # Express route definitions
    │   └── urlRoutes.js
    ├── utils/        # Utility functions
    │   └── shortCodeGenerator.js
    └── middleware/   # Custom middleware
        ├── validation.js
        └── errorHandler.js
```

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org) v14+ installed
* [MongoDB](https://www.mongodb.com/) instance or Atlas URI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/firstname-innovaxel-lastname.git
   cd firstname-innovaxel-lastname
   ```
2. Switch to development branch:

   ```bash
   git checkout dev
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the project root with the following:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=3000
```

### Running the Application

* **Development** (auto-restarts on changes):

  ```bash
  npm run dev
  ```
* **Production**:

  ```bash
  npm start
  ```

The server will run on `http://localhost:<PORT>`.

---

## API Endpoints

| Method | Route                  | Description                        |
| ------ | ---------------------- | ---------------------------------- |
| POST   | `/shorten`             | Create a new short URL             |
| GET    | `/shorten/:code`       | Retrieve original URL and redirect |
| GET    | `/shorten/:code/stats` | Get access count and metadata      |
| PUT    | `/shorten/:code`       | Update the original URL            |
| DELETE | `/shorten/:code`       | Delete the short URL               |

All requests and responses use JSON. Errors return a JSON object with an `error` message.

---

## Branch & Commit Guidelines

* Use a **`dev`** branch for all feature work.
* **`main`** branch should contain **only** the final `README.md` (no code).
* Ensure **≥15 meaningful commits** on `dev`.
* Commit messages are **7 words max**, imperative tense (e.g., "Add POST /shorten endpoint").


---
