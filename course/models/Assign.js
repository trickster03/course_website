const mongoose = require("mongoose");

const assignSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
    required: [true, "please provide course of the assignment"],
  },
  assignDescription: {
    type: String,
  },
  assignment: {
    type: String,
  },
});

module.exports = mongoose.model("Assign", assignSchema);
