import check from "../assets/check.png";
import biometric from "../assets/biometric.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Kycverification({ formData, updateFormData }) {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        panNumber: "",
        dob: ""
    });

    const handlePanChange = (e) => {
        const value = e.target.value.toUpperCase();
        if (value.length <= 10) {
            updateFormData("panNumber", value);

            if (value.length === 0) {
                setErrors(prev => ({ ...prev, panNumber: "PAN number is required" }));
            } else if (value.length < 10) {
                setErrors(prev => ({ ...prev, panNumber: `Enter 10 characters (${10 - value.length} more needed)` }));
            } else if (!/^[A-Z0-9]{10}$/.test(value)) {
                setErrors(prev => ({ ...prev, panNumber: "PAN must be letters and numbers only" }));
            } else {
                setErrors(prev => ({ ...prev, panNumber: "" }));
            }
        }
    };

    const handleDobChange = (e) => {
        const value = e.target.value;
        updateFormData("dob", value);
        if (!value) {
            setErrors(prev => ({ ...prev, dob: "Date of birth is required" }));
        } else {
            setErrors(prev => ({ ...prev, dob: "" }));
        }
    };

    const close = () => {
        navigate("/address");
    };

    const next = () => {
        const newErrors = {};

        if (!formData.panNumber || formData.panNumber.length < 10 || !/^[A-Z0-9]{10}$/.test(formData.panNumber)) {
            newErrors.panNumber = "Enter a valid 10-character PAN number";
        }
        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate("/nominee");
    };

    return (
        <div className="kycm">
            <div className="kych">
                <div className="header">
                    <div className="heading">
                        <h2>KYC Verification</h2>
                    </div>
                    <div className="close">
                        <button className="closeb" onClick={close}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

                <div className="verification">
                    <div className="form-field">
                        <label className="form-label">PAN Number</label>
                        <input
                            type="text"
                            className={`form-control ${errors.panNumber ? "input-error" : ""}`}
                            placeholder="E.g. ABCDE1234F"
                            value={formData.panNumber || ""}
                            onChange={handlePanChange}
                            maxLength={10}
                        />
                        {errors.panNumber && <span className="error-text">{errors.panNumber}</span>}
                    </div>

                    <div className="form-field">
                        <label className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            className={`form-control ${errors.dob ? "input-error" : ""}`}
                            value={formData.dob || ""}
                            onChange={handleDobChange}
                        />
                        {errors.dob && <span className="error-text">{errors.dob}</span>}
                    </div>

                    <p className="terms-text">
                        By proceeding, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </p>
                    <button type="button" className="btn btn-primary verify-btn" onClick={next}>
                        Proceed to Verify KYC
                    </button>
                </div>

                <div className="check-img">
                    <img src={check} alt="Verified Check" />
                </div>
                <div className="biometric-img">
                    <img src={biometric} alt="Biometric" />
                </div>
            </div>
        </div>
    );
}