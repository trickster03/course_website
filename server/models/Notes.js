const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
    required: [true, "please provide course of notes"],
  },
  notesDescription: {
    type: String,
  },
  notesLink: {
    type: String,
  },
});

module.exports = mongoose.model("Notes", notesSchema);
