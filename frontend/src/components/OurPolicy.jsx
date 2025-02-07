import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 border'>
        <div className='border'>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5 border'alt="" />
            <p className="font-semibold">Easy exhange policy</p>
            <p className="text-gray-400">we offer hassle free exhange policy</p>
        </div>

        <div className='border font-semibold'>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5 border'alt=""  />
            <p className="font-semibold"></p>7 Days Return Policy
            <p className="text-gray-400 font-normal">we provide 7 days free return policy</p>
        </div>


        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5 border'alt="" />
            <p className="font-semibold">Best customer support</p>
            <p className="text-gray-400">we offer hassle free exhange policy</p>
        </div>

        
      
    </div>
  )
}

export default OurPolicy
