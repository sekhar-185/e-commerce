import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}/>   
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px] '/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className="text-gray-500">Power Gym ,Wnp-Ambedkar Chouck </p>
          <p className='text-gray-500'>Tel:()9177255932 <br />example@gmail.com</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ">Explore </button>
        </div>
        </div>   
    </div>
   
  )
}

export default Contact
