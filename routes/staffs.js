const express = require("express");
const router = express.Router();
const {
  getAllStaffs,
  getStaff,
  registerStaff,
} = require("../controllers/staffs");

router.route("/").get(getAllStaffs).post(registerStaff);
router.route("/:id").get(getStaff);

module.exports = router;
