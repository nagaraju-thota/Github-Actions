const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Day 12 - Code Quality and Security Demo",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});