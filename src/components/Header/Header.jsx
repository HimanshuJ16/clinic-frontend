import React from 'react'
import { useEffect, useRef, useContext } from 'react'
import logo from "../../assets/images/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../context/AuthContext'

const navLinks = [
  {
    path:'/',
    display: 'Home'
  },
  {
    path:'/doctors/65f6cc87a8fd84b542ed3d37',
    display: 'Doctor'
  },

  {
    path:'/services',
    display: 'Services'
  },

  {
    path:'/contact',
    display: 'Contact'
  }

]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user, role, token} = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  
  return <header className='header flex items-center' ref={headerRef}>
    <div className="container">
      <div className="flex items-center justify-between">
        {/* ...logo..... */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* ....menu..... */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex item-center gap-[2.7rem]">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className={navClass => 
                      navClass.isActive 
                        ?'text-primaryColor text-[16px] border-b-2 font-semibold border-b-black leading-7 font-[600'
                        :'text-textColor text-[16px] leading-7 font-[600'} 
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        {/* ....nav right..... */}
        <div className='flex items-center gap-4'>
          {token && user ? (
            <div>
              <Link to={`${role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}`}>
                {user?.photo ? (
                  <figure className='w-[35px] h-[35px] rounded-full'>
                    <img src={user?.photo} alt="" className='w-full rounded-full' />
                  </figure>
                ) : (
                  <h2>Hi, {user?.name}</h2>
                )}
              </Link>
            </div>
          ) : (
            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                Login
              </button>
            </Link>
          )}          
          <span className='xl:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div> 

      </div>
    </div>
  </header>
}

export default Header