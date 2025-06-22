import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
