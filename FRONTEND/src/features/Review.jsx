import { useNavigate } from "react-router-dom";
export default function Review() {
    const navigate = useNavigate();
    const back = () => {
        navigate("/nominee")
    }
    return (
        <div className="Pmain">
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-security-shield-logo-png-image_4135253.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
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
                                <div><span className="review-label">Name</span><p className="review-val">Charan Varigonda</p></div>
                                <div><span className="review-label">Email</span><p className="review-val">charan@example.com</p></div>
                                <div><span className="review-label">Phone</span><p className="review-val">+91 98765 43210</p></div>
                                <div><span className="review-label">Date of Birth</span><p className="review-val">15-08-2003</p></div>
                            </div>
                        </div>
                        <button className="review-edit-btn">✏️ Edit</button>
                    </div>

                    {/* Card 2: Address Details */}
                    <div className="review-card">
                        <div className="review-card-icon">🏠</div>
                        <div className="review-card-content">
                            <h3>Address Details</h3>
                            <div className="review-grid">
                                <div><span className="review-label">Address</span><p className="review-val">123 Main Street</p></div>
                                <div><span className="review-label">State</span><p className="review-val">Telangana</p></div>
                                <div><span className="review-label">City</span><p className="review-val">Hyderabad</p></div>
                                <div><span className="review-label">Pincode</span><p className="review-val">500001</p></div>
                            </div>
                        </div>
                        <button className="review-edit-btn">✏️ Edit</button>
                    </div>

                    {/* Card 3: Identity Details */}
                    <div className="review-card">
                        <div className="review-card-icon">🪪</div>
                        <div className="review-card-content">
                            <h3>Identity Details</h3>
                            <div className="review-grid">
                                <div><span className="review-label">PAN Number</span><p className="review-val">ABCDE1234F</p></div>
                                <div><span className="review-label">Aadhaar (Last 4 Digits)</span><p className="review-val">1234</p></div>
                            </div>
                        </div>
                        <button className="review-edit-btn">✏️ Edit</button>
                    </div>

                    {/* Card 4: Bank & Nominee Details */}
                    <div className="review-card">
                        <div className="review-card-icon">🏛️</div>
                        <div className="review-card-content">
                            <h3>Bank & Nominee Details</h3>
                            <div className="review-grid">
                                <div><span className="review-label">Bank Name</span><p className="review-val">HDFC Bank</p></div>
                                <div><span className="review-label">IFSC Code</span><p className="review-val">HDFC0001234</p></div>
                                <div><span className="review-label">Account Number</span><p className="review-val">XXXXXXXX5678</p></div>
                                <div><span className="review-label">Nominee</span><p className="review-val">Ravi Kumar</p></div>
                            </div>
                        </div>
                        <button className="review-edit-btn">✏️ Edit</button>
                    </div>
                </div>

                <div className="bottombox">
                    <button className="btn btn-outline-primary" onClick={back}>← Back</button>
                    <button className="btn btn-primary">Submit KYC</button>
                </div>
            </div>
        </div>
    );
}
