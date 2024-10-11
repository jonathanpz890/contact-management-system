# Contact Management System - API

## Description 
This is the backend API for the Contact Management System, which provides endpoints for managing contacts and groups. It uses Node.js, Express, and Sequelize to interact with an MSSQL database and handle CRUD operations.

## Tech Stack
* Node.js
* Express
* TypeScript
* Sequelize
* MSSQL

## How to Run

Clone the repository: 
```bash 
git clone https://github.com/your-repo/api.git 
```

Install dependencies: 
```bash 
npm install 
```

Set up environment variables: 
```bash 
cp .env.example .env 
``` 

Run the API: ```bash npm run dev ```

The API will be available at http://localhost:3000.
According to .env.example the api will be accessible to http://localhost:3001, please run the API first on port 3000 and then the front on port 3001 or change the env.

## API Endpoints

* GET /api/contacts - Retrieve all contacts
* POST /api/contacts - Create a new contact
* PUT /api/contacts/:id - Update a specific contact
* DELETE /api/contacts/:id - Delete a specific contact

## Database Setup

The database is hosted on Azure and configured with Sequelize, connection details are present in ```bash config/config.json```.

