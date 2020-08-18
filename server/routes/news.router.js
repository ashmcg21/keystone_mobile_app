const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
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
router.post('/', (req, res) => {

});

module.exports = router;