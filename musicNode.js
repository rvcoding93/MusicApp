const http = require('http');
const songlist = require('./app')

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app)

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.end(songlist);
    console.log(songlist)
});

app.get('/albums/0', (req,res) => {
    res.end()
});

app.get('/albums/1', (req,res) => {
    res.end()
});

app.get('/cds', (req,res) => {
    res.end()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});