import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { ToastContainer } from "react-toastify";
import AuthProtector from "./components/AuthProtector";
import MainLayout from "./pages/MainLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SplitBill from "./pages/SplitBill";
import PastEvents from "./pages/PastEvents";
import DashHistory from "./components/DashHistory";

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

        <Route path="/u/" element={<AuthProtector>
          <MainLayout />
        </AuthProtector>} >
        <Route path="dashboard" element={<DashHistory/>}/>
        <Route path="aboutUs" element={<AboutUs/>} />
        <Route path="contactUs" element={<ContactUs/>} />
        <Route path="splitBill" element={<SplitBill/>} />
        <Route path="pastEvents" element={<PastEvents/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
