import React, { useState } from "react";

function ContactUs ()  {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vin: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Reset error message as user types
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation Check: Ensure all fields are filled out
    if (!formData.name || !formData.email || !formData.vin || !formData.message) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    console.log("Form Data Submitted:", formData);

    // Set success message
    setIsSubmitted(true);

    // Optionally reset the form
    setFormData({
      name: "",
      email: "",
      vin: "",
      message: "",
    });

    // Clear the success message after a timeout
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <h2 className=" merriweather-bold text-3xl text-center text-black mb-8">Tired of Ordering The Wrong Part? We Can Help</h2>
      
      
        {isSubmitted && (
          <p className="text-green-368 text-center mb-4">
            Your message has been sent successfully!
          </p>
        )}

        
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto p-6  rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-black font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-black font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368"
                />
              </div>

              {/* VIN Input */}
              <div>
                <label className="block text-black font-medium mb-1">VIN</label>
                <input
                  type="text"
                  name="vin"
                  placeholder="Vehicle Identification Number"
                  value={formData.vin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368"
                />
              </div>
            </div>

           
            <div>
              <label className="block text-black font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="8"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368"
              ></textarea>
            </div>
          </div>

         
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full bg-gray-500 text-green-368 text-white py-2 rounded-md hover:bg-green-368 transition duration-300"
            >
              Send Message
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
