import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConsultationBooking = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    mode: "video",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/consultation/book", formData);
      navigate("/consultation/room");
    } catch (err) {
      console.error(err);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Book Your Consultation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Patient Name"
          className="input"
          required
          onChange={(e) =>
            setFormData({ ...formData, patientName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Doctor Name"
          className="input"
          required
          onChange={(e) =>
            setFormData({ ...formData, doctorName: e.target.value })
          }
        />
        <input
          type="datetime-local"
          className="input"
          required
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <select
          className="input"
          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
        >
          <option value="video">Video Call</option>
          <option value="audio">Audio Call</option>
        </select>
        <button type="submit" className="btn-primary w-full">
          Book
        </button>
      </form>
    </div>
  );
};

export default ConsultationBooking;
