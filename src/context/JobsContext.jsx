// import React, { createContext, useEffect, useState } from "react";

// export const JobsContext = createContext(null);

// export const JobsProvider = ({ children }) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       "https://jobs-api14.p.rapidapi.com/v2/linkedin/search?query=java&experienceLevels=intern%3Bentry%3Bassociate%3BmidSenior%3Bdirector&workplaceTypes=remote%3Bhybrid%3BonSite&location=India&datePosted=month&employmentTypes=contractor%3Bfulltime%3Bparttime%3Bintern%3Btemporary",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
//           "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const jobsWithKeys = (data?.data || []).map((job, index) => ({
//           ...job,
//           _uniqueKey:
//             job.job_id ||
//             job.job_apply_url ||
//             job.job_apply_link ||
//             `${job.job_title}-${index}`,
//         }));

//         setJobs(jobsWithKeys);
//       })
//       .catch((err) => console.error("Fetch error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <JobsContext.Provider value={{ jobs, loading }}>
//       {children}
//     </JobsContext.Provider>
//   );
// };


import React, { createContext, useEffect, useState } from "react";

export const JobsContext = createContext(null);

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jobicy.com/api/v2/remote-jobs?count=50"
        );

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        const jobsWithKeys = (data.jobs || []).map((job) => ({
          ...job,

          // Keep compatibility with existing job cards
          job_id: String(job.id),
          job_title: job.jobTitle || "Untitled Job",
          employer_name: job.companyName || "Company not specified",
          job_city: job.jobGeo || "Location not specified",
          job_country: "",
          job_employment_type: Array.isArray(job.jobType)
            ? job.jobType.join(", ")
            : job.jobType || "Not specified",
          job_description:
            job.jobDescription || job.jobExcerpt || "",
          job_apply_link: job.url || "",
          job_apply_url: job.url || "",
          job_logo: job.companyLogo || "",
          job_min_salary: job.annualSalaryMin ?? null,
          job_max_salary: job.annualSalaryMax ?? null,

          _uniqueKey: String(job.id),
        }));

        setJobs(jobsWithKeys);
      } catch (err) {
        console.error("Jobs API error:", err);
        setError("Unable to load jobs. Please try again later.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider value={{ jobs, loading, error }}>
      {children}
    </JobsContext.Provider>
  );
};