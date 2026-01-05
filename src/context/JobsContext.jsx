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
//         // Make sure the response has a `data` array
//         setJobs(data?.data || []);
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

  useEffect(() => {
    fetch(
      "https://jobs-api14.p.rapidapi.com/v2/linkedin/search?query=java&experienceLevels=intern%3Bentry%3Bassociate%3BmidSenior%3Bdirector&workplaceTypes=remote%3Bhybrid%3BonSite&location=India&datePosted=month&employmentTypes=contractor%3Bfulltime%3Bparttime%3Bintern%3Btemporary",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const jobsWithKeys = (data?.data || []).map((job, index) => ({
          ...job,
          _uniqueKey:
            job.job_id ||
            job.job_apply_url ||
            job.job_apply_link ||
            `${job.job_title}-${index}`,
        }));

        setJobs(jobsWithKeys);
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <JobsContext.Provider value={{ jobs, loading }}>
      {children}
    </JobsContext.Provider>
  );
};