import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate("/");
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

            <div className="innerP status-inner">
                <div className="status-container">
                    {/* Green Celebration Circle with confetti dots */}
                    <div className="success-icon-wrapper">
                        <div className="confetti dot-1"></div>
                        <div className="confetti dot-2"></div>
                        <div className="confetti dot-3"></div>
                        <div className="confetti dot-4"></div>
                        <div className="confetti dot-5"></div>
                        <div className="confetti dot-6"></div>
                        <div className="success-circle">
                            <span className="check-mark">✓</span>
                        </div>
                    </div>

                    <h1 className="status-title">KYC Submitted Successfully!</h1>
                    <p className="status-desc">
                        Your KYC details have been submitted and are under verification.<br />
                        We will notify you once the process is complete.
                    </p>

                    {/* Estimated Time Card */}
                    <div className="time-card">
                        <div className="clock-icon">🕒</div>
                        <div className="time-text">
                            <span className="time-label">Estimated time</span>
                            <span className="time-value">1–2 business days</span>
                        </div>
                    </div>

                    <button className="btn btn-primary dashboard-btn" onClick={handleDashboard}>
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}
