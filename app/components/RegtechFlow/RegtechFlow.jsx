import React from 'react'
import InfoSection from '../Infosection/Infosection'
import Image from 'next/image'

function RegtechFlow() {
  const flowData = [{
    head: "Corporate Management",
    description: "Managing your company’s data across multiple departments—legal, finance, and operations has never been easier. With RegTechFlow, you can efficiently store and manage all your corporate data in one secure platform, removing the repetitive burden of filling out forms for various corporate processes.",
    icon: "icons/flow1.svg"
  }, {
    head: "License Management",
    description: "Filing license applications becomes automated, saving you from repetitive paperwork and allowing you to focus on what matters most.",
    icon: "icons/flow2.svg"
  }, {
    head: "Compliance Monitoring",
    description: "Manage your ongoing obligations in one platform. Tailor your compliance processes by industry, country, or both.",
    icon: "icons/flow3.svg"
  }, {
    head: "Consultants and Advisors Solutions",
    description: "Use the platform to automate processes and add value to your clients by offering:",
    points:["Automation tools for your clients","Client workspace management","Centralized document management","Reminders and notifications"],
    icon: "icons/flow4.svg"
  }]
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-14">
        <InfoSection
          title="WHY RegTechFlow?"
          subtitle="RegTechFlow Solutions"
          descriptionhead="RegTechFlow"
          description="we help businesses of all sizes and industries automate their corporate, licensing, and compliance management. Our platform reduces repetitive tasks and ensures you stay compliant with minimal effort. Explore our solutions that simplify your business processes, allowing you to focus on growth while we handle the details."
          additionalText=""
          width="max-w-4xl"
        />
        <div className='flex flex-col'>
          {flowData.map((flow, idx) => {
            return <div key={flow.head} className={`flex  ${idx % 2 === 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"} items-center gap-10 md:gap-24`}>
              <div className="md:min-w-[341px]">
                <Image
                  src={flow.icon}
                  alt={flow.icon}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className={`flex ${idx % 2 === 0 ? "items-start md:items-end" : "items-start"} flex-col gap-3`}>
                <div className='text-[#1E1E1E] font-bold text-lg'>{flow.head}</div>
                <div className={`text-[#1E1E1E]/70 font-normal text-sm leading-7 ${idx === flowData.length-1 ? 'w-full': 'md:w-9/12'} ${idx % 2 === 0 ?"text-left md:text-right md:pl-5 ":"text-left"} `}>{flow.description}</div>
               {flow.points &&  <div>
                <ul  className="list-disc pl-6 space-y-2">
                  {flow.points.map((point)=><li key={point} className={`text-left text-[#1E1E1E]/70 marker:text-[#1E1E1E]/70 marker:text-xl marker:leading-6 font-medium text-sm leading-7`}>{point}</li>)}
                </ul>
                </div>}
                <div className='flex items-center gap-2  cursor-pointer'>
                  <div className="text-[#6200EE] font-semibold text-sm">Learn More</div>
                  <Image src="icons/arrow.svg"
                    height={16}
                    width={16}
                    alt="arrow" />

                </div>
              </div>


            </div>
          })
          }


        </div>



      </div>
    </div>
  )
}

export default RegtechFlow
