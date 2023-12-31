const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
    required: [true, "please provide course "],
  },
  title: {
    type: String,
  },
  videoLink: {
    type: String,
    required: [true, "please provide video link "],
  },
});

module.exports = mongoose.model("Video", videoSchema);
