import "./App.css";
import { useState } from "react";
// --- Step 1 to 5 Pages (features/) ---
import Welcome from "./features/Welcome.jsx";
import PersonalDetails from "./features/Personald.jsx";
import Address from "./features/Address.jsx";
import Kycverification from "./features/Kycv.jsx";
import Nominee from "./features/Nominee.jsx";
import Review from "./features/Review.jsx";

import Success from "./functionalities/Success.jsx";
import Failed from "./functionalities/Failed.jsx";
import StatusPage from "./features/StatusPage.jsx";
import { Route, Routes } from "react-router-dom";
export default function App() {
  // In App.jsx
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    dob: '',
    email: '',
    phone: '',

    // Address Details
    street: '',
    city: '',
    state: '',
    pincode: '',

    // Identity / KYC
    panNumber: '',


    // Bank & Nominee
    bankName: '',
    ifsc: '',
    accountNumber: '',
    nomineeName: ''
  });
  const updateFormData = (feild, value) => {
    setFormData(prev => ({
      ...prev,
      [feild]: value
    }))
  }
  const resetFormData = () => {
    setFormData({
      // Personal Details
      fullName: '',
      dob: '',
      email: '',
      phone: '',

      // Address Details
      street: '',
      city: '',
      state: '',
      pincode: '',

      // Identity / KYC
      panNumber: '',


      // Bank & Nominee
      bankName: '',
      ifsc: '',
      accountNumber: '',
      nomineeName: ''
    })
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Personaldetails" element={<PersonalDetails formData={formData} updateFormData={updateFormData} />} />
        <Route path="/address" element={<Address formData={formData} updateFormData={updateFormData} />} />
        <Route path="/kyc" element={<Kycverification formData={formData} updateFormData={updateFormData} />} />
        <Route path="/nominee" element={<Nominee formData={formData} updateFormData={updateFormData} />} />
        <Route path="/review" element={<Review formData={formData} resetFormData={resetFormData} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/status" element={<StatusPage />} />
      </Routes>


    </>
  );
}