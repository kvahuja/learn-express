const express = require('express');
const cardsRouter = express.Router();

// load data from server hosted json file.
const { data } = require('../data/cards.json');
const { cards } = data;

// 3. route for cards
cardsRouter.get('/:id', (req, res) => {
    // read the id from request
    const { id } = req.params;
    const { side } = req.query;
    const text = cards[id][side];
    const { hint } = cards[id];
    let templateData = { text, id };

    if (side === 'question') {
        templateData.hint = hint;
    }
    // console.dir(req.query);

    // render the template
    res.render('card', templateData);
});

module.exports = cardsRouter;