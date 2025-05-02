import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from '@clerk/clerk-react';

import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignInSignUp from './components/Auth/SignInSignUp';
import Appointments from './pages/Appointments';
import Records from './pages/Records';
import Billing from './pages/Billing';
import AppointmentForm from './pages/AppointmentForm';
import Consultation from './pages/consultation';
import VideoCallComponent from './components/consultation/VideoCallComponent';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInSignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointmentForm" element={<AppointmentForm />} />

          {/* Protected Routes */}
          <Route
            path="/appointments"
            element={
              <SignedIn>
                <Appointments />
              </SignedIn>
            }
          />
          <Route
  path="/consultation"
  element={
    <SignedIn>
      <Consultation />
    </SignedIn>
  }
/>
<Route
  path="/consultation/room"
  element={
    <SignedIn>
      <VideoCallComponent />
    </SignedIn>
  }
/>

          <Route
            path="/records"
            element={
              <SignedIn>
                <Records />
              </SignedIn>
            }
          />
          <Route
            path="/billing"
            element={
              <SignedIn>
                <Billing />
              </SignedIn>
            }
          />
         
        </Routes>
      </main>

      <Footer />

      {/* Redirect users to sign in if signed out */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

export default App;
