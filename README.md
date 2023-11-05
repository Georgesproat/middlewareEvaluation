# API Documentation

This section provides details about the application's API, including available endpoints, expected input, and response format. You can use tools like Swagger or Postman to generate API documentation.

## Endpoints

- **GET /companies/:id**: Fetch company data by ID.
  - Parameters:
    - `id` (number): The ID of the company to retrieve.
  - Example:
    ```http
    GET /companies/1
    ```

  - Response (200 OK):
    ```json
    {
      "id": 1,
      "name": "Company Name",
      "description": "Company Description"
    }
    ```

  - Response (404 Not Found):
    ```json
    {
      "error": "Company not found"
    }
    ```

## Installation Guide

In this section, you'll find instructions on how to install and deploy the application in a production environment. Make sure to include any dependencies and prerequisites.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- NPM (Node Package Manager): [Install NPM](https://www.npmjs.com/get-npm)


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Georgesproat/middlewareEvaluation

2. Install dependencies:

  npm install

3. Start the application:

  npm start

The application will be available at http://localhost:3000.

4. Testing Instructions

 Execute unit tests:
 npm test






