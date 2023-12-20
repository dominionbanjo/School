const Staffs = require("../model/staffs");

const getAllStaffs = async (req, res) => {
  const staffs = await Staffs.find({});
  res.status(200).json({ staffs });
};

const getStaff = async (req, res) => {
  const { id: staffID } = req.params;
  const staff = await Staffs.findOne({ _id: staffID });
  res.status(201).json({ staff });
};

const registerStaff = async (req, res) => {
  const staff = await Staffs.create(req.body);
  res.status(201).json({ staff });
};
module.exports = { getAllStaffs, getStaff, registerStaff };
