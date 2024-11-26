import Image from "next/image";
import { useState } from "react";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row flex-col items-center md:gap-14 gap-y-2 ">
            <div>
           <Image src="icons/faq.svg" alt="fq" width={400} height={400}/>

            </div>
            <div className="col-span-2">
            {faqs.map((faq, index) => (
        <div key={index} className="px-2 md:px-8 py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left text-[14px] md:text-[16px] font-[600] text-[#1E1E1E] "
          >
            {faq.question}
            <span
              className={`transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
            <Image src="icons/drop.svg" alt="arrowDown" width={10} height={10} className="object-cover" / >
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-2 ">{faq.answer}</p>
          )}
        </div>
      ))}
            </div>

        </div>
   
    </div>
  );
}
