 import React from "react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-[#f5efff] px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-600">Total Jobs</h3>
            <p className="text-2xl font-bold">128</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-600">Employers</h3>
            <p className="text-2xl font-bold">34</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-600">Applicants</h3>
            <p className="text-2xl font-bold">542</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-600">Active Jobs</h3>
            <p className="text-2xl font-bold">98</p>
          </div>
        </div>

        {/* Manage Jobs */}
        <div className="bg-white p-6 rounded shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Manage Jobs</h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Job Title</th>
                <th className="p-2 border">Company</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Software Engineer</td>
                <td className="p-2 border">Infosys</td>
                <td className="p-2 border">Bangalore</td>
                <td className="p-2 border text-center">
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="p-2 border">UI Designer</td>
                <td className="p-2 border">TCS</td>
                <td className="p-2 border">Pune</td>
                <td className="p-2 border text-center">
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Employers */}
        <div className="bg-white p-6 rounded shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Employers</h2>
          <ul className="space-y-2">
            <li>✔ Infosys – Approved</li>
            <li>✔ Wipro – Approved</li>
            <li>⏳ StartupXYZ – Pending</li>
          </ul>
        </div>

        {/* Users */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <ul className="space-y-2">
            <li>Anjali – anjali@gmail.com</li>
            <li>Rahul – rahul@gmail.com</li>
            <li>Pooja – pooja@gmail.com</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Admin;