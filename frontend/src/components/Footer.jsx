import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-sm border'>

        <div>
            <img src={assets.logo} alt="" className="mb-5 w-32" />
            <p className='w-full md:2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel deserunt iusto rem, totam ullam voluptates quia alias tempora accusantium explicabo architecto eos ea et itaque beatae expedita id veritatis? Omnis!</p>
        </div>
        <div >
            <p className='"tex-xl font-medium mb-5"'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Primary Policy</li>

            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">
                GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>9177255932</li>
                <li>Sekhar@gmail.com</li>
                
            </ul>
        </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center w-[100%]">
                Copyright 2025 @ e-commerse-sekhar-all right reserved
            </p>
        </div>
        
      
    </div>
  )
}

export default Footer
