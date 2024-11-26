import React from 'react'
import InfoSection from '../Infosection/Infosection'
import Image from 'next/image'

function CloudHoisting() {
    const CloudHoistingData=[{head:"Cloud Hosting",title:"Secure your data using RegTechFlow’s encrypted cloud servers, giving you peace of mind and accessibility from anywhere.",img:"icons/cloud2.svg"},{head:"On-Premise Hosting",title:"Host RegTechFlow on your servers and maintain full control of your data if you prefer to keep everything in-house.",img:"icons/cloud1.svg"}]
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-4">
      <InfoSection
      title="SECURITY"
      subtitle="Cloud-based or On-Premise Hosting"
      description="RegTechFlow comes equipped with innovative features that make managing your corporate, compliance, and license needs easier than ever:"
      additionalText=""
      width="max-w-3xl"
      textColor="white"
      paraColor="white"

    />
    <div className="flex md:flex-row flex-col">
        {CloudHoistingData.map((cloud,idx)=>{return<div key={idx} className='flex  items-center md:items-start flex-col gap-2'>
<div className="div">
    <Image src={cloud.img} alt={cloud.head} width={300} height={300} className='object-contain'/>
</div>
<div className='flex flex-col md:items-start items-center gap-2'>
    <div className='text-[#FFFFFF] text-lg font-bold'>{cloud.head}</div>
    <div className='text-[#FFFFFF] text-sm leading-7 font-normal md:w-[75%] w-full'>{cloud.title}</div>
    </div>

        </div>})}
     

    </div>
   

    
    
    </div>
    </div>
  )
}

export default CloudHoisting
