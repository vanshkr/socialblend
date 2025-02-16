import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";

export const Signup=()=> {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (signup({ email, fullName, username, password })) {
    //   navigate("/");
    // } else {
    //   setError("This username or email is already taken.");
    // }
  };

  const isFormValid = email && fullName && username && password.length >= 6;

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-center items-center px-4 py-8">
      <div className="flex flex-col max-w-[350px] w-full">
        {/* Signup Box */}
        <div className="w-full bg-white border border-gray-300 p-6 sm:p-10 mb-3">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-4">
            <Logo size={40} />
          </div>

          {/* Signup Heading */}
          <h2 className="text-center font-semibold text-gray-500 text-lg mb-4">
            Sign up to see photos and videos from your friends.
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-[9px] mb-2 border border-gray-300 rounded-sm bg-[#fafafa] text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-2 py-[9px] mb-2 border border-gray-300 rounded-sm bg-[#fafafa] text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2 py-[9px] mb-2 border border-gray-300 rounded-sm bg-[#fafafa] text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-[9px] mb-4 border border-gray-300 rounded-sm bg-[#fafafa] text-sm focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className={`w-full py-1 rounded bg-[#0095f6] text-white font-semibold ${
                isFormValid ? "opacity-100" : "opacity-70"
              }`}
              disabled={!isFormValid}
            >
              Sign up
            </button>
            {error && (
              <p className="text-red-500 text-sm text-center mt-4">{error}</p>
            )}
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Terms and Policies */}
          <p className="text-center text-xs text-gray-500 mb-4">
            By signing up, you agree to our Terms, Privacy Policy and Cookies
            Policy.
          </p>
        </div>

        {/* Login Link */}
        <div className="w-full bg-white border border-gray-300 p-6 text-center">
          <p className="text-sm">
            Have an account?{" "}
            <Link to="/login" className="text-[#0095f6] font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
