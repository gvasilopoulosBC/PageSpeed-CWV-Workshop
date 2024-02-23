const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    exposedHeaders: "*",
    allowedHeaders: "Content-Type",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use((req, res, next) => {
  // Fake pause
  // 1)Reduce TTFB metric with fast backend response.
  setTimeout(next, Math.floor(120));
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
