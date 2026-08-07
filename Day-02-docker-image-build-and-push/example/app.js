const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("🚀 Day 2 - Docker Image Build & Push using GitHub Actions");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});