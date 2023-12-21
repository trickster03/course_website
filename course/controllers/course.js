const { NotFoundError, BadRequestError } = require("../errors");
const Course = require("../models/Course");
const { StatusCodes } = require("http-status-codes");

const getAllCourses = async (req, res) => {
  const courses = await Course.find({});
  res.status(StatusCodes.OK).json({ courses, count: courses.length });
};

const getSingleCourse = async (req, res) => {
  const course = await Course.findById({ _id: req.params.id });
  if (!course) {
    throw new NotFoundError(`No course found with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ course });
};

const updateCourse = async (req, res) => {
  const { courseName } = req.body;
  if (!courseName) {
    throw new BadRequestError("Please provide course name");
  }
  const course = await Course.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true, new: true }
  );
  if (!course) {
    throw new NotFoundError(`No course found with id ${req.params.id}`);
  }

  res.status(StatusCodes.OK).json({ course });
};

const deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete({ _id: req.params.id });
  if (!course) {
    throw new NotFoundError(`No course found with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ msg: "success" });
};

const createCourse = async (req, res) => {
  const { courseName } = req.body;

  if (!courseName) {
    throw new BadRequestError("Please provide course name");
  }
  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
};

module.exports = {
  createCourse,
  deleteCourse,
  updateCourse,
  getSingleCourse,
  getAllCourses,
};
