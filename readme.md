# Contact Management System - API

## Description 
This is the backend API for the Contact Management System, which provides endpoints for managing contacts and groups. It uses Node.js, Express, and Sequelize to interact with an MSSQL database and handle CRUD operations.

## Tech Stack
Node.js (JavaScript runtime)
Express (Web framework)
TypeScript (Static type checking)
Sequelize (ORM for MSSQL)
MSSQL (Database)

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
Configure the .env file with your database connection details.

Run the API: ```bash npm run dev ```

The API will be available at http://localhost:3000.

## API Endpoints

GET /api/contacts: Retrieve all contacts
POST /api/contacts: Create a new contact
PUT /api/contacts/
: Update a specific contact
DELETE /api/contacts/
: Delete a specific contact
## Database Setup

Ensure that your database is running and properly configured in the .env file. Sequelize will handle database migrations and syncing of models.

