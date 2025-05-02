import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useUser } from '@clerk/clerk-react';
import jsPDF from 'jspdf';

const AppointmentForm = () => {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    name: '',
    email: user?.primaryEmailAddress?.emailAddress || '',
    phone: '',
    gender: '',
    age: '',
    specialization: '',
    doctor: '',
    date: '',
    time: '',
    mode: 'Offline',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generatePDFSlip = (data) => {
    const doc = new jsPDF();
    const appointmentId = `APT-${Date.now().toString().slice(-6)}`;

    doc.setFontSize(18);
    doc.text("HealthSphere Appointment Slip", 20, 20);

    doc.setFontSize(12);
    const fields = [
      `Appointment ID: ${appointmentId}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Gender: ${data.gender}`,
      `Age: ${data.age}`,
      `Specialization: ${data.specialization}`,
      `Doctor: ${data.doctor}`,
      `Date: ${data.date}`,
      `Time: ${data.time}`,
      `Mode: ${data.mode}`,
      `Reason: ${data.reason}`
    ];

    fields.forEach((text, index) => {
      doc.text(text, 20, 30 + index * 10);
    });

    doc.setFontSize(10);
    doc.text("Thank you for booking with HealthSphere!", 20, 170);

    doc.save(`${data.name.replace(/\s+/g, '_')}_Appointment_${appointmentId}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSubmitted(false);

    const payload = {
      ...formData,
      age: parseInt(formData.age, 10),
    };

    try {
      await axios.post('/appointments/book', payload);
      setSubmitted(true);
      generatePDFSlip(payload);

      setFormData({
        name: '',
        email: user?.primaryEmailAddress?.emailAddress || '',
        phone: '',
        gender: '',
        age: '',
        specialization: '',
        doctor: '',
        date: '',
        time: '',
        mode: 'Offline',
        reason: '',
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-8 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="input input-bordered w-full" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input input-bordered w-full" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="input input-bordered w-full" />

        <select name="gender" value={formData.gender} onChange={handleChange} required className="input input-bordered w-full">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required className="input input-bordered w-full" />

        <select name="specialization" value={formData.specialization} onChange={handleChange} required className="input input-bordered w-full">
          <option value="">Select Specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="ENT">ENT</option>
        </select>

        <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} placeholder="Doctor Name" required className="input input-bordered w-full" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="input input-bordered w-full" />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required className="input input-bordered w-full" />

        <select name="mode" value={formData.mode} onChange={handleChange} required className="input input-bordered w-full">
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>

        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Reason for visit"
          required
          className="textarea textarea-bordered md:col-span-2 h-24 resize-none w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition-all duration-200"
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>

        {submitted && (
          <p className="md:col-span-2 text-green-600 text-center">
            ✅ Appointment booked successfully! PDF downloaded.
          </p>
        )}
        {errorMsg && (
          <p className="md:col-span-2 text-red-600 text-center">
            ❌ {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
