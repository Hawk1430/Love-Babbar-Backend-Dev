const express = require("express");
const app = express();
const port = 3000;

//inbuilt middleware
app.use(express.json());

const loggingMiddleware = function (req, res, next) {
  console.log("Log In");
  next();
};
const authMiddleware = function (req, res, next) {
  console.log("Authenticating");
  next();
};
const validMiddleware = function (req, res, next) {
  console.log("validating");
  res.send();
  next();
};

app.use(loggingMiddleware);
app.use(authMiddleware);
app.use(validMiddleware);

app.get("/", (req, res) => {
  console.log("main router");
  console.log(req.body); //it read json due to inbuilt middleware
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Hawk is watching you on port ${port}`);
});
