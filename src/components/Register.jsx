import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", { name, email, password });
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5efff] px-4">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#593c8f] text-white rounded hover:bg-[#4b2f7a] transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#593c8f] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;