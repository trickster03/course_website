const express = require("express");
const {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
  getSingleNote,
} = require("../controllers/notesController");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const router = express.Router();

const authentication = require("../middleware/authentication");
const { uploadsController } = require("../controllers/notesController");

router.route("/").get(getAllNotes).post(authentication, createNotes);
router.route("/uploads").post(authentication, uploadsController);
router
  .route("/:id") // req.params.id
  .get(getSingleNote)
  .patch(authentication, updateNotes)
  .delete(authentication, deleteNotes);

module.exports = router;
