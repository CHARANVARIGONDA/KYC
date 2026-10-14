import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nominee({ formData, updateFormData }) {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        bankName: "",
        accountNumber: "",
        ifsc: "",
        nomineeName: ""
    });

    const handleBankNameChange = (e) => {
        const value = e.target.value;
        updateFormData("bankName", value);
        if (value.trim().length === 0) {
            setErrors(prev => ({ ...prev, bankName: "Bank name is required" }));
        } else if (value.trim().length < 3) {
            setErrors(prev => ({ ...prev, bankName: "Bank name must be at least 3 characters" }));
        } else {
            setErrors(prev => ({ ...prev, bankName: "" }));
        }
    };

    const handleAccountNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 18) {
            updateFormData("accountNumber", value);
            if (value.length === 0) {
                setErrors(prev => ({ ...prev, accountNumber: "Account number is required" }));
            } else if (value.length < 9) {
                setErrors(prev => ({ ...prev, accountNumber: "Account number must be at least 9 digits" }));
            } else {
                setErrors(prev => ({ ...prev, accountNumber: "" }));
            }
        }
    };

    const handleIfscChange = (e) => {
        const value = e.target.value.toUpperCase();
        if (value.length <= 11) {
            updateFormData("ifsc", value);
            if (value.length === 0) {
                setErrors(prev => ({ ...prev, ifsc: "IFSC code is required" }));
            } else if (value.length < 11) {
                setErrors(prev => ({ ...prev, ifsc: `Enter 11-character IFSC (${11 - value.length} more characters)` }));
            } else if (!/^[A-Z0-9]{11}$/.test(value)) {
                setErrors(prev => ({ ...prev, ifsc: "IFSC must be letters and numbers only" }));
            } else {
                setErrors(prev => ({ ...prev, ifsc: "" }));
            }
        }
    };

    const handleNomineeNameChange = (e) => {
        const value = e.target.value;
        updateFormData("nomineeName", value);
        if (value.trim().length === 0) {
            setErrors(prev => ({ ...prev, nomineeName: "Nominee name is required" }));
        } else if (value.trim().length < 3) {
            setErrors(prev => ({ ...prev, nomineeName: "Nominee name must be at least 3 characters" }));
        } else {
            setErrors(prev => ({ ...prev, nomineeName: "" }));
        }
    };

    const back = () => {
        navigate("/kyc");
    };

    const next = () => {
        const newErrors = {};

        if (!formData.bankName || formData.bankName.trim().length < 3) {
            newErrors.bankName = "Bank name must be at least 3 characters";
        }
        if (!formData.accountNumber || formData.accountNumber.length < 9) {
            newErrors.accountNumber = "Account number must be at least 9 digits";
        }
        if (!formData.ifsc || formData.ifsc.length < 11 || !/^[A-Z0-9]{11}$/.test(formData.ifsc)) {
            newErrors.ifsc = "Enter a valid 11-character IFSC code";
        }
        if (!formData.nomineeName || formData.nomineeName.trim().length < 3) {
            newErrors.nomineeName = "Nominee name must be at least 3 characters";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        navigate("/review");
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
                    <div className="step-wrapper">
                        <button className="step-btn completed">✓</button>
                        <span className="step-text">Personal</span>
                    </div>
                    <div className="line line-active"></div>

                    <div className="step-wrapper">
                        <button className="step-btn completed">✓</button>
                        <span className="step-text">Address</span>
                    </div>
                    <div className="line line-active"></div>

                    <div className="step-wrapper">
                        <button className="step-btn completed">✓</button>
                        <span className="step-text">Identity</span>
                    </div>
                    <div className="line line-active"></div>

                    <div className="step-wrapper">
                        <button className="step-btn active">4</button>
                        <span className="step-text active-text">Bank & Nominee</span>
                    </div>
                    <div className="line"></div>

                    <div className="step-wrapper">
                        <button className="step-btn">5</button>
                        <span className="step-text">Review</span>
                    </div>
                </div>

                <div className="header">
                    <div>
                        <h1>Bank & Nominee Details</h1>
                        <p>Add your banking and nominee information.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row gx-5 gy-3">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">
                                    Bank Name <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                    <span className="input-icon">🏛️</span>
                                    <input
                                        type="text"
                                        className={`form-control with-icon ${errors.bankName ? "input-error" : ""}`}
                                        placeholder="Enter bank name (e.g. HDFC Bank)"
                                        value={formData.bankName || ""}
                                        onChange={handleBankNameChange}
                                    />
                                </div>
                                {errors.bankName && <span className="error-text">{errors.bankName}</span>}
                            </div>

                            <div className="form-field">
                                <label className="form-label">
                                    Account Number <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                    <span className="input-icon">💳</span>
                                    <input
                                        type="text"
                                        className={`form-control with-icon ${errors.accountNumber ? "input-error" : ""}`}
                                        placeholder="Enter account number"
                                        value={formData.accountNumber || ""}
                                        onChange={handleAccountNumberChange}
                                        maxLength={18}
                                    />
                                </div>
                                {errors.accountNumber && <span className="error-text">{errors.accountNumber}</span>}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">
                                    IFSC Code <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                    <span className="input-icon">📄</span>
                                    <input
                                        type="text"
                                        className={`form-control with-icon ${errors.ifsc ? "input-error" : ""}`}
                                        placeholder="e.g. HDFC0001234"
                                        value={formData.ifsc || ""}
                                        onChange={handleIfscChange}
                                        maxLength={11}
                                    />
                                </div>
                                {errors.ifsc && <span className="error-text">{errors.ifsc}</span>}
                            </div>

                            <div className="form-field">
                                <label className="form-label">
                                    Nominee Full Name <span className="text-danger">*</span>
                                </label>
                                <div className="input-with-icon">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        className={`form-control with-icon ${errors.nomineeName ? "input-error" : ""}`}
                                        placeholder="Enter nominee full name"
                                        value={formData.nomineeName || ""}
                                        onChange={handleNomineeNameChange}
                                    />
                                </div>
                                {errors.nomineeName && <span className="error-text">{errors.nomineeName}</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottombox">
                    <button className="btn btn-outline-primary" onClick={back}>← Back</button>
                    <button className="btn btn-primary" onClick={next}>Next Step →</button>
                </div>
            </div>
        </div>
    );
}
