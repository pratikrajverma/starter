import React from 'react'
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";


const Card = ({review}) => {
  return (
    <div className='flex flex-col md:relative items-center box-border '>

            <div className='top-[-10px] left-[15px] absolute  mx-auto z-[10] '>
                <img  className='aspect-square rounded-full w-[100px] h-[100px] ' src={review.image} ></img>
                <div className='w-[100px] aspect-square bg-violet-500 rounded-full
                                 absolute top-[-6px] z-[-20]'>
                </div>
            </div>

            <div className=' text-center mt-7'>
                <p className=' font-bold text-2xl capitalize'>{review.name}</p>
            </div>

            <div className=' text-center mt-1'>
                <p className=' text-violet-400 uppercase text-sm'>{review.job}</p>
            </div>

            <div className=' text-center mt-7 text-violet-400'> <FaQuoteLeft /></div>
            
            <div className='h-24'><div className='text-center box-border mt-2 text-slate-500 '>
                {review.text}
            </div></div>

            <div className=' text-center mt-7 text-violet-400'> <FaQuoteRight /></div>

            

    </div>
  )
}

export default Card