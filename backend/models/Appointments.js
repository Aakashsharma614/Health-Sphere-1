const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  date: Date,
  mode: String, // 'video' or 'audio'
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Appointments", appointmentSchema);
