# node-express-jwt-auth

This is a Node.js project that demonstrates how to implement JWT (JSON Web Token) authentication with Express.js.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/navneetguptacse/node-express-jwt-auth.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-express-jwt-auth
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. You can now register a new user, login with your credentials, and access protected routes.

## Configuration

The project uses a `.env` file to store configuration variables. Make sure to create a `.env` file in the root directory of the project and provide the following variables:

```bash
MONGO_URI = mongodb://localhost:27017
PORT = 3000
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```
