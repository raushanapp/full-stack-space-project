# 🚀 Full-Stack Space Launch Application

A modern, full-stack web application for scheduling interstellar travel missions to Kepler exoplanets. Built with React, Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Starting the Application](#starting-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Docker Support](#docker-support)
- [Scripts](#scripts)
- [Testing](#testing)

## 📖 Project Overview

This is a full-stack space launch application that allows users to:

- Explore habitable Kepler exoplanets
- Schedule space missions to travel to different planets
- Track upcoming launches and view mission history

The application features a futuristic, sci-fi themed user interface and is designed to manage space mission data efficiently with a modern tech stack.

## ✨ Features

### Frontend Features

- **Responsive React UI**: Built with React and styled with the Arwes sci-fi UI library
- **Mission Launch Scheduler**: Schedule new missions with date and planet selection
- **Planet Browser**: View available habitable planets filtered by NASA's exoplanet data
- **Launch Dashboard**: View upcoming scheduled launches and mission history
- **Real-time Updates**: Live updates of mission status
- **Immersive Design**: Futuristic sci-fi theme with animations and sound effects

### Backend Features

- **RESTful API**: Complete REST API for managing launches and planets
- **MongoDB Integration**: Persistent data storage with MongoDB
- **Kepler Data Processing**: Processes NASA's Kepler exoplanet dataset (kepler_data.csv)
- **Data Validation**: Input validation and error handling
- **CORS Support**: Cross-origin resource sharing enabled
- **Request Logging**: Morgan middleware for request logging
- **Cluster Support**: PM2 clustering for production deployments

### Habitability Criteria

Planets available for missions must meet these criteria:

- Planetary radius < 1.6 times Earth's radius
- Effective stellar flux > 0.36 times Earth's value
- Effective stellar flux < 1.11 times Earth's value

## 🛠 Technology Stack

### Frontend

- **React 17**: JavaScript library for building user interfaces
- **React Router 5**: Client-side routing
- **Arwes 1.0-alpha.5**: Futuristic UI framework
- **React Scripts 5**: Build and development tools

### Backend

- **Node.js**: JavaScript runtime
- **Express 5**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose 9**: MongoDB object modeling
- **CSV Parse**: CSV file parsing for Kepler data
- **Axios**: HTTP client for API requests
- **PM2**: Process manager for production deployments

### Development Tools

- **pnpm**: Fast, efficient package manager
- **Nodemon**: Auto-restart development server
- **Jest/Supertest**: Testing framework
- **Docker**: Containerization

### Database

- **MongoDB**: NoSQL database for storing launches and planet data

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v16 or higher)
   - [Download Node.js](https://nodejs.org/)

2. **pnpm** (v11.9.0 or higher)

   ```bash
   npm install -g pnpm
   ```

   Or using Homebrew (macOS):

   ```bash
   brew install pnpm
   ```

3. **MongoDB** (Local or Cloud)
   - For local installation: [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)
   - Or use MongoDB Atlas: [MongoDB Cloud](https://www.mongodb.com/cloud/atlas)

4. **Git** (for cloning the repository)

## 📥 Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd full-stack-space-project
```

### Step 2: Create Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```bash
cd server
touch .env
```

Add these environment variables to `server/.env`:

```env
# MongoDB Connection
MONGO_URL=mongodb://localhost:27017/spaceLaunch
# or for MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/spaceLaunch?retryWrites=true&w=majority

# Server Port
PORT=8000

# Node Environment
NODE_ENV=development
```

### Step 3: Install Dependencies

You can install dependencies for both client and server:

```bash
# Option 1: Install all dependencies at once (from root directory)
pnpm run setup

# Option 2: Install separately
# Install server dependencies
pnpm run install-server

# Install client dependencies
pnpm run install-client
```

## 🚀 Starting the Application

### Development Mode

Run both client and server simultaneously:

```bash
# From the root directory
pnpm run watch
```

This command will:

- Start the backend server on `http://localhost:8000`
- Start the React development server on `http://localhost:3000`

**Access the application**: Open your browser and navigate to `http://localhost:3000`

### Running Client and Server Separately

If you prefer to run them separately:

```bash
# Terminal 1: Start the backend server
pnpm run server

# Terminal 2: Start the frontend development server
pnpm run client
```

### Production Build

Build the application for production:

```bash
pnpm run deploy
```

This will:

- Build the React app for production
- Output the build to `server/public`
- Start the server serving the production build

## 📁 Project Structure

```
full-stack-space-project/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── App.js                   # Main App component
│   │   ├── index.js                 # Entry point
│   │   ├── settings.js              # Theme and sound settings
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Centered.js          # Center layout component
│   │   │   ├── Clickable.js         # Interactive button component
│   │   │   ├── Footer.js            # Footer component
│   │   │   └── Header.js            # Header component
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── requests.js          # API request utilities
│   │   │   ├── useLaunches.js       # Launches data hook
│   │   │   └── usePlanets.js        # Planets data hook
│   │   ├── pages/                   # Page components
│   │   │   ├── AppLayout.js         # Main layout with routing
│   │   │   ├── History.js           # Launch history page
│   │   │   ├── Launch.js            # Launch scheduler page
│   │   │   └── Upcoming.js          # Upcoming launches page
│   │   └── public/                  # Static assets
│   │       ├── img/                 # Images and graphics
│   │       └── sound/               # Sound effects
│   └── package.json
│
├── server/                          # Node.js Backend
│   ├── src/
│   │   ├── app.js                   # Express app configuration
│   │   ├── server.js                # Server entry point
│   │   ├── models/                  # Data models
│   │   │   ├── launches.model.js    # Launches model logic
│   │   │   ├── launches.mongo.js    # Launches MongoDB schema
│   │   │   ├── planets.model.js     # Planets model logic
│   │   │   └── planets.mongo.js     # Planets MongoDB schema
│   │   ├── routes/                  # API routes
│   │   │   ├── api.js               # Main API router
│   │   │   ├── launches/            # Launch endpoints
│   │   │   │   ├── launches.router.js
│   │   │   │   ├── launches.controller.js
│   │   │   │   └── launch.test.js
│   │   │   └── planets/             # Planet endpoints
│   │   │       ├── planets.router.js
│   │   │       └── planets.controller.js
│   │   └── services/                # Business logic and utilities
│   │       ├── mongo.js             # MongoDB connection
│   │       └── query.js             # Query utilities
│   ├── data/
│   │   └── kepler_data.csv          # NASA Kepler exoplanet data
│   ├── public/                      # Built frontend (generated after build)
│   └── package.json
│
├── Dockerfile                       # Docker configuration
├── package.json                     # Root package.json with workspace scripts
└── pnpm-lock.yaml                   # pnpm dependency lock file
```

## 🏗️ Backend Architecture

### Architecture Overview

The backend follows a **three-tier architecture pattern** with clear separation of concerns:

```mermaid
graph TB
    Client["🖥️ React Client<br/>(Port 3000)"]

    subgraph "Express Server (Port 8000)"
        Router["Router Layer<br/>(api.js)<br/>Routes requests"]
        Controller["Controller Layer<br/>(launches.controller.js<br/>planets.controller.js)<br/>Request handlers"]
        Service["Service Layer<br/>(Business Logic)<br/>mongo.js, query.js"]
    end

    subgraph "Data Layer"
        Model["Data Models<br/>(launches.model.js<br/>planets.model.js)<br/>Schema definitions"]
        MongoDB["🗄️ MongoDB<br/>(NoSQL Database)"]
    end

    DataFile["kepler_data.csv<br/>(NASA Data)"]

    Client -->|HTTP Requests| Router
    Router -->|Route Matching| Controller
    Controller -->|Business Logic| Service
    Service -->|Query/Store| Model
    Model -->|CRUD Operations| MongoDB
    DataFile -->|Initial Load| Service

    style Client fill:#2E86AB,stroke:#333,color:#fff
    style Router fill:#A23B72,stroke:#333,color:#fff
    style Controller fill:#A23B72,stroke:#333,color:#fff
    style Service fill:#F18F01,stroke:#333,color:#fff
    style Model fill:#C73E1D,stroke:#333,color:#fff
    style MongoDB fill:#6A994E,stroke:#333,color:#fff
    style DataFile fill:#BC4749,stroke:#333,color:#fff
```

### Detailed Component Breakdown

#### 1. **Router Layer** (`routes/api.js`)

- Entry point for all HTTP requests
- Routes requests to appropriate endpoints:
  - `/v1/planets` → Planet operations
  - `/v1/launches` → Launch operations
- Handles CORS, authentication middleware, and request logging

#### 2. **Controller Layer** (`routes/launches/`, `routes/planets/`)

- **launches.controller.js**: Handles launch-related requests
  - Schedule new launches
  - Retrieve launch history and upcoming launches
  - Cancel launches
- **planets.controller.js**: Handles planet-related requests
  - Fetch habitable planets
  - Filter by criteria
  - Return planet details

#### 3. **Service Layer** (`services/`)

- **mongo.js**: Manages MongoDB connection and initialization
- **query.js**: Utility functions for data queries and filtering
- Contains business logic and data manipulation
- Handles Kepler CSV data parsing and loading
- Filters planets based on habitability criteria

#### 4. **Data Model Layer** (`models/`)

- **launches.model.js**: Core launch business logic
  - Validation
  - Launch scheduling algorithms
  - Mission conflict checking
- **launches.mongo.js**: MongoDB schema for launches
- **planets.model.js**: Planet data processing logic
- **planets.mongo.js**: MongoDB schema for planets

#### 5. **Database Layer** (MongoDB)

- Stores processed planet data
- Persists launch schedules and history
- Indexes for efficient querying

### Data Flow Diagram

```mermaid
sequenceDiagram
    participant Client as React Client
    participant Express as Express Server
    participant Controller as Controller
    participant Service as Service Layer
    participant Model as MongoDB Schema
    participant DB as MongoDB

    Client->>Express: GET /v1/launches
    Express->>Controller: Route to controller
    Controller->>Service: Call service method
    Service->>Model: Query with Mongoose
    Model->>DB: Execute query
    DB-->>Model: Return data
    Model-->>Service: Structured data
    Service-->>Controller: Processed response
    Controller-->>Express: Format response
    Express-->>Client: Send JSON response
```

### Request Processing Pipeline

```mermaid
graph LR
    A["HTTP Request<br/>(GET/POST/DELETE)"]
    B["CORS Check"]
    C["Morgan Logger"]
    D["Express Router"]
    E["Route Match"]
    F["Controller Handler"]
    G["Business Logic"]
    H["Database Query"]
    I["Response Format"]
    J["JSON Response"]

    A --> B --> C --> D --> E --> F --> G --> H --> I --> J

    style A fill:#2E86AB,color:#fff
    style B fill:#A23B72,color:#fff
    style C fill:#F18F01,color:#fff
    style D fill:#A23B72,color:#fff
    style E fill:#A23B72,color:#fff
    style F fill:#C73E1D,color:#fff
    style G fill:#C73E1D,color:#fff
    style H fill:#6A994E,color:#fff
    style I fill:#F18F01,color:#fff
    style J fill:#2E86AB,color:#fff
```

### Key Design Patterns Used

| Pattern                         | Implementation                            | Benefit                                |
| ------------------------------- | ----------------------------------------- | -------------------------------------- |
| **MVC (Model-View-Controller)** | Separates routes, controllers, and models | Easy to maintain and test              |
| **Repository Pattern**          | Models handle data access                 | Decouples business logic from database |
| **Service Pattern**             | Centralized business logic                | Reusable services across controllers   |
| **Middleware Pipeline**         | CORS, logging, error handling             | Clean request processing               |
| **CSV Data Processing**         | Initial load → Parse → Validate → Store   | Efficient data management              |

### API Endpoint Architecture

```mermaid
graph TB
    API["API v1<br/>/v1"]

    subgraph Planets["Planets Endpoints"]
        P1["GET /planets<br/>Retrieve all habitable planets"]
        P2["GET /planets/:id<br/>Get specific planet details"]
    end

    subgraph Launches["Launches Endpoints"]
        L1["GET /launches<br/>Get all scheduled launches"]
        L2["GET /launches?limit&skip<br/>Paginated launches"]
        L3["POST /launches<br/>Schedule new mission"]
        L4["DELETE /launches/:id<br/>Cancel launch"]
    end

    API --> Planets
    API --> Launches

    Planets --> P1
    Planets --> P2
    Launches --> L1
    Launches --> L2
    Launches --> L3
    Launches --> L4

    style API fill:#2E86AB,stroke:#333,color:#fff
    style Planets fill:#A23B72,stroke:#333,color:#fff
    style Launches fill:#A23B72,stroke:#333,color:#fff
    style P1 fill:#F18F01,stroke:#333,color:#fff
    style P2 fill:#F18F01,stroke:#333,color:#fff
    style L1 fill:#F18F01,stroke:#333,color:#fff
    style L2 fill:#F18F01,stroke:#333,color:#fff
    style L3 fill:#F18F01,stroke:#333,color:#fff
    style L4 fill:#F18F01,stroke:#333,color:#fff
```

### Technology Stack Integration

```mermaid
graph TB
    Node["Node.js<br/>Runtime"]
    Express["Express 5<br/>Web Framework"]
    Middleware["Middleware Stack"]
    Routes["Route Handlers"]
    Models["Mongoose Models"]
    Mongo["MongoDB"]

    Node --> Express
    Express --> Middleware
    Middleware --> Routes
    Routes --> Models
    Models --> Mongo

    MW1["CORS"]
    MW2["Morgan Logger"]
    MW3["JSON Parser"]
    MW4["Error Handler"]

    Middleware --> MW1
    Middleware --> MW2
    Middleware --> MW3
    Middleware --> MW4

    style Node fill:#2E86AB,stroke:#333,color:#fff
    style Express fill:#A23B72,stroke:#333,color:#fff
    style Middleware fill:#F18F01,stroke:#333,color:#fff
    style Routes fill:#C73E1D,stroke:#333,color:#fff
    style Models fill:#6A994E,stroke:#333,color:#fff
    style Mongo fill:#BC4749,stroke:#333,color:#fff

    style MW1 fill:#F18F01,stroke:#333,color:#fff
    style MW2 fill:#F18F01,stroke:#333,color:#fff
    style MW3 fill:#F18F01,stroke:#333,color:#fff
    style MW4 fill:#F18F01,stroke:#333,color:#fff
```

### Scalability Features

1. **PM2 Clustering**: Deploy with `pnpm run deploy-cluster` for multi-process scaling
2. **MongoDB Indexing**: Optimized queries on frequently searched fields
3. **Pagination**: Handle large datasets efficiently with limit/skip
4. **Stateless Design**: Each server instance operates independently
5. **Docker Ready**: Containerized deployment for horizontal scaling

## 🔌 API Endpoints

### Planets

- **GET** `/v1/planets` - Get all habitable planets
  ```bash
  curl http://localhost:8000/v1/planets
  ```

### Launches

- **GET** `/v1/launches` - Get all launches
- **GET** `/v1/launches?limit=X&skip=X` - Get paginated launches
- **POST** `/v1/launches` - Schedule a new launch
  ```bash
  curl -X POST http://localhost:8000/v1/launches \
    -H "Content-Type: application/json" \
    -d '{
      "mission": "Operation Z",
      "rocket": "Falcon 9",
      "target": "Kepler-452 b",
      "launchDate": "2026-12-25"
    }'
  ```
- **DELETE** `/v1/launches/:id` - Cancel a scheduled launch

## 🔐 Environment Variables

The backend requires a `.env` file in the `server` directory. Here's what's needed:

| Variable    | Description                          | Example                                 |
| ----------- | ------------------------------------ | --------------------------------------- |
| `MONGO_URL` | MongoDB connection string            | `mongodb://localhost:27017/spaceLaunch` |
| `PORT`      | Server port                          | `8000`                                  |
| `NODE_ENV`  | Environment (development/production) | `development`                           |

**MongoDB Connection Examples:**

- **Local**: `mongodb://localhost:27017/spaceLaunch`
- **MongoDB Atlas**: `mongodb+srv://username:password@cluster.mongodb.net/spaceLaunch?retryWrites=true&w=majority`

## 🐳 Docker Support

### Build Docker Image

```bash
docker build -t space-launch-app .
```

### Run Docker Container

```bash
docker run -p 8000:8000 \
  -e MONGO_URL=mongodb://host.docker.internal:27017/spaceLaunch \
  space-launch-app
```

The Dockerfile:

- Uses Node.js LTS Alpine image (lightweight)
- Installs pnpm
- Builds the React frontend
- Serves the app on port 8000

## 📝 Available Scripts

### Root Directory Scripts

```bash
# Setup all dependencies
pnpm run setup

# Install server dependencies only
pnpm run install-server

# Install client dependencies only
pnpm run install-client

# Run both server and client in development
pnpm run watch

# Start server in watch mode (auto-reload)
pnpm run server

# Start React development server
pnpm run client

# Build for production and start server
pnpm run deploy

# Start server with PM2 clustering
pnpm run deploy-cluster

# Run tests
pnpm run test
```

### Server Scripts

```bash
pnpm --dir server run start      # Start production server
pnpm --dir server run watch      # Start with auto-reload
pnpm --dir server run cluster    # Start with PM2 clustering
pnpm --dir server run test       # Run tests
pnpm --dir server run test-watch # Run tests in watch mode
```

### Client Scripts

```bash
pnpm --dir client run start      # Start development server
pnpm --dir client run build      # Build for production
pnpm --dir client run test       # Run tests
pnpm --dir client run eject      # Eject from Create React App
```

## ✅ Testing

### Run All Tests

```bash
pnpm run test
```

### Server Tests Only

```bash
pnpm --dir server run test
pnpm --dir server run test-watch  # Watch mode
```

### Client Tests Only

```bash
pnpm --dir client run test
```

The project uses:

- **Jest**: Testing framework for client
- **Node --test**: Built-in Node.js test runner for server
- **Supertest**: HTTP assertion library for API testing

## 🎯 Key Features Breakdown

### 1. **Exoplanet Data Processing**

- Loads and parses NASA's Kepler exoplanet dataset
- Filters planets based on habitability criteria
- Stores processed data in MongoDB

### 2. **Mission Scheduling**

- Users can schedule new missions to eligible planets
- Launch date validation
- Prevents duplicate missions to the same planet

### 3. **Launch History**

- Complete history of all scheduled missions
- Launch status tracking
- Mission details with target planet information

### 4. **Responsive UI**

- Works on desktop and mobile devices
- Futuristic sci-fi design with Arwes framework
- Interactive animations and sound effects
- Real-time data updates

## 🔧 Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running locally or MongoDB Atlas is accessible
- Check that `MONGO_URL` in `.env` is correct
- Verify network connectivity for MongoDB Atlas

### Port Already in Use

```bash
# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 8000 (backend)
lsof -ti:8000 | xargs kill -9
```

### Dependencies Installation Issues

```bash
# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
pnpm run setup
```

### CORS Errors

- Ensure frontend is running on `http://localhost:3000`
- Backend CORS is configured to accept requests from `localhost:3000`

## 📄 License

ISC License

## 👨‍💻 Development

This project is part of the Zero to Mastery (ZTM) Full-Stack Course.

### Useful Commands During Development

```bash
# Watch mode for both client and server
pnpm run watch

# Monitor logs in real-time
tail -f /path/to/logs

# Check running processes
ps aux | grep node
```

## 🚀 Deployment

### Production Deployment Steps

1. **Build the Application**

   ```bash
   pnpm run deploy
   ```

2. **Set Environment Variables**
   - Configure `MONGO_URL` pointing to production MongoDB
   - Set `NODE_ENV=production`
   - Set `PORT` (usually 8000)

3. **Using Docker**

   ```bash
   docker build -t space-launch:latest .
   docker run -d -p 8000:8000 \
     -e MONGO_URL=your_production_mongo_url \
     space-launch:latest
   ```

4. **Using PM2 for Clustering**
   ```bash
   pnpm run deploy-cluster
   ```

## 📞 Support

For issues or questions:

1. Check the Troubleshooting section
2. Review the project structure
3. Check environment variables configuration
4. Ensure all prerequisites are installed

---

**Happy Exploring! 🌌🛸**
