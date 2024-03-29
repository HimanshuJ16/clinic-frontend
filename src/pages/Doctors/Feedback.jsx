import React from 'react'
import { formateDate } from '../../utils/formatDate'
import avatar from "../../assets/images/avatar-icon.png";
import {AiFillStar}  from 'react-icons/ai';

const Feedback = () => {
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews (272)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar} className='w-full' alt="" />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                John Doe
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formateDate("02-12-2001")}
              </p>
              <p className='text__para mt-3 leading-3 text-textColor'>
                nice
              </p>
            </div>
          </div>
          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_,index) => <AiFillStar key={index} color='#0067FF' />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback