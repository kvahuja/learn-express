const express = require('express');
const cardsRouter = express.Router();

// load data from server hosted json file.
const { data } = require('../data/cards.json');
const { cards } = data;

// 3. route for cards
cardsRouter.get('/cards/:id', (req, res) => {
    // read the id from request
    const id = req.params.id;
    
    // pass values reading from data: cards
    res.locals.prompt = cards[id].question;
    res.locals.hint = cards[id].hint;

    // render the template
    res.render('card');
});

module.exports = cardsRouter;