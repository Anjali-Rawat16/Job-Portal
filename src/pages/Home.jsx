import React, { useContext, useState } from "react";
import heroimg from "../assets/heroimg.jpg";
import { MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { JobsContext } from "../context/JobsContext";

const Home = () => {
  const { jobs, loading } = useContext(JobsContext);
  const featuredJobs = jobs.slice(0, 3); // Show top 3 featured jobs

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/jobs?title=${title}&location=${location}`);
  };

  // Job title options
  const jobTitles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Data Scientist",
    "ML Engineer",
    "DevOps Engineer",
  ];

  // Indian location options
  const locations = [
    "India",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Remote - India",
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-[#f5efff] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Job Today
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Search thousands of jobs from top companies and grow your career.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
              {/* JOB TITLE */}
              <div className="relative w-full md:w-1/3">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  list="job-titles"
                  type="text"
                  placeholder="Job title or keyword..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border rounded focus:outline-none"
                />

                <datalist id="job-titles">
                  {jobTitles.map((jt) => (
                    <option key={jt} value={jt} />
                  ))}
                </datalist>
              </div>

              {/* LOCATION */}
              <div className="relative w-full md:w-1/3">
                <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  list="locations"
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border rounded focus:outline-none"
                />

                <datalist id="locations">
                  {locations.map((loc) => (
                    <option key={loc} value={loc} />
                  ))}
                </datalist>
              </div>

              {/* SEARCH BUTTON */}
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-[#593c8f] text-white rounded hover:bg-[#4b2f7a]"
              >
                Find Job
              </button>
            </div>

            <p className="text-gray-600 mt-4">
              Suggestion: UI/UX designer, Software engineer, ML engineer
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={heroimg}
              alt="hero"
              className="max-w-md mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Jobs</h2>
          <p className="text-gray-600 text-center mb-8">
            Choose jobs from top employers and apply for the same.
          </p>

          {loading ? (
            <p className="text-center">Loading jobs...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <div
                  key={job._uniqueKey}
                  className="bg-[#f5efff] p-4 rounded-lg shadow hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 rounded-full bg-[#593c8f] text-white flex items-center justify-center font-bold">
                    {job.employer_name?.charAt(0) || "J"}
                  </div>

                  <h3 className="font-semibold text-lg mt-3">{job.job_title}</h3>
                  <p className="text-sm text-gray-600">{job.employer_name}</p>
                  <p className="text-sm text-gray-500">{job.job_city || "India"}</p>

                  <a
                    href={job.job_apply_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 px-4 py-1 bg-[#593c8f] text-white rounded"
                  >
                    Apply →
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-10">
            <Link
              to="/jobs"
              className="text-[#593c8f] font-medium hover:underline"
            >
              View All Jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f5efff] py-10 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">Career-Hub</h1>
            <p className="text-gray-600">
              Your gateway to the best jobs across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul className="text-gray-600 space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/employers">Employers</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="flex items-start font-semibold mb-2">Follow Us</h2>
            <div className="space-y-2 text-gray-600">
              <a className="flex items-center gap-2"><FaInstagram /> Instagram</a>
              <a className="flex items-center gap-2"><FaFacebookF /> Facebook</a>
              <a className="flex items-center gap-2"><FaTwitter /> Twitter</a>
              <a className="flex items-center gap-2"><FaLinkedinIn /> LinkedIn</a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm">
          © {new Date().getFullYear()} Career-Hub. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
