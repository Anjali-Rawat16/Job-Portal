import React, { useContext } from "react";
import { JobsContext } from "../context/JobsContext";

const Jobs = () => {
  const { jobs, loading } = useContext(JobsContext);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Loading jobs...
      </p>
    );
  }

  if (!jobs.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No jobs found.
      </p>
    );
  }

  // Skip featured jobs (first 3)
  const remainingJobs = jobs.slice(3);

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          All Jobs
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore all available opportunities and apply today.
        </p>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingJobs.map((job) => {
            // Use the new API field for apply link
            const applyLink = job.job_apply_url || job.job_apply_link || null;

            return (
              <div
              key={job._uniqueKey}
                className="bg-[#f5efff] border rounded-lg p-4 shadow
                           flex flex-col gap-3
                           hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300"
              >
                {/* Letter Avatar */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center
                                text-white font-bold text-lg bg-[#593c8f]">
                  {job.employer_name?.charAt(0) || "J"}
                </div>

                {/* Job Details */}
                <div>
                  <h3 className="font-semibold text-lg">{job.job_title}</h3>
                  <p className="text-sm text-gray-600">{job.employer_name}</p>
                  <p className="text-sm text-gray-500">{job.job_city || "India"}</p>

                  {/* Apply Button */}
                  <a
                    href={applyLink ? applyLink : "#"}
                    target={applyLink ? "_blank" : "_self"}
                    rel={applyLink ? "noreferrer" : ""}
                    className={`inline-block mt-3 px-4 py-1 rounded ${
                      applyLink
                        ? "bg-[#593c8f] text-white hover:bg-[#4b2f7a]"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                  >
                    Apply →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
