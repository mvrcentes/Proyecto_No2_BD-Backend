# Backend - A backend server that connects to SUPABASE
## Description
This backend server is built with Node.js and is used to connect to SUPABASE. It provides REST APIs for the frontend to interact with SUPABASE.
## Prerequisites

* Node.js (v14 or higher)
* yarn/npm

## Installation
1. Clone the repository: `$ git clone git@github.com:mvrcentes/Proyecto_No2_BD-Backend.git`
2. Install dependencies: `yarn install`
3. Create a .env file and add the following environment variables: 
  * `SUPABASE_URL=<your_supabase_url>`
  * `SUPABASE_KEY=<your_supabase_key>`
4. Start the server: `yarn dev`

## Dependencies
```
@supabase/supabase-js: ^2.12.0
cors: ^2.8.5
dotenv: ^16.0.3
express: ^4.18.2
joi: ^17.9.0
Dev Dependencies
nodemon: ^2.0.22
```
