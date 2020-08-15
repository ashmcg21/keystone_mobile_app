const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/profile', (req, res) => {
    const queryString = `SELECT * FROM "profile";`;
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;