"use client"
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center px-6 md:px-20">
        <div className="text-center">
          <p className="max-w-xl text-[#1E1E1E] font-bold text-2xl md:text-3xl md:leading-[44px]">
            Get the latest updates by subscribing to our{' '}
            <span className="text-[#6200EE]">newsletter</span>
          </p>
        </div>
        <form className="mt-8 w-full max-w-xl" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm text-[#747F95] font-medium mb-1.5">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`text-base w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#D0D5DD] focus:ring-[#6200EE]'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm text-[#747F95] font-medium mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={`text-base w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#D0D5DD] focus:ring-[#6200EE]'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm text-[#747F95] font-medium mb-1.5">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={`text-base w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.company ? 'border-red-500 focus:ring-red-500' : 'border-[#D0D5DD] focus:ring-[#6200EE]'
              }`}
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>
          <div className="mb-6">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-[#6200EE] border-[#D0D5DD] rounded focus:ring-[#6200EE]"
              />
              <span className="text-sm text-[#747F95] font-medium">
                By completing this form, you are also signing up to receive marketing communication from us. Check out
                our{' '}
                <a href="#" className="text-[#6200EE] underline">
                  Privacy Policy
                </a>{' '}
                for more info.
              </span>
            </label>
            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
          </div>
          <button
            type="submit"
            className="w-auto flex items-center justify-center gap-2 py-2 px-4 md:py-3 md:px-6 font-semibold leading-7 text-sm text-[#6200EE] rounded-full border-2 border-[#6200EE] bg-white hover:bg-[#f8f8f8] transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
