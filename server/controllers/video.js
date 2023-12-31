const { StatusCodes } = require("http-status-codes");
const Video = require("../models/Video");
const { BadRequestError, NotFoundError } = require("../errors");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const Course = require("../models/Course");
const createVideo = async (req, res) => {
  const { course } = req.body;
  if (!course) {
    throw new BadRequestError("Please provide courseName");
  }
  const cor = await Course.findOne({ courseName: course });
  if (!cor) {
    throw new NotFoundError("No course found with this name");
  }
  req.body.course = cor._id;
  const { videoLink, title } = req.body;
  if (!videoLink) {
    throw new BadRequestError("please provide video link");
  }
  const vid = await Video.create(req.body);
  res.status(StatusCodes.CREATED).json({ vid });
};

const getAllVideos = async (req, res) => {
  const { courseName } = req.query;
  if (courseName) {
    const course = await Course.findOne({ courseName });
    if (!course) {
      throw new NotFoundError("No course found with this name");
    }
    const videos = await Video.find({ course: course._id });
    return res.status(StatusCodes.OK).json({ videos, count: videos.length });
  }
  const videos = await Video.find({});
  return res.status(StatusCodes.OK).json({ videos, count: videos.length });
};

const getSingleVideo = async (req, res) => {
  const video = await Video.findById({ _id: req.params.id });
  if (!video) {
    throw new NotFoundError(`No video found with id ${req.params.id}`);
  }
  return res.status(StatusCodes.OK).json({ video });
};

const updateVideo = async (req, res) => {
  const { videoLink, title, course } = req.body;
  if (!videoLink) {
    throw new BadRequestError("Please provide video link");
  }
  if (course) {
    const cor = await Course.findOne({ courseName: course });
    if (!cor) {
      throw new NotFoundError("No course found with this name");
    }
    req.body.course = cor._id;
  }

  const video = await Video.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true, new: true }
  );
  if (!video) {
    throw new NotFoundError(`No video found with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ video });
};

const deleteVideo = async (req, res) => {
  const video = await Video.findByIdAndDelete({ _id: req.params.id });
  if (!video) {
    throw new NotFoundError(`No video found with id ${req.params.id}`);
  }

  res.status(StatusCodes.OK).json({ video });
};
const uploadsController = async (req, res) => {
  const response = await uploadOnCloudinary(
    req.files.videos.tempFilePath,
    "videos"
  );
  res.status(StatusCodes.OK).json({ url: response.secure_url });
};

module.exports = {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
  uploadsController,
};
