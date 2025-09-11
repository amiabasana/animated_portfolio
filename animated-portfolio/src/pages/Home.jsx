import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText';
import HomeButtonText from '../components/home/HomeButtonText';

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
        <Video/>
        </div>
        <div className='h-screen w-screen relative flex flex-col justify-between pb-5'>
            <HomeHeroText/>
            <HomeButtonText/>
        </div>
    </div>
  )
}

export default Home