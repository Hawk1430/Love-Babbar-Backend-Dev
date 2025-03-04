const express = require("express");
const router = express.Router();

// middleares

const auth = function (req, res, next) {
  console.log("Authenticating");

  req.user = { userId: 1, role: "admin" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};
const isStudent = function (req, res, next) {
  console.log("In a student MW");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Only a student can access this page",
    });
  }
};
const isAdmin = function (req, res, next) {
  console.log("In a admin MW");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Only a admin can access this page",
    });
  }
};

//routes-specific middleware
router.get("/students", auth, isStudent, (req, res) => {
  res.send("In a student page");
});
router.get("/admin", auth, isAdmin, (req, res) => {
  res.send("In a admin page");
});

module.exports = router;
