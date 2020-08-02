const express = require('express');
const router = express.Router();

// 1. route for home page
router.get('/', (req, res) => {
    res.locals.author = "Kapil Viren Ahuja";
    const firstname = req.cookies.firstname;
    if (firstname ) {
        res.render('home', { firstname })
    } else {
        res.redirect('/hello');
    }
});

// 2. route for about
router.get('/about', (req, res) => {
    res.render('about');
});

// 4. routes for /hello - form submission
router.get('/hello', (req, res) => {
    res.render('hello');
});

router.post('/hello', (req, res) => {
    res.cookie('firstname', req.body.firstname);
    res.redirect('/');
});


// 4. routes for /logoug - form submission
router.post('/goodbye', (req, res) => {
    res.clearCookie("firstname");
    res.redirect('/');
});

module.exports = router;