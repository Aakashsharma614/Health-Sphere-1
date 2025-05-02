import React, { useEffect, useState } from "react";
import Doctor from "../assets/doctor1111.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointments");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <div className="px-6 md:px-10 py-24 bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="w-full md:w-3/5 space-y-6">
          <p className="text-xl text-gray-700 font-semibold">❤ Health is Wealth</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Talk to online doctors and get medical advice, prescriptions, and notes in minutes. 
            On-demand healthcare at your fingertips.
          </p>
          <button
            className="flex items-center gap-2 px-6 py-3 text-white bg-[#00695c] hover:bg-transparent hover:text-[#00695c] border border-[#00695c] rounded-full transition-all"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
            Book Appointment
          </button>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-6">
            <div className="text-center">
              <p className="text-[#00695c] text-3xl font-bold">0</p>
              <p className="text-gray-700 text-lg">Receive Patients</p>
            </div>
            <div className="text-center">
              <p className="text-[#00695c] text-3xl font-bold">0</p>
              <p className="text-gray-700 text-lg">Expert Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-[#00695c] text-3xl font-bold">0</p>
              <p className="text-gray-700 text-lg">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-2/5">
          <img src={Doctor} alt="Doctor" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Scroll to top button */}
      {goUp && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-bounce"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </div>
  );
}

export default Hero;
