const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

// ISSUE-8: req.query interpolated directly into a shell command — command injection (High)
router.get("/ping", (req, res) => {
  const host = req.query.host;
  exec(`ping -c 1 ${host}`, (err, stdout) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ output: stdout });
  });
});

// ISSUE-9: req.body interpolated directly into a SQL string — SQL injection (High)
router.post("/search-user", (req, res) => {
  const name = req.body.name;
  const query = `SELECT * FROM users WHERE username = '${name}'`;
  // db.query(query) would execute the injection
  res.json({ query });
});

module.exports = router;
