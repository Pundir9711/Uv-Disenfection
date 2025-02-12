import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: false
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {
      name: !formData.name,
      email: !formData.email
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="relative w-full">
      {/* Background with gradient */}
      <div 
        className="w-full px-4 py-16 relative"
        style={{
          background: 'linear-gradient(180deg, #03a9f4 20%, #2e587b 100%)'
        }}
      >        

        {/* Form Content */}
        <div className="max-w-xl mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl  mb-4">
            Too busy to call?
          </h2>
          <p className="text-lg mb-8">
            No problem. Leave us your info and we'll contact you instead.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <p className="text-red-300 text-sm text-left">
                  This field is required.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-300 text-sm text-left">
                  This field is required.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-white text-orange-500 cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Optional: Add scroll to top button here */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </section>
  );
};

export default ContactForm;