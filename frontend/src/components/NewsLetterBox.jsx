import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center border my-10 py-5'> 
    <p className="text-2xl font-medium text-gray-800">
        Subcribe now & get 20% off
    </p>
    <p className="text-gray-600 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni suscipit ea, eius neque esse molestiae autem, rem ipsam magnam sed provident sit reprehenderit quaerat repellendus libero! Porro illum itaque excepturi.
    </p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border'>
        <input type="email" placeholder='Enter your email' className="w-full sm:flex-1 outline-none" />
        <button className="bg-black text-white text-xs px-10 py-4 cursor-pointer">SUBSCRIBE</button>

    </form>
      
    </div>
  )
}

export default NewsLetterBox
