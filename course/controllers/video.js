const { StatusCodes } = require("http-status-codes");
const Video = require("../models/Video");
const { BadRequestError, NotFoundError } = require("../errors");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const createVideo = async (req, res) => {
  const { courseName } = req.query;
  if (!courseName) {
    throw new BadRequestError("Please provide courseName");
  }
  const course = await Course.findOne({ courseName });
  if (!course) {
    throw new NotFoundError("No course found with this name");
  }
  req.body.course = course._id;
  const { video, videoDescription } = req.body;
  if (!video) {
    throw new BadRequestError("please provide video");
  }
  const Video = await Video.create(req.body);
  res.status(StatusCodes.CREATED).json({ Video });
};

const getAllVideos = async (req, res) => {
  const { courseName } = req.query;
  if (!courseName) {
    throw new BadRequestError("Please provide courseName");
  }
  const course = await Course.findOne({ courseName });
  if (!course) {
    throw new NotFoundError("No course found with this name");
  }
  const videos = await Video.find({ course: course._id });
  res.status(StatusCodes.OK).json({ videos, count: videos.length });
};

const getSingleVideo = async (req, res) => {
  const video = await Video.findById({ _id: req.params.id });
  if (!video) {
    throw new NotFoundError(`No video found with id ${req.params.id}`);
  }
  return res.status(StatusCodes.OK).json({ video });
};

const updateVideo = async (req, res) => {
  const { video, videoDescription } = req.body;
  if (!video) {
    throw new BadRequestError("Please provide video");
  }
  const Video = await Video.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true, new: true }
  );
  if (!Video) {
    throw new NotFoundError(`No video found with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ Video });
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
