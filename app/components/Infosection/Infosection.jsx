"use client"
import Image from 'next/image';
import React from 'react';

function InfoSection({imageArray, gap = "0.5rem", descriptionhead,title, icon,subtitle, description, additionalText, buttonText,textColor="#6200EE",paraColor="#1E1E1E", width = 'max-w-3xl' }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <span className="font-bold text-sm tracking-wide" style={{color:`${textColor}`}}>
        {title}
      </span>
      <h2 style={{color:`${textColor}`}} className={`font-bold text-2xl sm:text-3xl md:text-[32px] leading-[44px] tracking-[-2%] ${width}`}>
        {subtitle}
      </h2>
      <div className={`${width} mx-auto text-sm sm:text-base  ${paraColor === "white" ? "opacity-100" : "opacity-70"}`} style={{color:`${paraColor}`, marginTop: `${gap}`}}>

      <p className="leading-7">
      {descriptionhead &&<span> At <span className="font-semibold mr-1">RegTechFlow,</span></span>}
             {description}
            </p>
        {additionalText && <p>{additionalText}</p>}
      </div>
      {Array.isArray(imageArray) && imageArray.length>0 && (
<div>
  <div className="flex flex-wrap justify-center my-4 gap-4 md:gap-x-12">
  {imageArray.map((image, index) => (
            <div key={index} className="relative w-[200px]">
              <Image
                src={image}
                width={100}
                height={100}
                alt="Feature Image"
                className="w-[200px] object-cover"
              />
            </div>
          ))}
  </div>
</div>

      )}
      {buttonText && (
          <button className={`w-auto flex  items-center  ${icon?"justify-between gap-2":"justify-center "} py-2 px-4 md:py-3 md:px-6 font-bold text-lg text-[#6200EE] rounded-full border-2 border-[#6200EE] bg-white hover:bg-[#f8f8f8] transition-all`}>
          <p className="font-semibold leading-7 text-sm"> {buttonText}</p>
          {icon&&(<Image src={icon} alt="icon" className='object-cover h-4 w-4' height={16} width={16} />)}
         
        </button>
      
      )}
    </div>
  );
}

export default InfoSection;
