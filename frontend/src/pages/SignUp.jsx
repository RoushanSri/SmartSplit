import React from "react";
import { useState } from "react";
import { FaEnvelope, FaLock, FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Signup attempt:", formData);
  };

  const passwordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";
  const passwordStrength = formData.password.length >= 8;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors mb-8 group"
        >
          <FaArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-400">
              Join SmartSplit and start splitting bills effortlessly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <FaEnvelope className="h-5 w-5" />
                  ) : (
                    <FaEnvelope className="h-5 w-5" />
                  )}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2 flex items-center space-x-2">
                  <div
                    className={`h-1 flex-1 rounded ${
                      passwordStrength ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span
                    className={`text-xs ${
                      passwordStrength ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {passwordStrength ? "Strong" : "Weak"}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                    formData.confirmPassword && !passwordsMatch
                      ? "border-red-500"
                      : "border-gray-700"
                  }`}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <FaEnvelope className="h-5 w-5" />
                  ) : (
                    <FaEnvelope className="h-5 w-5" />
                  )}
                </button>
                {passwordsMatch && (
                  <FaCheck className="absolute right-10 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                )}
              </div>
              {formData.confirmPassword && !passwordsMatch && (
                <p className="mt-1 text-sm text-red-400">
                  Passwords don't match
                </p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-4 h-4 mt-1 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={
                !formData.agreeToTerms || !passwordsMatch || !passwordStrength
              }
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-medium transition-colors border border-gray-700">
              Continue with Google
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-medium transition-colors border border-gray-700">
              Continue with Apple
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
