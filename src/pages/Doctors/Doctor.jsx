import React from 'react';
import { FaUserMd, FaGraduationCap, FaBriefcase, FaLanguage } from 'react-icons/fa';
import doctorPhoto from '../../assets/images/doctor-img01.png'; // Assuming you have the doctor's photo in the assets folder
import { Link } from 'react-router-dom';

const Doctor = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={doctorPhoto} alt="Doctor" className="w-full rounded-lg mb-4" />
          
         
        </div>
        <div>
        <div className="flex items-center mb-4">
            <FaUserMd className="text-primary mr-2" />
            <h2 className="text-2xl font-bold text-irisBlueColor">Dr. Nitish kumar</h2>
          </div>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-primary mr-2 text-textColor" />
            <p className="text-lg text-gray-700">(MD)</p>
          </div>
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-primary mr-2" />
            <p className="text-lg text-gray-700">Specialty: Cardiology</p>
          </div>
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-primary mr-2" />
            <p className="text-lg text-gray-700">Experience: 10+ years</p>
          </div>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-primary mr-2" />
            <p className="text-lg text-gray-700">Education: MBBS, MD (Cardiology)</p>
          </div>
          <div className="flex items-center">
            <FaLanguage className="text-primary mr-2" />
            <p className="text-lg text-gray-700">Languages: English, Devnagri</p>
          </div>
          <h3 className="text-2xl font-semibold mb-4 mt-10">About Dr. John Doe</h3>
          <p className="text-lg text-gray-700 mb-4">
            Dr. John Doe is a highly skilled cardiologist with over 10 years of experience
            in diagnosing and treating various cardiac conditions. He completed his MBBS
            from XYZ Medical College and MD in Cardiology from ABC University.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Dr. Doe is dedicated to providing personalized care to his patients and
            staying updated with the latest advancements in the field of cardiology.
          </p>
          <p className="text-lg text-gray-700">
            In addition to English, Dr. Doe is fluent in Spanish, ensuring effective
            communication with patients from diverse backgrounds.
          </p>
        </div>
      </div>

      <div className='w-full  flex items-center justify-end'>
        <button type="button" className='bg-blue-400 p-3 hover:bg-blue-600 rounded-md font-semibold'>
        <Link to='/contact'>Contact me</Link>
        </button>
      </div>
    </div>
    
  );
};

export default Doctor;
