# Career-hub 🚀

A modern job portal web application built with React that helps users explore remote job opportunities through a clean and responsive interface.

---

## 🔥 Features

### 👩‍💼 Job Seekers
- Browse job listings fetched from an external jobs API.
- Search jobs by job title and location (if implemented).
- View featured jobs (if implemented).
- Visit original job application links.
- Responsive and clean user interface.

### 🏢 Employers (UI Only)
- Employers page for future job posting features.
- Placeholder UI ready for backend integration.

### 🔐 Authentication (Frontend Only)
- Login page.
- Register page.
- Show/hide password functionality.

### 🛠 Admin Panel (Dummy)
- Admin dashboard UI.
- Can be extended with backend support.

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js
- **Routing:** React Router
- **State Management:** Context API
- **Styling:** Tailwind CSS
- **Icons:** Heroicons, React Icons
- **API:** Jobicy Remote Jobs API
- **Build Tool:** Vite

---

## 🌍 Job Data Source

Job listings are fetched from the **Jobicy Remote Jobs API**.

- API endpoint: https://jobicy.com/api/v2/remote-jobs?count=50
- No RapidAPI key is required for this endpoint.
- Job availability and locations depend on the data returned by the API.
- Application links direct users to the original job listing.

**Note:** This project currently uses an external API for job listings. Authentication, employer job posting, and admin functionality are frontend demonstrations and do not provide full backend functionality.

---

## 🚧 Future Improvements

- Backend integration using Node.js and MongoDB.
- Secure authentication using JWT.
- Employer job posting system.
- Admin analytics dashboard.
- Saved jobs and user profiles.
- Improved job search and filtering.
- Loading, error, and empty-state handling.
