import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: 'https://www.linkedin.com/',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.github.com/',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.instagram.com/',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
]


const quickLinks = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/services',
    title: 'Services',
  },
  {
    path: '/doctors/65f6cc87a8fd84b542ed3d37',
    title: 'Doctors',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
  {
    path: '/location',
    title: 'Location',
  },
  {
    path: '/doctors/65f6cc87a8fd84b542ed3d37',
    title: 'Book Appointment',
  },
]


const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='pb-16 pt-10'>
    <div className="container">
      <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor' >copyright {year} </p>
          <div className='w-full flex gap-4 justify-between '>
            {
              socialLinks.map((link, index) => <Link>
                <a href={link.path} key={index} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group  hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </a>
              </Link>
            )

    
            
            
           
            }

            <div className="flex gap-5 items-center md:ml-32 flex-wrap">
            {
              quickLinks.map((link, index) => <Link>
                <Link to={link.path} key={index} className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'>
                  {link.title}
                </Link>
              </Link>
            )
            }

            </div>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer