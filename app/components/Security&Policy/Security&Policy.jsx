"use client"
import React from 'react'
import InfoSection from '../Infosection/Infosection'
import FAQ from '../FAQ/Faq'

function SecurityPolicy() {
  const faqData = [
    { question: "What is RegTechFlow?", answer: "RegTechFlow is a platform for automating compliance and corporate management." },
    { question: "How does RegTechFlow automate corporate management?", answer: "It helps streamline processes by providing tools to manage entities and track compliance." },
    { question: "Can I track license applications through RegTechFlow?", answer: "Yes, RegTechFlow offers features to track and manage license applications seamlessly." },
    { question: "How does RegTechFlow handle compliance?", answer: "It automates compliance tracking and sends alerts for important updates." },
    { question: "Is my data secure on RegTechFlow?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "Can I manage multiple entities with RegTechFlow?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "How does RegTechFlow help with document expiry dates?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "Can external stakeholders access RegTechFlow?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "Which industries can use RegTechFlow?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "Who can use RegTechFlow?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "Can I customize the platform for my business needs?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },
    { question: "Where is RegTechFlow hosted?", answer: "Yes, RegTechFlow uses advanced security protocols to protect your data." },

  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-14">
      <InfoSection
      title="SECURITY"
      subtitle="Security and Privacy"
      description="security is our top priority. We implement advanced encryption, multi-layered protection, and strict data privacy protocols to ensure your sensitive information is safeguarded at every step. Our secure platform guarantees the confidentiality and integrity of your information, giving you peace of mind as you automate compliance."
      additionalText=""
      buttonText="Read More"
      icon="/icons/export.svg"
      descriptionhead="At RegTechFlow, "
      imageArray={["/icons/frame2.svg","/icons/frame1.svg"]}
      width="max-w-4xl"
      gap='2rem'

    />
    <div>
    <FAQ faqs={faqData} />
    </div>
   

    
    
    </div>
    </div>
  )
}

export default SecurityPolicy
