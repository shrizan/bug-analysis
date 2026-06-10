const express = require("express");
const path = require("path");
const config = require("./utils/config");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
