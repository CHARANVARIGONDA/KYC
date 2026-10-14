import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Address({ formData, updateFormData }) {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        street: "",
        city: "",
        state: "",
        pincode: ""
    });

    const handleStreet = (e) => {
        const value = e.target.value;
        updateFormData("street", value);
        if (value.trim().length === 0) {
            setErrors(prev => ({ ...prev, street: "Address cannot be empty" }));
        } else if (value.trim().length < 5) {
            setErrors(prev => ({ ...prev, street: "Address must contain at least 5 characters" }));
        } else {
            setErrors(prev => ({ ...prev, street: "" }));
        }
    };

    const handleCity = (e) => {
        const value = e.target.value;
        updateFormData("city", value);
        if (value.trim().length === 0) {
            setErrors(prev => ({ ...prev, city: "City cannot be empty" }));
        } else if (value.trim().length < 3) {
            setErrors(prev => ({ ...prev, city: "City must contain at least 3 characters" }));
        } else {
            setErrors(prev => ({ ...prev, city: "" }));
        }
    };

    const handleState = (e) => {
        const value = e.target.value;
        updateFormData("state", value);
        if (value.trim().length === 0) {
            setErrors(prev => ({ ...prev, state: "State cannot be empty" }));
        } else if (value.trim().length < 3) {
            setErrors(prev => ({ ...prev, state: "State must contain at least 3 letters" }));
        } else {
            setErrors(prev => ({ ...prev, state: "" }));
        }
    };

    const handlePincode = (e) => {
        const value = e.target.value;
        // only allow numbers up to 6 digits
        if (/^\d*$/.test(value) && value.length <= 6) {
            updateFormData("pincode", value);
            if (value.length === 0) {
                setErrors(prev => ({ ...prev, pincode: "Pincode is required" }));
            } else if (value.length < 6) {
                setErrors(prev => ({ ...prev, pincode: `Pincode must be 6 digits (${6 - value.length} more needed)` }));
            } else {
                setErrors(prev => ({ ...prev, pincode: "" }));
            }
        }
    };

    const back = () => {
        navigate("/Personaldetails");
    };

    const next = () => {
        const newErrors = {};

        if (!formData.street || formData.street.trim().length < 5) {
            newErrors.street = "Address must contain at least 5 characters";
        }
        if (!formData.city || formData.city.trim().length < 3) {
            newErrors.city = "City must contain at least 3 characters";
        }
        if (!formData.state || formData.state.trim().length < 3) {
            newErrors.state = "State must contain at least 3 letters";
        }
        if (!formData.pincode || formData.pincode.length !== 6) {
            newErrors.pincode = "Enter a valid 6-digit pincode";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate("/kyc");
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
                    <button id="one"><i className="fa-solid fa-check"></i></button>
                    <div className="line"></div>
                    <button id="one">2</button>
                    <div className="line"></div>
                    <button>3</button>
                    <div className="line"></div>
                    <button>4</button>
                    <div className="line"></div>
                    <button>5</button>
                </div>

                <div className="header">
                    <div>
                        <h1>Address Details</h1>
                        <p>Where do you live</p>
                    </div>
                    <button type="button" className="btn btn-primary step">Step 2of4</button>
                </div>

                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6">
                            {/* Address Line */}
                            <div className="form-field">
                                <label className="form-label">Address Line:</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.street ? "input-error" : ""}`}
                                    placeholder="Enter your Street road number..."
                                    value={formData.street || ""}
                                    onChange={handleStreet}
                                />
                                {errors.street && <span className="error-text">{errors.street}</span>}
                            </div>

                            {/* Pincode */}
                            <div className="form-field">
                                <label className="form-label">Pincode</label>
                                <input
                                    type="tel"
                                    maxLength={6}
                                    className={`form-control ${errors.pincode ? "input-error" : ""}`}
                                    placeholder="Enter 6 digit pincode"
                                    value={formData.pincode || ""}
                                    onChange={handlePincode}
                                />
                                {errors.pincode && <span className="error-text">{errors.pincode}</span>}
                            </div>
                        </div>

                        <div className="col-md-6">
                            {/* State */}
                            <div className="form-field">
                                <label className="form-label">State:</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.state ? "input-error" : ""}`}
                                    placeholder="Enter your state"
                                    value={formData.state || ""}
                                    onChange={handleState}
                                />
                                {errors.state && <span className="error-text">{errors.state}</span>}
                            </div>

                            {/* City */}
                            <div className="form-field">
                                <label className="form-label">City:</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.city ? "input-error" : ""}`}
                                    placeholder="Enter your city"
                                    value={formData.city || ""}
                                    onChange={handleCity}
                                />
                                {errors.city && <span className="error-text">{errors.city}</span>}
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