const {
  getAllUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/user");

const authentication = require("../middleware/authentication");

const express = require("express");
const router = express.Router();

router.route("/").get(authentication, getAllUsers);
router
  .route("/:id")
  .patch(authentication, updateUser)
  .delete(authentication, deleteUser)
  .get(authentication, getSingleUser);

module.exports = router;
