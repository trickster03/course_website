const { BadRequestError } = require("../errors");
const fs = require("fs");

const cloudinary = require("cloudinary").v2;

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localpath, folder) => {
  if (!localpath) {
    throw new BadRequestError("Please provide the local file path");
  }
  const response = await cloudinary.uploader.upload(localpath, {
    resource_type: "auto",
    use_filename: true,
    folder: folder,
  });
  fs.unlinkSync(localpath);
  return response;
};
const uploadsController = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.notes.tempFilePath,
    {
      resource_type: "auto",
      use_filename: true,
      folder: "notes",
    }
  );
  fs.unlinkSync(req.files.notes.tempFilePath);
  return res.status(StatusCodes.OK).json({ url: result.secure_url });
};

module.exports = { uploadOnCloudinary };
