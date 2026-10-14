import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PersonalDetails({ formData, updateFormData }) {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        fullName: "",
        dob: "",
        email: "",
        phone: ""
    });

    // 1. Full Name Handler
    const handleNameChange = (e) => {
        const value = e.target.value;
        updateFormData("fullName", value);

        if (value.trim().length === 0) {
            setErrors((prev) => ({ ...prev, fullName: "Full name is required" }));
        } else if (value.trim().length < 3) {
            setErrors((prev) => ({ ...prev, fullName: "Name must be at least 3 characters" }));
        } else {
            setErrors((prev) => ({ ...prev, fullName: "" }));
        }
    };

    // 2. Mobile Number Handler
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Only accept numbers and max 10 digits
        if (/^\d*$/.test(value) && value.length <= 10) {
            updateFormData("phone", value);

            if (value.length === 0) {
                setErrors((prev) => ({ ...prev, phone: "Mobile number is required" }));
            } else if (value.length < 10) {
                setErrors((prev) => ({
                    ...prev,
                    phone: `Enter 10-digit mobile number (${10 - value.length} more digits needed)`
                }));
            } else {
                setErrors((prev) => ({ ...prev, phone: "" }));
            }
        }
    };

    // 3. Email Address Handler
    const handleEmailChange = (e) => {
        const value = e.target.value;
        updateFormData("email", value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim().length === 0) {
            setErrors((prev) => ({ ...prev, email: "Email address is required" }));
        } else if (!emailRegex.test(value)) {
            setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }
    };

    // 4. Date of Birth Handler
    const handleDobChange = (e) => {
        const value = e.target.value;
        updateFormData("dob", value);

        if (!value) {
            setErrors((prev) => ({ ...prev, dob: "Date of birth is required" }));
        } else {
            setErrors((prev) => ({ ...prev, dob: "" }));
        }
    };

    const back = () => {
        navigate("/");
    };

    // 5. Next Step Validation Guard
    const next = () => {
        const newErrors = {};

        if (!formData.fullName || formData.fullName.trim().length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
        }
        if (!formData.phone || formData.phone.length !== 10) {
            newErrors.phone = "Enter a valid 10-digit mobile number";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
        }

        // If any error exists, show all errors and prevent navigating
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate("/address");
    };

    return (
        <div className="Pmain">
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-security-shield-logo-png-image_4135253.jpg"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        FinKYC
                    </a>
                    <a className="nav-link" href="#">Help?</a>
                </div>
            </nav>

            <div className="innerP">
                <div className="progress">
                    <button id="one">1</button>
                    <div className="line"></div>
                    <button>2</button>
                    <div className="line"></div>
                    <button>3</button>
                    <div className="line"></div>
                    <button>4</button>
                    <div className="line"></div>
                    <button>5</button>
                </div>

                <div className="header">
                    <div>
                        <h1>Personal Details</h1>
                        <p>Tell us little about yourself</p>
                    </div>
                    <button type="button" className="btn btn-primary step">Step 1of4</button>
                </div>

                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6">
                            {/* Full Name */}
                            <div className="form-field">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.fullName ? "input-error" : ""}`}
                                    placeholder="Enter your full name"
                                    value={formData.fullName || ""}
                                    onChange={handleNameChange}
                                />
                                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                            </div>

                            {/* Mobile Number */}
                            <div className="form-field">
                                <label className="form-label">Mobile Number</label>
                                <input
                                    type="tel"
                                    className={`form-control ${errors.phone ? "input-error" : ""}`}
                                    placeholder="10-digit mobile number"
                                    value={formData.phone || ""}
                                    onChange={handlePhoneChange}
                                />
                                {errors.phone && <span className="error-text">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="col-md-6">
                            {/* Email Address */}
                            <div className="form-field">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? "input-error" : ""}`}
                                    placeholder="name@example.com"
                                    value={formData.email || ""}
                                    onChange={handleEmailChange}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>

                            {/* Date of Birth */}
                            <div className="form-field">
                                <label className="form-label">Date of birth</label>
                                <input
                                    type="date"
                                    className={`form-control ${errors.dob ? "input-error" : ""}`}
                                    value={formData.dob || ""}
                                    onChange={handleDobChange}
                                />
                                {errors.dob && <span className="error-text">{errors.dob}</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottombox">
                    <button className="btn btn-primary" onClick={back}>← Back</button>
                    <button className="btn btn-primary" onClick={next}>Next Step →</button>
                </div>
            </div>
        </div>
    );
}