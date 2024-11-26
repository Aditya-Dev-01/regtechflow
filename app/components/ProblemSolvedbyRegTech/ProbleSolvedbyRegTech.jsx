import React from "react";
import InfoSection from "../Infosection/Infosection";
import FeaturesGrid from "../FeaturesGrid/FeaturesGrid";

function ProbleSolvedbyRegTech() {
    const features = [
        {
          title: 'Cut Manual Work by 75%',
          description:
            'Enter your data once, and let us do the magic for you. RegTechFlow automates corporate processes, license applications, and compliance monitoring, saving you time and effort.',
        },
        {
          title: 'Never Miss a Deadline',
          description:
            'Stay on top of important dates with automated reminders for compliance deadlines, contract renewals, audits, license renewals, and more, ensuring timely submissions and updates.',
        },
        {
          title: 'Reduce Compliance Costs',
          description:
            'Save on labour costs by automating key processes, allowing RegTechFlow to function like an extra team member without breaking your budget.',
        },
        {
          title: 'Secure File Sharing',
          description:
            'Safely manage and share your documents with only authorized partners, both inside and outside your organization, ensuring your sensitive information stays protected.',
        },
      ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <InfoSection
        title="WHAT WE DO"
        subtitle="Problems Solved by RegTechFlow"
        description="we automate corporate and compliance processes using the data stored in our platform."
        additionalText="This helps businesses manage regulatory tasks smoothly and efficiently."
        buttonText=""
        descriptionhead="RegTechFlow"
        width="max-w-4xl"
      />
<FeaturesGrid
        features={features}
     
      />
     
      </div>
    </div>
  );
}

export default ProbleSolvedbyRegTech;