import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from "../../config.js";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      const { message } = await res.json();

      if(!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');

    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className='mt-10'>
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
                  aria-readonly
                  readOnly
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
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className='text-gray-500'>Blood Type</label>
                <input
                  type="text"
                  name='bloodType'
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  placeholder='Blood Type'
                  className='border-b p-2 border-gray-300 glass rounded-sm focus:outline-none'
                />
              </div>
              <div className='mb-5 flex items-center justify-between'>
                  <label htmlFor="gender" className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select
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
                {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={formData.photo} alt="" className='w-full rounded-full' />
                </figure>}
                <div className='relative w-[130px] h-[50px]'>
                  <input type="file" name='photo' id='customFile' onChange={handleFileInputChange} accept='.jpg, .png' className='absolute top-0 left-0 h-full opacity-0 cursor-pointer' />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    {selectedFile ? selectedFile.name : 'Upload photo'}
                  </label>
                </div>
              </div>
              <button disabled={loading && true} type="submit" className='bg-primaryColor text-white py-3 rounded-md w-full'>
                { loading ? <HashLoader size={25} color='#ffffff' /> : 'Update' }
              </button>
            </form>
    </div>
  )
}

export default Profile