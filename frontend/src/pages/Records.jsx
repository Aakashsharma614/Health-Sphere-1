import React, { useState } from "react";
import { FaUserMd, FaClipboardList } from "react-icons/fa";
import { MdSave } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa"; // del ka icon

const PatientRecords = () => {
  const [records, setRecords] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSaveRecord = () => {
    if (!patientName || !diagnosis || !prescription || !image) {
      alert("All fields including an image are required!");
      return;
    }
    const newRecord = { patientName, diagnosis, prescription, image };
    setRecords([...records, newRecord]);
    setPatientName("");
    setDiagnosis("");
    setPrescription("");
    setImage(null);
  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1]  flex flex-col items-center  p-5">
      <div className="bg-white shadow-lg rounded-xl mt-6 p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-[#00695c] flex items-center mb-4">
          <FaUserMd className="mr-2" /> Doctor's Patient Record
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <textarea
            placeholder="Prescription"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="w-full p-2 border rounded-lg"
          />
          {image && <img src={image} alt="Patient" className="w-full h-40 object-cover mt-2 rounded-lg" />}
          <button
            onClick={handleSaveRecord}
            className="bg-[#00695c] text-white p-2 w-full rounded-lg flex items-center justify-center transition duration-200 hover:bg-green-800"
          >
            <MdSave className="mr-2" /> Save Record
          </button>
        </div>
      </div>
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
          <FaClipboardList className="mr-2" /> Saved Records
        </h2>
        {records.length === 0 ? (
          <p className="text-gray-600">No records saved yet.</p>
        ) : (
          records.map((record, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-3">
              <h3 className="font-bold text-lg text-blue-600">{record.patientName}</h3>
              <p className="text-gray-700"><strong>Diagnosis:</strong> {record.diagnosis}</p>
              <p className="text-gray-700"><strong>Prescription:</strong> {record.prescription}</p>
              <img src={record.image} alt="Patient" className="w-full h-32 object-cover rounded-lg mt-2" />
              <button
                onClick={() => handleDeleteRecord(index)}
                className="mt-2 bg-red-500 text-white p-2 rounded-lg flex items-center justify-center transition duration-200 hover:bg-red-700"
              >
                <FaTrashAlt className="mr-2" /> Delete Record
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientRecords;
