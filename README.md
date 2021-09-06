# Blog Posts

Fetch posts server from external URL, written in Domain-driven design (DDD) structure.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Environment

Generate `.env` file using `.env.example` in ./docs folder.

### Docker

Run ➡ `docker-compose up --build -d`

### Installation

Run ➡ `npm install`

### NPM scripts

1. `npm run docker` ➡ Docker runtime environment.
2. `npm run start` ➡ Production runtime environment.
3. `npm run dev` ➡ Development runtime environment. (Listening on src for changes)
4. `npm run lint` ➡ Run linter. (Checking for mistakes)
5. `npm run test` ➡ Run test cases. "The server must be is running locally" (Checking for bugs)

### Technologies

1. Node.js (Runtime environment)
2. Redis (In-memory key–value database used as cache)

### Documentation

1. Postman (collection and environment) are provided in ./docs/Postman folder.
2. Swagger (yaml file) is provided in ./docs/Swagger folder.

For more projects check my github account `https://github.com/OmarElsahragty` or check my portfolio website `https://sahragty.herokuapp.com/`
