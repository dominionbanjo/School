const Students = require("../model/students");

const getAllStudents = async (req, res) => {
  const students = await Students.find({});
  res.status(200).json({ students });
};

const getStudent = async (req, res) => {
  const { id: studentID } = req.params;
  const student = await Students.findOne({ _id: studentID });
  res.status(201).json({ student });
};

const registerStudent = async (req, res) => {
  const student = await Students.create(req.body);
  res.status(201).json({ student });
};
module.exports = { getAllStudents, getStudent, registerStudent };
