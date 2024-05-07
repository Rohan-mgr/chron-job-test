const express = require("express");
require("dotenv").config();
const cron = require("node-cron");
const sendMail = require("./mailer");
const app = express();

app.get("*", (req, res, next) => {
  res.status(200).json({
    message: "bad request",
  });
});

cron.schedule("* * * * *", async () => {
  console.log("Run Every minute...");
  await sendMail();
});

app.listen(8080, () => {
  console.log("Server listening at port 8080");
});
