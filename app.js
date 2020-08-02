const express = require('express');

// setup express server
const app = express();
app.set('view engine', 'pug');

const colors = [
    'red',
    'blue',
    'green'
];

// 1. route for home page
app.get('/', (req, res) => {
    res.locals.author = "Kapil Viren Ahuja";
    res.render('home')
});

// 2. route for about
app.get('/about', (req, res) => {
    res.render('about');
});

// 3. route for cards
app.get('/cards', (req, res) => {
    res.locals.prompt = "Who is burried in Grant's tomb?";
    res.locals.colors = colors;
    res.render('card');
});

// start the server
app.listen(3000, () => {
    console.log("Restarting application on post 3000");
});