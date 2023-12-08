const Notes = require("../models/Notes");
const { StatusCodes } = require("http-status-codes");
const path = require("path");

const { BadRequestError, NotFoundError } = require("../errors");

const createNotes = async (req, res) => {
  const { courseName, notes } = req.body;
  if (!courseName || !notes) {
    throw new BadRequestError("please provide courseName and notes pdf");
  }
  const note = await Notes.create(req.body);
  res.status(201).json({ note });
};

const getAllNotes = async (req, res) => {
  const notes = await Notes.find({});
  res.status(200).json({ notes });
};

const getSingleNote = async (req, res) => {
  const note = await Notes.findById({ _id: req.params.id });
  if (!note) {
    throw new NotFoundError(`No note found with id ${note}`);
  }
  res.status(StatusCodes.OK).json({ note });
};

const updateNotes = async (req, res) => {
  const { courseName, notes } = req.body;
  if (!courseName || !notes) {
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
  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }
  const notes = req.files.notes;
  const notePath = path.join(__dirname, "../public/uploads/" + `${notes.name}`);
  await notes.mv(notePath);
  return res
    .status(StatusCodes.OK)
    .json({ notes: { src: `/uploads/${notes.name}` } });
};

module.exports = {
  createNotes,
  getAllNotes,
  uploadsController,
  updateNotes,
  deleteNotes,
  getSingleNote,
};
