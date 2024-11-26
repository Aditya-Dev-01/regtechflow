import Image from 'next/image';
import React from 'react';
import HomeImage from '../../../public/images/home.png';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-8 md:px-16 pt-8">
      <div className="flex flex-col gap-4 md:w-1/2">
        <div className='flex md:flex-col flex-wrap md:gap-0 gap-2'>
          <h1 className="text-[#1E1E1E] font-extrabold text-2xl sm:text-4xl sm:leading-[48px]">
            Automate Processes
          </h1>
          <div className="flex gap-3 items-center">
            <h1 className="text-[#1E1E1E] font-extrabold text-2xl sm:text-4xl sm:leading-[48px]">
              For
            <span className="text-[#6200EE] font-extrabold text-2xl sm:text-4xl ml-3">
              Corporate
            </span>
            </h1>
          </div>
          <div className="text-[#1E1E1E] font-extrabold text-2xl sm:text-4xl sm:leading-[48px]">
            Management
          </div>
        </div>
        <div className="text-[#1E1E1E]/70 text-lg sm:text-xl md:text-base lg:text-lg">
          <span className="font-bold">RegTechFlow </span>
          <span>
            is the all-in-one tool for professionals and businesses looking to
            scale compliance and corporate governance.
          </span>
        </div>
        <div className='flex justify-center md:justify-start mt-2'>
          <button className="w-auto flex items-center justify-center gap-2 py-2 px-4 md:py-3 md:px-6 font-bold text-lg text-[#6200EE] rounded-full border-2 border-[#6200EE] bg-white hover:bg-[#f8f8f8] transition-all">
            <p className="font-semibold leading-7 text-sm">Request a Demo Today</p>
            <Image
              src="icons/arrow.svg"
              height={16}
              width={16}
              alt="arrow"
            />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg md:p-4 flex justify-center items-center  md:w-1/2">
        <Image
          src={HomeImage}
          alt="Hero"
          height={451}
          width={630}
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
