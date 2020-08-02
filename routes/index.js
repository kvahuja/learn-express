const express = require('express');
const router = express.Router();

// 1. route for home page
router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
      res.render('index', { name });
    } else {
      res.redirect('/hello');
    }
});


router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
      res.redirect('/');
    } else {
      res.render('home');
    }
  });

router.post('/hello', (req, res) => {
    console.log('hello post');
    res.cookie('username', req.body.username);
    res.redirect('/');
  });
  
router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
  });
  
  // 4. routes for /logoug - form submission
router.post('/goodbye', (req, res) => {
    res.clearCookie("username");
    res.redirect('/');
});

module.exports = router;