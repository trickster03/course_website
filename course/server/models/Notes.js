const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "please provide course name"],
  },
  notesDescription: {
    type: String,
  },
  notes: {
    type: String,
    required: [true, "please provide the notes"],
  },
});

module.exports = mongoose.model("Notes", notesSchema);
