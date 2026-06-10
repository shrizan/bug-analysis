const express = require("express");
const router = express.Router();

// ISSUE-6: eval() on unsanitised req.query — arbitrary code execution (Critical)
router.get("/run", (req, res) => {
  const expr = req.query.expr;
  const result = eval(expr);
  res.json({ result });
});

module.exports = router;
