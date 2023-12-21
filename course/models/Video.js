const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
    required: [true, "please provide course "],
  },
  videoDescription: {
    type: String,
  },
  video: {
    type: String,
    required: [true, "please provide video "],
  },
});

module.exports = mongoose.model("Video", videoSchema);
