import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <>

    <div>
      
    </div>
        <div
          className="w-full h-[300px]"
          style={{
            background: "linear-gradient(to right, white 50%, #f472b6 50%)" // Tailwind pink-400 hex
          }}


        >

            
        <div className='p-20 '>
            <h1 className=' text-5xl font-bold text-pink-200 prata-regular ml-5'> Latest Collection</h1>
            <div>
                <div className='relative z-10 space-y-4'>
                    <h1 className='text-2xl'>Shop Now</h1>
                    <h1 className='text-sm opacity-55 leading-loose'>badnnnnnnnnnajnjn
                        flkakllafm,laank  nafnk
                        
                    </h1>
                    <h1>flkajkfjaklflaaaaaaaaaafmll</h1>
                    <h1>fajk afnlkaek nfklasjkla fnkajkl
                        jjalfl klfnklamkla</h1>
                </div>
                <div className='absolute -top-6 -left-10  w-[250px] h-[180px] bg-gray-50'></div>
            </div>
          </div>


        </div>









    <div className='flex flex-col sm:flex-row border borde-gray-400' >
            {/* Hero left side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2 ">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
                        <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
                    </div>
                    <h1  className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed' >Latest Arrivals</h1>
                    <div className="items-center flex gap-2">
                        <p className="font-semibold text-sm md:text-base ">SHOP NOW</p>
                        <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
                    </div>
                </div>
            </div>
                {/* Hero Right side */}

                <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
    </>
  )
}

export default Hero



