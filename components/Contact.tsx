'use client';
import React from 'react';
import Swal from 'sweetalert2';

function App() {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    
    formData.append("access_key", "ebadb463-e3d1-4e5a-918c-11e675a32e12");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      // Handle the success response
      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Your inquiry has been submitted successfully!",
          icon: "success"
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section className='bg-gray-900 py-7 rounded flex justify-center items-center'>
      <form onSubmit={onSubmit} className='backdrop-blur-lg bg-black/40 border border-gray-700 rounded-lg p-6 shadow-lg w-full max-w-md mx-4 sm:mx-0'>
        <h2 className='text-2xl font-bold text-center text-gray-200 mb-4'>Course Inquiry Form</h2>
        
        {/* Full Name Field */}
        <div className='mb-3'>
          <label className='block text-sm font-semibold text-gray-300 mb-1'>Full Name</label>
          <input 
            type='text' 
            name="name" 
            className='w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none' 
            placeholder='Enter your name' 
            required 
          />
        </div>

        {/* Email Field */}
        <div className='mb-3'>
          <label className='block text-sm font-semibold text-gray-300 mb-1'>Email</label>
          <input 
            type='email' 
            name="email" 
            className='w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none' 
            placeholder='Enter your email' 
            required 
          />
        </div>

        {/* Phone Number Field */}
        <div className='mb-3'>
          <label className='block text-sm font-semibold text-gray-300 mb-1'>Phone Number (Optional)</label>
          <input 
            type='tel' 
            name="phone" 
            className='w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none' 
            placeholder='Enter your phone number' 
          />
        </div>

        {/* Course Selection */}
       

        {/* Message or Inquiry Field */}
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-300 mb-1'>Your Message or Inquiry</label>
          <textarea 
            name="message" 
            className='w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24' 
            placeholder='Enter your message or inquiry'
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type='submit' 
          className='w-full bg-blue-600/80 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}

export default App;  