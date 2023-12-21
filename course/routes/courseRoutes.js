const express = require("express");
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getSingleCourse,
} = require("../controllers/course");
const router = express.Router();

const authentication = require("../middleware/authentication");

router.route("/").post(authentication, createCourse).get(getAllCourses);
router
  .route("/:id")
  .patch(authentication, updateCourse)
  .delete(authentication, deleteCourse)
  .get(getSingleCourse);

module.exports = router;
