import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";

export const Login = () =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (login(username, password)) {
    //   navigate("/");
    // } else {
    //   setError(
    //     "Sorry, your password was incorrect. Please double-check your password."
    //   );
    // }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex justify-center items-center px-4 py-8">
      <div className="flex items-center justify-center w-full max-w-[860px] mx-auto">
        {/* App Screenshot (Hidden on Mobile) */}
        <div className="hidden lg:block relative mr-8">
          <img
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt="Instagram App"
            className="w-[300px] h-auto"
          />
        </div>

        {/* Login Form */}
        <div className="flex flex-col max-w-[400px] w-full">
          {/* Login Box */}
          <div className="w-full bg-white border border-gray-300 p-8 sm:p-10 mb-3">
            {/* Instagram Logo */}
            <div className="flex justify-center mb-8">
              <Logo size={40} />
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-sm bg-[#fafafa] text-sm focus:outline-none focus:border-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-sm bg-[#fafafa] text-sm focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className={`w-full py-[6px] rounded bg-[#0095f6] text-white font-semibold text-sm ${
                  username && password ? "opacity-100" : "opacity-70"
                }`}
                disabled={!username || !password}
              >
                Log in
              </button>
              {error && (
                <p className="text-red-500 text-sm text-center mt-4">{error}</p>
              )}
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-sm font-semibold text-gray-500">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-[#385185] font-semibold text-sm">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Sign Up Box */}
          <div className="w-full bg-white border border-gray-300 p-6 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#0095f6] font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
