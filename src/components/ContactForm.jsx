import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message:''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // API endpoint updated with your provided URL
      const response = await fetch('https://p7hjkeqa74.execute-api.eu-north-1.amazonaws.com/prod/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <div id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">INTERESTED?</h2>
        <p className="text-center mb-8">Share your phone number or email, our sales representative will contact you.</p>
        
        <div className="max-w-md mx-auto">
          {status.submitted ? (
            <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-md mb-6">
              Thank you for your interest! Our team will contact you shortly.
            </div>
          ) : null}
          
          {status.error ? (
            <div className="bg-red-100 border border-red-500 text-red-700 p-4 rounded-md mb-6">
              {status.error}
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              {status.submitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </form>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-4">DETAILED BROCHURE</h3>
            <div className="flex justify-center">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;