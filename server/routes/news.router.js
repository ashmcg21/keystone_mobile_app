const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for news off DB
 */
router.get('/news', (req, res) => {
    const queryString = `SELECT * FROM "keystone_news" WHERE "id" = $1;`;

    pool
    .query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        console.log(`Error in news: ${err}`);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.put('/likes/:id', (req, res) => {
//number of likes router
const num_likes = req.params.id;
const likesThis = req.body;
const queryText = `UPDATE "keystone_news"
SET "num_of_likes" = $1;`;

pool.query(queryText, [
    likesThis.num_of_likes,
    num_likes
])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
    });

});

module.exports = router;