import React from 'react'
import HeroDesktop from '../assets/image-hero-desktop.png';
import HeroMobile from '../assets/image-hero-mobile.png';
import DataBiz from '../assets/client-databiz.svg';
import AudioPhile from '../assets/client-audiophile.svg';
import Meet from '../assets/client-meet.svg';
import Maker from '../assets/client-maker.svg';

const Main = () => {
  return (
    <main className='w-full'>
      <div className='max-w-[1440px] w-full mx-auto px-8 pb-40 md:pb-4 grid grid-cols-2 gap-16 md:flex md:flex-col-reverse'>

        {/* First grid column */}
        <div className='flex flex-col justify-between h-full md:text-center md:items-center'>
          {/* Text */}
          <div className='flex flex-col justify-around h-full py-16 md:py-0'>
            <div className='md:pb-8'>
              <h1 className='text-7xl lg:text-6xl font-bold'>Make</h1>
              <h1 className='text-7xl lg:text-6xl font-bold'>remote work</h1>
            </div>
            <p className='text-[1.125rem] text-[#696969]'>
              Get your team in sync, no matter your location.
              Streamline processes, create team rituals, and 
              watch your productivity soar.
            </p>
            <button className='text-[#fafafa] hover:text-[#141414] bg-[#141414] hover:bg-[#fafafa] duration-300 border px-4 py-4 hover:border-[#141414] rounded-xl w-[170px] md:self-center md:my-8'>
              Learn More
            </button>
          </div>
          {/* Sponsors */}
          <div className='flex items-center justify-start gap-8 lg:gap-4'>
            <img src={DataBiz} alt='databiz'/>
            <img src={AudioPhile} alt='audiphile'/>
            <img src={Meet} alt='meet'/>
            <img src={Maker} alt='maker'/>
          </div>
        </div>

        {/* Main hero image container */}
        <div className='w-[500px] lg:w-[400px] md:w-full h-full'>
          <picture>
            <source media='(max-width: 767px)' srcSet={HeroMobile}/>
            <img className='w-full h-full' src={HeroDesktop} alt='Hero'/>
          </picture>
        </div>
      </div>
    </main>
  )
}

export default Main