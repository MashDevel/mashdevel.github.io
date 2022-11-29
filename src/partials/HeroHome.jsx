import React, { useState } from 'react';
import Modal from '../utils/Modal';
import { FaPlug } from 'react-icons/fa';
import HeroImage from '../images/hero-image.png';
import Vid from '../images/demo.mp4';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      {/* <div style={{zIndex: 0}} className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-12 pb-12 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <div className="flex flex-row items-center justify-center text-5xl font-bold text-slate-300 z-10">
            <FaPlug />
            <h1 className='m-0 p-0'>SocketPlay</h1>
          </div>
            <h2 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">The Place For Party Games</h2>
          </div>

          {/* Hero image */}
          <div className="w-full">
      
            {/* <div className='mb-12'>
                <h3 className="text-slate-400 w-full text-3xl text-center pb-3 font-extrabold">Sign-Up For Early Access</h3>
                <form className="w-full flex items-center justify-center">
                    <div className="flex w-full flex-col sm:flex-row items-center justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      
                      <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                      <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Submit</a>
                    </div>
                </form>
            </div> */}
            
                <div className='relative' style={{paddingBottom: '56.25%', height: 0}}>
                  <video autoPlay loop muted playsinline src={Vid}></video>
          </div>
          </div>


        </div>

      </div>
    </section>
  );
}

export default HeroHome;