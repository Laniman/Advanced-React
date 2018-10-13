require('dotenv').config({
    path: 'variables.env',
});

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: Use middleware to handle cookies (JWT)
// TODO: Use middleware to populate current user

server.start({
   cors: {
       credential: true,
       origin: process.env.FRONTED_URL,
   },
}, deets => {
    console.log(`Start on ${deets.port}`);
});


