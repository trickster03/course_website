const express = require("express");
const {
  getAllNotes,
  createNotes,
  uploadsController,
  updateNotes,
  deleteNotes,
  getSingleNote,
} = require("../controllers/notesController");
const router = express.Router();

const authentication = require("../middleware/authentication");

router.route("/").get(getAllNotes).post(authentication, createNotes);
router.route("/uploads").post(authentication, uploadsController);
router
  .route("/:id") // req.params.id
  .get(getSingleNote)
  .patch(authentication, updateNotes)
  .delete(authentication, deleteNotes);

module.exports = router;
