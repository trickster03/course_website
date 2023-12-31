const express = require("express");
const router = express.Router();

const { adminLogin, createAdmin } = require("../controllers/auth");
const auth = require("../middleware/authentication");

router.route("/createAdmin").post(auth, createAdmin);
router.route("/adminLogin").post(adminLogin);

module.exports = router;
