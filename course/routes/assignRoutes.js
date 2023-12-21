const express = require("express");
const {
  createAssign,
  getAllAssign,
  updateAssign,
  getSingleAssign,
  deleteAssign,
  uploadsController,
} = require("../controllers/assignment");
const router = express.Router();
const authentication = require("../middleware/authentication");

router.route("/uploads").post(authentication, uploadsController);
router.route("/").post(authentication, createAssign).get(getAllAssign);
router
  .route("/:id")
  .patch(authentication, updateAssign)
  .get(getSingleAssign)
  .delete(authentication, deleteAssign);

module.exports = router;
