

import React from 'react';
import Doctors from '../components/Doctors';
import Hero from '../components/Hero';
 import Chatbot  from '../components/Chatbot';
const Home = () => (
  <div className='bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1]'>
  {/* Hero ka  Section */}
  <Hero/>


{/* Chatbot jo h */}
<Chatbot/>


    {/* Doctor ka  Section */}
    <Doctors/>  
  

  </div>
);

export default Home;



