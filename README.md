# Todo App

## Project Description

This project is a simple TODO application with the following features:

- Create a new todo
- View existing todos
- Mark a todo as done
- Delete a todo

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Validation:** Zod

## Getting Started

Follow these steps to run the application on your local machine.

### Prerequisites

Ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)

### .env Setup

Create a `.env` file in the `server` directory and add the following:
   ```plaintext
    MONGODB_CONNECTION_URL= "Your mongoDB URL"
    PORT= 3000

```

Create a `.env` file in the `client` directory and add the following:
   ```plaintext
    VITE_API_URL=http://localhost:3000

```
### Running the Server

1. Navigate to the server directory:
   ```bash
   cd server
   
2. Install the necessary dependencies:
   ```bash
   npm install
   
3. Start the server:
   ```bash
   node index.js
   
### Running the Client

1. Navigate to the server directory:
   ```bash
   cd client
   
2. Install the necessary dependencies:
   ```bash
   npm install
   
3. Start the server:
   ```bash
   npm run dev

## Usage
- Access the frontend at `http://localhost:5173/`
- Access the backend at `http://localhost:3000/`