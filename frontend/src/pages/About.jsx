import React from "react";
import Doctor from "../assets/doctor1111.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HealthSphere() {
  return (
    <div className="py-20 bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1]">
      {/* Section Header hona hai */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
          Welcome to <span className="text-green-600">HealthSphere</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
          A comprehensive telemedicine and patient management platform designed to enhance accessibility, reduce healthcare costs, and improve efficiency.
        </p>
      </div>

      {/* Section Content hai */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-6">
        {/* Image */}
        <div className="flex-1 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
          <img
            src={Doctor}
            alt="Doctor Group"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features and the Solutions of us */}
        <div className="flex-1">
          <h3 className="text-4xl font-semibold text-green-600 mb-6">
            Key Features
          </h3>
          <div className="space-y-8">
            <SolutionStep
              title="Video Consultations"
              description="Connect with healthcare providers remotely and receive real-time medical advice."
            />
            <SolutionStep
              title="Electronic Health Records"
              description="Securely store and access patient medical histories, prescriptions, and test results."
            />
            <SolutionStep
              title="Appointment Scheduling"
              description="Effortlessly book, manage, and receive reminders for medical appointments."
            />
            <SolutionStep
              title="Telemedicine"
              description="Order medicines from trusted pharmacies online."
            />
            <SolutionStep
              title="HIPAA-Compliant Security"
              description="Maintain the highest level of data privacy and protection."
            />
          </div>
        </div>
      </div>

      {/* Service Details of our app */}
      <div className="max-w-7xl mx-auto px-6 mt-24 text-center">
        <h3 className="text-4xl font-semibold text-green-600 mb-6">Service Details</h3>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Remote Healthcare Access:</strong> Consult with certified professionals without leaving your home.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Automated Health Reports:</strong> Receive AI-generated reports based on your health data.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>24/7 Emergency Assistance:</strong> Immediate access to emergency medical support.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Secure Messaging:</strong> Chat with doctors and receive prescriptions instantly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Data Security & Privacy:</strong> HealthSphere adheres to strict compliance standards, including HIPAA and GDPR, ensuring patient data is encrypted and protected.
          </p>
        </div>
      </div>

      {/* Mission of us */}
      <div className="mt-24 text-center">
        <h3 className="text-4xl font-semibold text-green-600 mb-6">Our Mission</h3>
        <p className="text-lg text-gray-700 mx-6 leading-relaxed">
          HealthSphere is committed to making healthcare more accessible, affordable, and convenient. Our platform bridges the gap between patients and healthcare providers, ensuring high-quality medical care is just a click away. Join us in transforming healthcare through technology and innovation.
        </p>
      </div>
    </div>
  );
}

function SolutionStep(props) {
  return (
    <div className="space-y-4">
      <p className="flex items-center gap-3 text-xl font-semibold text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105">
        <FontAwesomeIcon className="text-green-600 text-2xl" icon={faCircleChevronDown} />
        {props.title}
      </p>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}
