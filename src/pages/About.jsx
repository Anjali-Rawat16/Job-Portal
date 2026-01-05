import React from "react";

const About = () => {
  return (
    <div className="bg-[#f5efff] min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-[#593c8f]">
          About Career-Hub
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg text-center mb-8">
          Career-Hub is a modern job portal designed to help job seekers
          find the right opportunities quickly and easily.
        </p>

        {/* Sections */}
        <div className="space-y-6">

          {/* Mission */}
          <div>
            <h2 className="text-xl font-semibold text-[#593c8f] mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to simplify the job search process by providing
              a user-friendly platform where candidates can search jobs,
              explore opportunities, and apply with confidence.
            </p>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-xl font-semibold text-[#593c8f] mb-2">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Search jobs by title and location</li>
              <li>Browse featured job listings</li>
              <li>Apply directly through job links</li>
              <li>Simple and clean user interface</li>
            </ul>
          </div>

          {/* Who It's For */}
          <div>
            <h2 className="text-xl font-semibold text-[#593c8f] mb-2">
              Who It's For
            </h2>
            <p className="text-gray-600">
              Career-Hub is built for students, freshers, and professionals
              who are looking for job opportunities in India.
            </p>
          </div>

          {/* Future Scope */}
          <div>
            <h2 className="text-xl font-semibold text-[#593c8f] mb-2">
              Future Plans
            </h2>
            <p className="text-gray-600">
              Currently, Career-Hub uses dummy data and public job APIs.
              In the future, we plan to add backend integration, employer
              dashboards, authentication, and real-time job postings.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;