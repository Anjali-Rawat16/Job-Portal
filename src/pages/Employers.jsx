import React from "react";


const Employers = () => {
  return (
    <div className="bg-[#f5efff] min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#593c8f] mb-4">
            Hire the Right Talent Faster
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Connect with skilled professionals and find the perfect candidate
            for your company in just a few steps.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-[#593c8f] text-white px-6 py-2 rounded hover:bg-[#4b2f7a]">
              Contact Us
            </button>
            <button className="border border-[#593c8f] text-[#593c8f] px-6 py-2 rounded hover:bg-[#e6dcff]">
              Post a Job (Coming Soon)
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Post a Job",
              desc: "Share job requirements and role details easily."
            },
            {
              title: "Review Applications",
              desc: "Browse qualified candidates and resumes."
            },
            {
              title: "Hire Faster",
              desc: "Select the best candidate for your team."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow text-center"
            >
              <h3 className="text-xl font-semibold text-[#593c8f] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#593c8f] mb-8">
            Why Choose Career-Hub?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Access to a large pool of job seekers",
              "Simple and easy hiring process",
              "Verified candidate profiles",
              "Faster recruitment",
              "Free job postings (limited)"
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow text-gray-700"
              >
                ✔ {point}
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#593c8f] mb-8">
            Roles We Support
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Software Developers",
              "UI / UX Designers",
              "Data Analysts",
              "Marketing Executives",
              "Freshers & Interns"
            ].map((role, index) => (
              <span
                key={index}
                className="bg-white px-5 py-2 rounded shadow text-gray-700"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#593c8f] mb-8">
            Trusted by Top Companies
          </h2>

          <div className="flex justify-center gap-8 flex-wrap text-gray-600 font-semibold">
            <span>Google</span>
            <span>Infosys</span>
            <span>TCS</span>
            <span>Accenture</span>
            <span>Wipro</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded shadow max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#593c8f] mb-6">
            Get in Touch
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Our team will contact you soon.");
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Company Name"
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border px-4 py-2 rounded"
              required
            />
            <textarea
              placeholder="Message"
              className="border px-4 py-2 rounded"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-[#593c8f] text-white py-2 rounded hover:bg-[#4b2f7a]"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Employers;