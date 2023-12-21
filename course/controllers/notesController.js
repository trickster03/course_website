const Notes = require("../models/Notes");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const createNotes = async (req, res) => {
  const { courseName } = req.query;

  if (!courseName) {
    throw new BadRequestError("Please provide courseName");
  }
  const course = await Course.findOne({ courseName });
  if (!course) {
    throw new NotFoundError("No course found with this name");
  }
  req.body.course = course._id;
  const { notes, notesDescription } = req.body;
  if (!(notes || notesDescription)) {
    throw new BadRequestError("please provide notes");
  }
  const note = await Notes.create(req.body);
  res.status(201).json({ note });
};

const getAllNotes = async (req, res) => {
  const { courseName } = req.query;
  if (!courseName) {
    throw new BadRequestError("Please provide courseName");
  }
  const course = await Course.findOne({ courseName });
  if (!course) {
    throw new NotFoundError("No course found with this name");
  }
  const notes = await Notes.find({ course: course._id });
  res.status(200).json({ notes, count: notes.length });
};

const getSingleNote = async (req, res) => {
  const note = await Notes.findById({ _id: req.params.id });
  if (!note) {
    throw new NotFoundError(`No note found with id ${note}`);
  }
  res.status(StatusCodes.OK).json({ note });
};

const updateNotes = async (req, res) => {
  const { notesDescription, notes } = req.body;
  if (!(notesDescription || notes)) {
    throw new BadRequestError("please provide all details");
  }

  const note = await Notes.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!note) {
    throw new NotFoundError(`No note found with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ note });
};

const deleteNotes = async (req, res) => {
  const note = await Notes.findByIdAndDelete({ _id: req.params.id });
  if (!note) {
    throw new NotFoundError({ _id: req.params.id });
  }

  res.status(StatusCodes.OK).json({ note });
};

const uploadsController = async (req, res) => {
  const response = await uploadOnCloudinary(
    req.files.notes.tempFilePath,
    "notes"
  );
  return res.status(StatusCodes.OK).json({ url: response.secure_url });
};

module.exports = {
  createNotes,
  getAllNotes,
  updateNotes,
  deleteNotes,
  getSingleNote,
  uploadsController,
};
