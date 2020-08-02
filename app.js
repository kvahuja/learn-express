const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

// setup express server
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

// my own middleware(s)
// console verbose middleware
app.use( (req, res, next) => {
    console.log("my middlweare is in action!!")
    req.secret = 'Middleware 2 - i love yaaa!!';
    next();
})

app.use( (req, res, next) => {
    console.log(req.secret)
    console.log("I am blushing. I love you too Middlewre 1!!");
    next();
})

const colors = [
    'red',
    'blue',
    'green'
];

app.use(routes);

// start the server
app.listen(3000, () => {
    console.log("Restarting application on post 3000");
});