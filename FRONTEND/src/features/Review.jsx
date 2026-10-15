import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Review({ formData = {}, resetFormData }) {
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const back = () => {
        navigate("/nominee");
    };

    const address = () => {
        navigate("/address");
    };

    const personal = () => {
        navigate("/Personaldetails");
    };

    const nominee = () => {
        navigate("/nominee");
    };

    const identity = () => {
        navigate("/kyc");
    };

    // Mask account number to show only last 4 digits for privacy
    const maskAccount = (acc) => {
        if (!acc) return "Not provided";
        return acc.length > 4 ? `•••• •••• ${acc.slice(-4)}` : acc;
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/api/kyc", formData);

            if (res.status === 200 || res.status === 201) {
                if (resetFormData) {
                    resetFormData();
                }
                navigate("/success", { state: { "id": res.data.user._id, "userName": res.data.user.fullName } });
            }

        } catch (err) {
            console.error("KYC submission failed:", err);
            setLoading(false);
            navigate("/failed", { state: { message: err.response?.data?.message || "Failed to Submit KYC please try again" } });
        }
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

            <div className="innerP review-inner">
                {/* Stepper with Steps 1-4 completed and Step 5 active */}
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
                        <button className="step-btn completed">✓</button>
                        <span className="step-text">Nominee</span>
                    </div>
                    <div className="line line-active"></div>

                    <div className="step-wrapper">
                        <button className="step-btn active">5</button>
                        <span className="step-text active-text">Review</span>
                    </div>
                </div>

                <div className="header">
                    <div>
                        <h1>Review Your Details</h1>
                        <p>Please review your information before submitting.</p>
                    </div>
                </div>

                <div className="review-cards-list">
                    {/* Card 1: Personal Details */}
                    <div className="review-card">
                        <div className="review-card-icon">👤</div>
                        <div className="review-card-content">
                            <h3>Personal Details</h3>
                            <div className="review-grid">
                                <div>
                                    <span className="review-label">Name</span>
                                    <p className="review-val">{formData.fullName || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">Email</span>
                                    <p className="review-val">{formData.email || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">Phone</span>
                                    <p className="review-val">{formData.phone ? `+91 ${formData.phone}` : "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">Date of Birth</span>
                                    <p className="review-val">{formData.dob || "Not provided"}</p>
                                </div>
                            </div>
                        </div>
                        <button className="review-edit-btn" onClick={personal}>✏️ Edit</button>
                    </div>

                    {/* Card 2: Address Details */}
                    <div className="review-card">
                        <div className="review-card-icon">🏠</div>
                        <div className="review-card-content">
                            <h3>Address Details</h3>
                            <div className="review-grid">
                                <div>
                                    <span className="review-label">Address</span>
                                    <p className="review-val">{formData.street || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">State</span>
                                    <p className="review-val">{formData.state || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">City</span>
                                    <p className="review-val">{formData.city || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">Pincode</span>
                                    <p className="review-val">{formData.pincode || "Not provided"}</p>
                                </div>
                            </div>
                        </div>
                        <button className="review-edit-btn" onClick={address}>✏️ Edit</button>
                    </div>

                    {/* Card 3: Identity Details */}
                    <div className="review-card">
                        <div className="review-card-icon">🪪</div>
                        <div className="review-card-content">
                            <h3>Identity Details</h3>
                            <div className="review-grid">
                                <div>
                                    <span className="review-label">PAN Number</span>
                                    <p className="review-val">{formData.panNumber || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">Date of Birth (Identity)</span>
                                    <p className="review-val">{formData.dob || "Not provided"}</p>
                                </div>
                            </div>
                        </div>
                        <button className="review-edit-btn" onClick={identity}>✏️ Edit</button>
                    </div>

                    {/* Card 4: Bank & Nominee Details */}
                    <div className="review-card">
                        <div className="review-card-icon">🏛️</div>
                        <div className="review-card-content">
                            <h3>Bank & Nominee Details</h3>
                            <div className="review-grid">
                                <div>
                                    <span className="review-label">Bank Name</span>
                                    <p className="review-val">{formData.bankName || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">IFSC Code</span>
                                    <p className="review-val">{formData.ifsc || "Not provided"}</p>
                                </div>
                                <div>
                                    <span className="review-label">Account Number</span>
                                    <p className="review-val">{maskAccount(formData.accountNumber)}</p>
                                </div>
                                <div>
                                    <span className="review-label">Nominee</span>
                                    <p className="review-val">{formData.nomineeName || "Not provided"}</p>
                                </div>
                            </div>
                        </div>
                        <button className="review-edit-btn" onClick={nominee}>✏️ Edit</button>
                    </div>
                </div>

                <div className="bottombox">
                    <button className="btn btn-outline-primary" onClick={back}>← Back</button>
                    <button className="btn btn-primary" onClick={handleSubmit} disabled={Loading}>{Loading ? "Submitting" : "Submit KYC"}</button>
                </div>
            </div>
        </div>
    );
}
