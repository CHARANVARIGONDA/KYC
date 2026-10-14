import { useNavigate } from "react-router-dom";

export default function Failed() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/review");
    };

    const handleTryAgain = () => {
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

            <div className="innerP status-inner">
                <div className="status-container">
                    {/* Red Error Circle with warning sparks */}
                    <div className="failed-icon-wrapper">
                        <div className="spark spark-1"></div>
                        <div className="spark spark-2"></div>
                        <div className="spark spark-3"></div>
                        <div className="spark spark-4"></div>
                        <div className="failed-circle">
                            <span className="cross-mark">✕</span>
                        </div>
                    </div>

                    <h1 className="status-title">KYC Submission Failed</h1>
                    <p className="status-desc">
                        We couldn't submit your KYC details. Please try again.
                    </p>

                    {/* Possible Reasons Alert Box */}
                    <div className="reasons-alert">
                        <div className="alert-icon">⚠️</div>
                        <div className="alert-content">
                            <h4>Possible reasons:</h4>
                            <ul>
                                <li>Network error. Please check your internet connection.</li>
                                <li>Some details might be invalid.</li>
                                <li>Our servers are temporarily unavailable. Please try again later.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="failed-buttons">
                        <button className="btn btn-outline-primary" onClick={handleGoBack}>← Go Back</button>
                        <button className="btn btn-primary" onClick={handleTryAgain}>Try Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
