# 🩺 HealthSphere – Smarter Healthcare, One Click Away

**HealthSphere** is an innovative healthcare web platform built to enhance accessibility, efficiency, and transparency in the patient-doctor experience. Designed with both patients and medical professionals in mind, it empowers users to book appointments, conduct real-time video consultations, access live transcription services, and purchase medicines online — all from a single interface.

This platform especially focuses on students and campus communities, allowing them to locate faculty or doctors within the university, such as their department or cabin location.

With advanced features like 3-layer authentication (including biometric login), real-time communication, and AI-powered transcription, HealthSphere aims to digitize healthcare interactions while ensuring security, reliability, and ease of use.

---

## 🚀 Key Highlights

### ✅ Core Features
- **Secure 3-Layer Authentication:** Email/password + OTP + biometric login (WebAuthn)
- **Real-Time Video Consultations:** Seamless communication using WebRTC and Socket.IO
- **Speech-to-Text Transcription:** Live transcription during calls, downloadable as a PDF
- **Appointment Booking:** Schedule and manage doctor consultations with ease
- **Medicine Teleservices:** Add and purchase medicines through a digital storefront
- **Doctor Locator:** Find faculty/doctor cabin info and availability within the university

### 💡 Future Enhancements
- AI-powered chatbot for basic symptom diagnosis  
- EHR (Electronic Health Record) integration  
- Multi-language transcription support  
- Appointment reminders via email/SMS  
- Smart analytics dashboard for doctors and admins  

---

## 🛠️ Tech Stack

| Technology       | Usage                                         |
|------------------|-----------------------------------------------|
| **React.js**     | Frontend UI Framework                         |
| **Tailwind CSS** | UI Styling                                    |
| **Node.js**      | Backend runtime environment                   |
| **Express.js**   | Server and API handling                       |
| **MongoDB**      | NoSQL Database                                |
| **Socket.IO**    | Real-time video/audio communication           |
| **WebRTC**       | Peer-to-peer video streaming                  |
| **Web Speech API** | Speech-to-text transcription                |
| **jsPDF**        | Convert transcribed text to downloadable PDFs |
| **Nodemailer**   | OTP email service                             |
| **WebAuthn**     | Biometric authentication                      |
| **JWT**          | User authentication                          |

---

## 📁 Project Folder Structure

HealthSphere/
├── client/ # React frontend
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components (e.g., Login, Dashboard)
│ └── App.js
├── server/ # Node.js backend
│ ├── controllers/ # Route logic
│ ├── routes/ # API routes
│ ├── models/ # Mongoose models
│ └── config/ # Database and auth config
└── README.md # Project documentation

it is a basic folder structure not complete make sure.......

Screenshots for the Health-Sphere
Home Page
<img width="960" alt="doctor" src="https://github.com/user-attachments/assets/64fbfe03-3389-4c58-871d-36766cd93e3a" />

Services Page

<img width="960" alt="Screenshot 2025-05-02 155955" src="https://github.com/user-attachments/assets/b0f801bb-9a2b-45e3-9e47-92c623ba3072" />

<img width="960" alt="Screenshot 2025-05-02 160119" src="https://github.com/user-attachments/assets/85db0677-da6d-477b-84d9-62f7d707bc22" />

Appointment Page

<img width="960" alt="Screenshot 2025-05-02 160204" src="https://github.com/user-attachments/assets/cc10f65f-b856-405c-be8c-48f701593311" />





