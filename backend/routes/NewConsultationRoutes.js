const express = require("express");
const router = express.Router();
const { bookAppointment } = require("../controllers/consultationController");

router.post("/book", bookAppointment);

module.exports = router;
