const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

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

// 1. route for home page
app.get('/', (req, res) => {
    res.locals.author = "Kapil Viren Ahuja";
    const firstname = req.cookies.firstname;
    if (firstname ) {
        res.render('home', { firstname })
    } else {
        res.redirect('/hello');
    }
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

// 4. routes for /hello - form submission
app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.cookie('firstname', req.body.firstname);
    res.redirect('/');
});


// 4. routes for /logoug - form submission
app.post('/goodbye', (req, res) => {
    res.clearCookie("firstname");
    res.redirect('/');
});

// start the server
app.listen(3000, () => {
    console.log("Restarting application on post 3000");
});