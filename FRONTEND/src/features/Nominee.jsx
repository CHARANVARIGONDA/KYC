import { useNavigate } from "react-router-dom";
export default function Nominee() {
    const navigate = useNavigate();
    const back = () => {
        navigate("/kyc");;

    }
    const next = () => {
        navigate("/review");
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

            <div className="innerP">
                {/* Stepper with Step 1, 2, 3 completed and Step 4 active */}
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
                                <label className="form-label">Bank Name <span className="text-danger">*</span></label>
                                <div className="input-with-icon">
                                    <span className="input-icon">🏛️</span>
                                    <input type="text" className="form-control with-icon" placeholder="Enter bank name (e.g. HDFC Bank)" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Account Number <span className="text-danger">*</span></label>
                                <div className="input-with-icon">
                                    <span className="input-icon">💳</span>
                                    <input type="text" className="form-control with-icon" placeholder="Enter account number" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">IFSC Code <span className="text-danger">*</span></label>
                                <div className="input-with-icon">
                                    <span className="input-icon">📄</span>
                                    <input type="text" className="form-control with-icon" placeholder="e.g. HDFC0001234" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Nominee Full Name <span className="text-danger">*</span></label>
                                <div className="input-with-icon">
                                    <span className="input-icon">👤</span>
                                    <input type="text" className="form-control with-icon" placeholder="Enter nominee full name" />
                                </div>
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
