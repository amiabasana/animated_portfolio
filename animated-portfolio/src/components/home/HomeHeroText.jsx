import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-64 lg:mt-0 pt-5 text-center text-white'>
        <div className='uppercase lg:text-[9.5vw] text-[11vw] lg:leading-[8vw] leading-[12vw] flex justify-center items-center'>L'étincelle</div>

        <div className='uppercase lg:text-[9.5vw] text-[11vw] lg:leading-[8vw] leading-[12vw] flex items-start justify-center'>qui <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-1'><Video/></div> génère</div>

        <div className='uppercase lg:text-[9.5vw] text-[11vw] lg:leading-[8vw] leading-[12vw] flex justify-center items-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText