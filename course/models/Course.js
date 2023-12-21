const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "please provide course name"],
    unique: true,
  },
  courseDescription: {
    type: String,
  },
});

module.exports = mongoose.model("Course", courseSchema);
