import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import { Link, useNavigate } from 'react-router-dom'
import avatar from "../assets/images/doctor-img01.png";
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from "../config.js";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const { message } = await res.json();

      if(!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');

    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className="mx-auto max-w-[1170px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ------------ img box ------------- */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='rounded-l-lg w-full' />
            </figure>
          </div>

          {/* --------------- signup form ---------------- */}
          <div className="py-10 lg:pl-16 rounded-l-lg">
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'>account </span>
            </h3>
            <form className='space-y-5' onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className='text-gray-500'>Full Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Enter your full name'
                  className='border-b border-gray-300 p-2 glass rounded-sm focus:outline-none'
                  required
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className='text-gray-500'>Email</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email'
                  className='border-b p-2 border-gray-300 glass rounded-sm focus:outline-none'
                  required
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className='text-gray-500'>Password</label>
                <input
                  type="password"
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder='Enter your password'
                  className='border-b p-2 border-gray-300 glass rounded-sm focus:outline-none'
                  required
                />
              </div>
              <div className='mb-5 flex items-center justify-between'>
                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a: 
                  <select name="role" value={formData.role} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none' required>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label htmlFor="gender" className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select
                    required
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>
              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={previewUrl} alt="" className='w-full rounded-full' />
                </figure>}
                <div className='relative w-[130px] h-[50px]'>
                  <input type="file" name='photo' id='customFile' onChange={handleFileInputChange} accept='.jpg, .png' className='absolute top-0 left-0 h-full opacity-0 cursor-pointer' />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
              </div>
              <button disabled={loading && true} type="submit" className='bg-primaryColor text-white py-3 rounded-md w-full'>
                { loading ? <HashLoader size={35} color='#ffffff' /> : 'Sign up' }
              </button>
              <p className='mt-5 text-textColor text-center'>
                Already have an account? <Link to='/login' className='text-primaryColor font-medium ml-2'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
