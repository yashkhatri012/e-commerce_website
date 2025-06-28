import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className='my-10 flex felx-col md:flex-row gap-16'>
        <img src= {assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex  flex-col justify-center gap-6  md:w-2/4 text-gray-600'>
        <p>aaaaaaaa</p>
        <p>aaaaaaaa</p>
        <b className='text-gray-800'>Our Mission</b>
        </div>

      </div>
      <div className='text-xl py-4'>
        <title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex  flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>aaaa</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality assurance</b>
          <p className='text-gray-600'>aaaa</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptioanl customer service</b>
          <p className='text-gray-600'>aaaa</p>
        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
