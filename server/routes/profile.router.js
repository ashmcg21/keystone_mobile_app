const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/profile', (req, res) => {
    const queryString = `SELECT * FROM "profile";`;

    pool
    .query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        console.log(`Error in profile: ${err}`);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;