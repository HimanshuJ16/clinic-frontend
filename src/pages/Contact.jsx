import React from 'react';
import clinicImage from '../assets/images/clinicImage.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 ">Contact Us</h2>
          <p className="text-lg mb-4 text-textColor">
            Feel free to get in touch with us using the contact information provided below. Whether you have
            questions, feedback, or need to schedule an appointment, we're here to assist you.
          </p>
          <h2 className='text-center leading-7 font-semibold border-2 border-black bg-green-300 rounded-xl py-2'>Sahitya saraswati holistic homeopathic clinic 🏥</h2>
          <div className="flex items-center  mb-4 mt-4">
            <FaMapMarkerAlt className="text-primary mr-2" />
            
            
            <p>3 Rohini Sector 24 Road, New Delhi, Delhi 110085</p>
          </div>
          
          <div className="flex items-center  mb-4">
            <FaEnvelope className="text-primary mr-2" />
            <p>info@example.com</p>
          </div>
          <div className="flex items-center justify-center font-bold mt-5 bg-green-700 py-3 rounded-xl  mb-4">
            <FaPhone className="text-primary mr-2" />
            <p>088002 54752</p>
          </div>
        </div>
        <div>
          <img src={clinicImage} alt="Clinic" className="w-full rounded-lg border-2 border-gray-500" />
        </div>
      </div>
      <iframe className='w-11/12 mx-auto mt-2 rounded-xl ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2762580788453!2d77.26799367408972!3d28.53141498866792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1697ab6022b%3A0xfe69f42d65afdb19!2sDSEU%20OKHLA%202%20CAMPUS!5e0!3m2!1sen!2sin!4v1710394136521!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Contact;
