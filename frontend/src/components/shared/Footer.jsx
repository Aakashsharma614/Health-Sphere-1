import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-blue-950 text-white py-8">
      <div className="max-w-screen-xl container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0">
          {/* Left Section hai - Brand Info rahegi */}
          <div className="text-center md:text-left md:max-w-lg">
            <h2 className="text-3xl font-bold mb-1 text-green-600">Health<span className="text-white">Sphere</span></h2>
            <p className="text-sm text-gray-300 leading-snug">
              Your trusted Telemedicine & Patient Management Platform.
            </p>
            <p className="text-sm mt-1 text-gray-400">
              Secure video consultations, record access, and easy appointment booking — all in one place.
            </p>
          </div>

          {/* Social Media icons hona hai */}
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
                size={26}
                className="text-green-500 hover:text-green-400 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF
                size={26}
                className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn
                size={26}
                className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section all of it */}
        <div className="mt-6 border-t border-gray-400 pt-4 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 HealthSphere. All rights reserved.</p>
          <p className="text-sm mt-1">
            <a href="/privacy-policy" className="text-cyan-300 hover:underline">Privacy Policy</a>
          </p>
          <p className="text-sm mt-1 text-gray-300">Crafted with care by <span className="text-white font-medium">Loop Breakers</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
