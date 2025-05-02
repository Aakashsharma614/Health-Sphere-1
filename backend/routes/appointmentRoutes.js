const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Routes
router.post('/book', appointmentController.bookAppointment);
router.get('/all', appointmentController.getAllAppointments);
router.get('/user/:email', appointmentController.getAppointmentsByEmail);
router.delete('/:id', appointmentController.deleteAppointment);
router.put('/:id', appointmentController.updateAppointment); // optional for rescheduling

module.exports = router;
