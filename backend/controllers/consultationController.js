const Appointment = require("../models/Appointments");

exports.bookAppointment = async (req, res) => {
  try {
    const newAppt = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: newAppt });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
