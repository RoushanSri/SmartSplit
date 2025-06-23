import React from "react";
import LandingSection from "../components/LandingSection";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LandingSection />
      <HowItWorks />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
