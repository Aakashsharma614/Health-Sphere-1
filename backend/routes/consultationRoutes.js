// backend/routes/consultationRoutes.js

const express = require("express");
const router = express.Router();

// Dummy GET route
router.get("/", (req, res) => {
  res.json({ message: "Consultation route is working ✅" });
});

// New POST route for consultations
router.post("/", (req, res) => {
  const { patientName, doctorName, date, time, reason } = req.body;

  if (!patientName || !doctorName || !date || !time || !reason) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  // For now, we simulate saving data to DB by just sending it back
  res.status(201).json({
    message: "Consultation created successfully ✅",
    consultation: {
      patientName,
      doctorName,
      date,
      time,
      reason,
    },
  });
});

module.exports = router;
