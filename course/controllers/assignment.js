const Assign = require("../models/Assign");
const Course = require("../models/Course");

const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const createAssign = async (req, res) => {
  const { courseName } = req.query;
  const { assignDescription, assignment } = req.body;

  if (!(assignDescription || assignment)) {
    throw new BadRequestError("Please provide assignment");
  }

  if (!courseName) {
    throw new BadRequestError("Please provide course name of the assignment");
  }

  const course = await Course.findOne({ courseName });
  if (!course) {
    throw new NotFoundError("No course found with this name");
  }
  req.body.course = course._id;

  const Assignment = await Assign.create(req.body);
  res.status(StatusCodes.CREATED).json({ Assignment });
};

const getAllAssign = async (req, res) => {
  const { courseName } = req.query;
  if (!courseName) {
    throw new BadRequestError("Please provide courseName");
  }
  const course = await Course.findOne({ courseName });

  if (!course) {
    throw new NotFoundError("No course found with this name");
  }

  const assignments = await Assign.find({ course: course._id });

  res.status(StatusCodes.OK).json({ assignments, count: assignments.length });
};

const updateAssign = async (req, res) => {
  const { assignDescription, assignment } = req.body;

  if (!(assignDescription || assignment)) {
    throw new BadRequestError("Please provide assignment");
  }

  const Assignment = await Assign.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true, new: true }
  );
  if (!Assignment) {
    throw new NotFoundError(`No assignment found with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ Assignment });
};

const deleteAssign = async (req, res) => {
  const assignment = await Assign.findByIdAndDelete({ _id: req.params.id });
  if (!assignment) {
    throw new NotFoundError(`No assignment found with id ${req.params.id}`);
  }
  return res.status(StatusCodes.OK).json({ msg: "success" });
};

const getSingleAssign = async (req, res) => {
  const assignment = await Assign.findById({ _id: req.params.id });
  if (!assignment) {
    throw new NotFoundError(`No assignment found with id ${req.params.id}`);
  }
  return res.status(StatusCodes.OK).json({ assignment });
};

const uploadsController = async (req, res) => {
  const response = await uploadOnCloudinary(
    req.files.assignment.tempFilePath,
    "assignments"
  );

  return res.status(StatusCodes.OK).json({ url: response.secure_url });
};

module.exports = {
  createAssign,
  getAllAssign,
  updateAssign,
  deleteAssign,
  getSingleAssign,
  uploadsController,
};
