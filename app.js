const express = require('express');

const app = express();

// setup routes
// 1. route for home page
app.get('/', (req, res) => {
    res.send("<h1>Hello World!!</h1>");
});

// 2. route for .....
app.get('/about', (req, res) => {
    res.send("<h2>Made by Kapil Viren Ahuja as he learns node.js");
});


// start the server
app.listen(3000, () => {
    console.log("Restarting application on post 3000");
});