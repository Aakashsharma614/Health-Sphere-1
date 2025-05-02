import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-white via-[#f0fdfa] to-white shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 z-50 rounded-b-2xl border-b border-gray-300 backdrop-blur-md">
      {/* Logo Section */}
      <Link to="/" onClick={closeMenu}>
        <div className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 duration-300">
          <img
            src={pic}
            alt="HealthSphere logo"
            className="h-10 w-10 rounded-full shadow-lg"
          />
          <h2 className="text-2xl font-extrabold tracking-wide text-red-600">
            Health<span className="text-emerald-500">Sphere</span>
          </h2>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-green-900 font-semibold text-lg">
        {[
          "Home",
          "About",
          "Services",
          "Contact",
          "Appointments",
          "Records",
          "Billing",
          "Consultation",
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="relative hover:text-green-600 transition duration-200"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center space-x-3">
        <button
          onClick={toggleMenu}
          className="text-green-800 hover:scale-110 transition-transform"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-3 right-3 mx-auto bg-white/95 backdrop-blur-lg rounded-xl shadow-xl z-50 p-5 border border-gray-200">
          <ul className="flex flex-col space-y-4 text-green-800 font-medium">
            {[
              "Home",
              "About",
              "Services",
              "Contact",
              "Appointments",
              "Records",
              "Billing",
              "Consultation",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  onClick={closeMenu}
                  className="hover:text-green-600 transition-all duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* User Auth */}
      <div className="hidden md:flex items-center space-x-4 ml-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link
            to="/signin"
            className="text-blue-600 font-semibold px-4 py-1.5 rounded-md border border-blue-300 hover:bg-blue-100 transition"
          >
            Sign In
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
