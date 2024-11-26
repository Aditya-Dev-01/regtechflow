
import React from 'react';
import Image from 'next/image';

const FeaturesGrid = ({ features, imageUrl }) => {
 
  const leftFeatures = features.slice(0, 2);
  const rightFeatures = features.slice(2, 4);

  return (
    <div className="container mx-auto px-4">
      <div className={`relative grid grid-cols-1 ${imageUrl?"md:grid-cols-3":"md:grid-cols-2 gap-8 md:gap-y-12 md:gap-x-8"}  items-center`}>
        <div className="space-y-8">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="text-left space-y-3">
              <h3 className="text-[#1E1E1E] text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-[#1E1E1E]/70 text-sm md:max-w-[370px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {imageUrl && <div className="flex justify-center items-center">
          {imageUrl && (
            <div className="relative w-full max-w-md">
              <Image
                src={imageUrl}
                alt="Feature Center Image"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}
        </div> }
        <div className="space-y-8">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="text-left space-y-3">
              <h3 className="text-[#1E1E1E] text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-[#1E1E1E]/70 text-sm md:max-w-[370px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
