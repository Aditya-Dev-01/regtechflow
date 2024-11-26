import React from 'react'
import InfoSection from '../Infosection/Infosection'
import FeaturesGrid from '../FeaturesGrid/FeaturesGrid'

function KeyFeatures() {
    const features = [
        {
          title: 'Secure File Sharing',
          description:
            'Share your important documents with internal and external stakeholders. Manage access, permissions, and ensure document security at all times.',
        },
        {
          title: 'Smart Reminder System',
          description:
            'Stay ahead of crucial deadlines with automated reminders for compliance reporting, renewals, and other time-sensitive tasks.',
        },
        {
          title: 'Document Archiving and Retrieval',
          description:
            'Never lose track of important files. Archive and easily retrieve any document, whenever you need it.',
        },
        {
          title: 'Expiry Date Alert',
          description:
            'RegTechFlow will notify you before your important documents expire, ensuring you stay up-to-date with all your documentation requirements.',
        },
      ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-6">
      <InfoSection
      title="WHY RegTechFlow?"
      subtitle="Key Features"
      description="RegTechFlow comes equipped with innovative features that make managing your corporate, compliance, and license needs easier than ever:"
      additionalText=""
      buttonText="Request Demo"
      width="max-w-3xl"
    />
    <FeaturesGrid    imageUrl="/images/keyFeature.png"  features={features}/>

    
    
    </div>
    </div>
  )
}

export default KeyFeatures
