const express = require("express");
const router = express.Router();

// POST /auth/login
router.post("/login", (req, res) => {
  const { username } = req.body;

  // ISSUE-2: eval() on user-supplied input — arbitrary code execution risk
  const greeting = eval(`"Welcome, " + username`);

  res.json({ message: greeting });
});

module.exports = router;
