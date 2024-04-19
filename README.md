# 🔐 node-express-jwt-auth

This is a Node.js project that demonstrates how to implement JWT (JSON Web Token) authentication with Express.js.

## Installation

Clone the repository:

```bash
git clone https://github.com/navneetguptacse/node-express-jwt-auth.git
```

Navigate to the project directory:

```bash
cd node-express-jwt-auth
```

Install the dependencies:

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

Open your web browser and navigate to `http://localhost:3000`.

You can now register a new user, login with your credentials, and access protected routes.

## Configuration

The project uses a `.env` file to store configuration variables. Make sure to create a `.env` file in the root directory of the project and provide the following variables:

```bash
MONGO_URI = "mongodb+srv://<username>:<password>@apexnode.twdcrjb.mongodb.net/<database_name>
PORT = 3000
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

## Docker

To run this project using Docker, follow these steps:
Visit: https://hub.docker.com/r/navneetguptacse/apexnode

Pull the Docker image from the repository:

```bash
docker pull navneetguptacse/apexnode
```

Run the Docker container:

```bash
docker run -it -p 3000:3000 -d navneetguptacse/apexnode
```

Open your web browser and navigate to `http://localhost:3000`.

You can now register a new user, login with your credentials, and access protected routes.
