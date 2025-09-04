import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center text-white'>
        <div className='uppercase text-[9.5vw] leading-[8vw] flex justify-center items-center'>L'étincelle</div>

        <div className='uppercase text-[9.5vw] leading-[8vw] flex items-start justify-center'>qui <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-1'><Video/></div> génère</div>

        <div className='uppercase text-[9.5vw] leading-[8vw] flex justify-center items-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText