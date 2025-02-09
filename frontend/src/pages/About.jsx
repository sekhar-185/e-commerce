import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-5 md:w-2/4 txt-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat voluptatem deserunt ad eveniet aspernatur dignissimos omnis sint molestias, saepe iusto perspiciatis optio cumque sit soluta dolorum. Commodi, reprehenderit hic.
        Aspernatur asperiores molestiae officia rerum. Similique minima nulla rem quos! Illum, quas vel nemo voluptatem id at ipsa nisi placeat porro omnis consequatur hic necessitatibus, inventore aliquid, aperiam rem maiores!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque deserunt pariatur laudantium sit tempora ipsum ratione mollitia ipsam consectetur reprehenderit autem odio accusamus rerum atque, quo obcaecati iure. Suscipit!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit vel veniam temporibus dicta excepturi nemo minima, quaerat, odit nobis, natus repellat vitae consequatur omnis provident optio vero sit? Ab, animi.</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standars</p>

        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>with our userfriendly interface and hassle free ordering process, shopping</p>
          
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standars</p>
          
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
