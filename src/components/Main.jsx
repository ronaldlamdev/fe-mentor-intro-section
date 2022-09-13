import React from 'react'
import HeroDesktop from '../assets/image-hero-desktop.png';
import HeroMobile from '../assets/image-hero-mobile.png';
import DataBiz from '../assets/client-databiz.svg';
import AudioPhile from '../assets/client-audiophile.svg';
import Meet from '../assets/client-meet.svg';
import Maker from '../assets/client-maker.svg';

const Main = () => {
  return (
    <main className='w-full h-screen'>
      <div className='max-w-[1440px] w-full h-full mx-auto px-8 pb-40 grid grid-cols-2'>

        {/* First grid column */}
        <div className='flex flex-col justify-between'>
          {/* Text */}
          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='text-4xl'>Make</h1>
              <h1>remote work</h1>
            </div>
            <p className='text-[1.125rem]'>
              Get your team in sync, no matter your location.
              Streamline processes, create team rituals, and 
              watch your productivity soar.
            </p>
            <button>
              Learn More
            </button>
          </div>
          {/* Sponsors */}
          <div className='flex items-center justify-between'>
            <img src={DataBiz} alt='databiz'/>
            <img src={AudioPhile} alt='audiphile'/>
            <img src={Meet} alt='meet'/>
            <img src={Maker} alt='maker'/>
          </div>
        </div>

        {/* Main hero image container */}
        <div>
          <picture>
            <source media='(max-width: 767px)' srcSet={HeroMobile}/>
            <img src={HeroDesktop} alt='Hero'/>
          </picture>
        </div>
      </div>
    </main>
  )
}

export default Main