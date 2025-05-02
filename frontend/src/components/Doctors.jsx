import React from "react";
import { FaUserMd } from "react-icons/fa"; // Adjust path krna higa
import doc1 from "../assets/Naresh.png"
import doc2 from '../assets/devi.jpg'
import doc3 from "../assets/randeep.jpg"
import doc4 from "../assets/ashok.jpg"
import doc5 from "../assets/Arvind.png"
import doc6 from '../assets/nandita.jpg'

function Doctors() {
  const doctorList = [
  {
    id: 1,
    photo: doc1,
    name: "Dr. Naresh Trehan",
    degree: "MBBS, Diplomate (USA) – Cardiothoracic Surgery",
    profileLink: "https://www.medanta.org/doctors/dr-naresh-trehan",
  },
  {
    id: 2,
    photo: doc2,
    name: "Dr. Devi Prasad Shetty",
    degree: "MBBS, MS – Cardiac Surgery",
    profileLink: "https://www.narayanahealth.org/bangalore/cardiac-sciences/cardiology-adult/dr-devi-prasad-shetty",
  },
  {
    id: 3,
    photo: doc3,
    name: "Dr. Randeep Guleria",
    degree: "MBBS, MD – Pulmonary Medicine",
    profileLink: "https://www.aiims.edu/en/about-us/faculty/faculty.html?id=856",
  },
  {
    id: 4,
    photo: doc4,
    name: "Dr. Ashok Seth",
    degree: "MBBS, MD, DM – Cardiology",
    profileLink: "https://www.fortishealthcare.com/doctor/dr-ashok-seth-690",
  },
  {
    id: 5,
    photo: doc5,
    name: "Dr. Arvind Kumar",
    degree: "MBBS, MS – Thoracic Surgery",
    profileLink: "https://www.medanta.org/doctors/dr-arvind-kumar",
  },
  {
    id: 6,
    photo: doc6,
    name: "Dr. Nandita Palshetkar",
    degree: "MBBS, MD – Obstetrics & Gynecology",
    profileLink: "https://nanditapalshetkar.in/",
  }
];


  return (
    <div
      name="Doctors"
      className=" container mx-auto px-4 md:px-20 bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-10 pb-16 my-4"
    >
      
      <h1 className="text-4xl font-bold text-center text-[#00695c] mb-10">
        Meet Our Healthcare Experts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {doctorList.map(({ id, photo, name, degree, profileLink }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={photo}
              alt={name}
              className="w-40 h-40 object-contain rounded-full border-4 border-[#00897b] mb-5"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600 mt-1 mb-4 text-center">
              {degree}
            </p>
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#00897b] text-white px-5 py-2 rounded-full hover:bg-[#00695c] transition-all duration-300"
            >
              <FaUserMd className="mr-2" />
              Check Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
