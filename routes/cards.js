const express = require('express');
const router = express.Router();

// load data from server hosted json file.
const { data } = require('../data/cards.json');
const { cards } = data;

router.get('/', (req, res) => {
    const numberofCards = cards.length;
    const id = Math.floor(Math.random() * numberofCards);

    res.redirect(`/cards/${id}`);
});

// route for cards
router.get('/:id', (req, res) => {
    // read the id from request
    let { id } = req.params;
    let { side } = req.query;
    
    if ( !side ) {
        res.redirect(`/cards/${id}?side=question`);
    }

    const text = cards[id][side];
    const { hint } = cards[id];
    let templateData = { text, id };

    if (side === 'question') {
        templateData.hint = hint;
    }

    // render the template
    res.render('card', templateData);
});


module.exports = router;