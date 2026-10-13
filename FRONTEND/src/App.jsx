import "./App.css";

// --- Step 1 to 5 Pages (features/) ---
import Welcome from "./features/Welcome.jsx";
import PersonalDetails from "./features/Personald.jsx";
import Address from "./features/Address.jsx";
import Kycverification from "./features/Kycv.jsx";
import Nominee from "./features/Nominee.jsx";
import Review from "./features/Review.jsx";

// --- Functionalities / Status Pages (functionalities/) ---
import Success from "./functionalities/Success.jsx";
import Failed from "./functionalities/Failed.jsx";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Personaldetails" element={<PersonalDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/kyc" element={<Kycverification />} />
        <Route path="/nominee" element={<Nominee />} />
        <Route path="/review" element={<Review />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />

      </Routes>


    </>
  );
}