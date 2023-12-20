const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getStudent,
  registerStudent,
} = require("../controllers/students");

router.route("/").get(getAllStudents).post(registerStudent);
router.route("/:id").get(getStudent);

module.exports = router;
