import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; //idhr hoga import
import disease1 from "../assets/disease1.jpg";
import disease2 from "../assets/disease2.jpg";
import disease3 from "../assets/disease3.jpg";
import disease4 from "../assets/disease4.jpg";
import disease5 from "../assets/disease5.jpg";
import disease6 from "../assets/disease6.jpg";
import disease7 from "../assets/disease7.jpg";
import disease8 from "../assets/disease8.jpg";

function Appointment() {
  const navigate = useNavigate(); // <-- navigation hoga

  const diseaseList = [
    {
      id: 1,
      image: disease1,
      name: "Heart Disease",
      description: "A range of conditions that affect your heart and it will do bad effect also.",
    },
    {
      id: 2,
      image: disease2,
      name: "Diabetes",
      description: "A condition affecting blood sugar regulation and you can check.",
    },
    {
      id: 3,
      image: disease3,
      name: "Arthritis",
      description: "Inflammation of one or more of your joints and check it properly.",
    },
    {
      id: 4,
      image: disease4,
      name: "Asthma",
      description: "A condition in which your airways narrow and swell.",
    },
    {
      id: 5,
      image: disease5,
      name: "Hypertension",
      description: "A condition in which the force of the blood against artery walls is too high.",
    },
    {
      id: 6,
      image: disease6,
      name: "Anemia",
      description: "A condition in which you lack enough healthy red blood cells to carry oxygen.",
    },
    {
      id: 7,
      image: disease7,
      name: "Chronic Kidney Disease",
      description: "A long-term condition where the kidneys do not work effectively.",
    },
    {
      id: 8,
      image: disease8,
      name: "Tuberculosis",
      description: "A potentially serious infectious disease that mainly affects the lungs.",
    },
  ];

  return (
    <div
      name="Appointment"
      className="container mx-auto px-4 md:px-20 bg-gradient-to-r from-[#f0fdf4] to-[#e0f7fa] py-12"
    >
      <h1 className="text-4xl font-bold text-center text-[#00796b] mb-12">
        Book an Appointment by Disease
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {diseaseList.map(({ id, image, name, description }) => (
          <div
            key={id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-[#004d40] mb-2">
                {name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <button
                onClick={() => navigate("/appointmentForm")}
                className="inline-flex items-center justify-center bg-[#00796b] hover:bg-[#004d40] text-white font-medium px-4 py-2 rounded-full transition duration-300"
              >
                <FaCalendarCheck className="mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;
