const express = require("express");
const {
  getAllVideos,
  createVideo,
  getSingleVideo,
  updateVideo,
  deleteVideo,
  uploadsController,
} = require("../controllers/video");
const router = express.Router();

const authentication = require("../middleware/authentication");

router.route("/").get(getAllVideos).post(authentication, createVideo);
router.route("/uploads").post(authentication, uploadsController);
router
  .route("/:id")
  .get(getSingleVideo)
  .patch(authentication, updateVideo)
  .delete(authentication, deleteVideo);

module.exports = router;
