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
router.put('/edit/:id', (req, res) => {
    const profileId = req.params.id;
    const newProfileInfo = req.body;
    const queryText = `UPDATE "user"
    SET "username" = $1, "email" = $2, "organization" = $3, "phone_number" = $4
    WHERE "id" = $5;`;

    pool.query(queryText, [
        newProfileInfo.username,
        newProfileInfo.email,
        newProfileInfo.organization,
        newProfileInfo.phone_number,
        profileId
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