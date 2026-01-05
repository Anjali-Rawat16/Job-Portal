import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#f5efff] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#593c8f] mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Have questions, feedback, or need support? Reach out to us!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#593c8f] text-white rounded hover:bg-[#4b2f7a] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Email: support@careerhub.com</p>
          <p>Location: India</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;