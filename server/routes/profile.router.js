const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const queryString = `SELECT * FROM "user" WHERE "id" = $1;`;
    const personId = req.params.id;

    pool
    .query(queryString, [personId])
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
router.post('/edit/:id', (req, res) => {

});

module.exports = router;