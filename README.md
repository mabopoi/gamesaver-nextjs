This is a [Next.js](https://nextjs.org/) CRUD project made with MongoDB & PassportJs.

## Requirements

- NodeJS
- MongoDB

## Installation

    git clone https://github.com/mabopoi/gamesaver-nextjs
    npm install

## Setup .env file

    #Database
    MONGO_URL

    #GoogleAuth (create at [https://console.developers.google.com])
    GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET

    #Cookie
    COOKIE_SECRET

## Running development environment

    npm run dev

## Running production environment with Docker

    docker-compose up -d --build

### Then you can open http://localhost:3000 to see the result!
