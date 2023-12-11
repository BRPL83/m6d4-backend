import express from 'express';

const server = express();
const port = 3030;

server.listen(port, () => {
    console.log("server listening to port:" + port);
});