const Appointment = require('../models/Appointment');

// Book an appointment
exports.bookAppointment = async (req, res) => {
  try {
    const data = req.body;

    // Optional: Simulate missing data error
    if (!data.name  || !data.phone || !data.reason) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    // Optional: Force simulate a backend crash (for testing frontend error display)
    // throw new Error("Simulated server crash");

    const newAppointment = new Appointment(data);
    await newAppointment.save();

    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("❌ Backend Error:", error.message);
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

// Other methods (fill as needed)
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ date: 1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch appointments." });
  }
};

exports.getAppointmentsByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const userAppointments = await Appointment.find({ email });
    res.status(200).json(userAppointments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user's appointments." });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete appointment." });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updated = await Appointment.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update appointment." });
  }
};
