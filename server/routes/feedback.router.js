const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/questions", (req, res) => {
  const queryString = `SELECT * FROM "feedback_questions";`;

  pool
    .query(queryString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(`Error getting questions: ${err}`);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  const queryString = `INSERT INTO "feedback" ("comments", "user_id", "question_id") VALUES ($1, $2, $3)`;

  const data = req.body;
  console.log(data);
  pool
    .query(queryString, [data.comments, req.user.id, parseInt(data.question)])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error with comments: ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
