import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StatusPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [statusData, setStatusData] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setError("");
        setStatusData(null);

        if (!email.trim()) {
            setError("Please enter your registered email address.");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/api/kyc/status/${encodeURIComponent(email.trim())}`);
            if (res.data.success) {
                setStatusData(res.data.data);
            }
        } catch (err) {
            console.error("Status fetch error:", err);
            setError(err.response?.data?.message || "Could not find any KYC application for this email.");
        } finally {
            setLoading(false);
        }
    };

    const getBadgeClass = (status) => {
        switch (status?.toLowerCase()) {
            case "approved":
                return "badge-approved";
            case "rejected":
                return "badge-rejected";
            default:
                return "badge-pending";
        }
    };

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case "approved":
                return "✓";
            case "rejected":
                return "✕";
            default:
                return "⏳";
        }
    };

    return (
        <div className="Pmain">
            {/* Top Navigation */}
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
                        <img
                            src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-security-shield-logo-png-image_4135253.jpg"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        FinKYC
                    </a>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => navigate("/")}>
                        ← Back to Home
                    </button>
                </div>
            </nav>

            <div className="innerP status-lookup-inner">
                <div className="status-lookup-card">
                    <div className="lookup-header">
                        <h2>🔍 Check KYC Application Status</h2>
                        <p className="lookup-subtitle">
                            Enter the email address you used during submission to track your verification progress.
                        </p>
                    </div>

                    {/* Search Form */}
                    <form className="lookup-form" onSubmit={handleSearch}>
                        <div className="lookup-input-group">
                            <input
                                type="email"
                                className="form-control lookup-input"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary lookup-btn"
                                disabled={loading}
                            >
                                {loading ? "Searching..." : "Track Status"}
                            </button>
                        </div>
                    </form>

                    {/* Error Message */}
                    {error && (
                        <div className="lookup-error-box">
                            <span className="error-icon">⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Status Result Card */}
                    {statusData && (
                        <div className="status-result-card">
                            <div className="result-header">
                                <div className={`status-badge ${getBadgeClass(statusData.kycStatus)}`}>
                                    <span className="badge-icon">{getStatusIcon(statusData.kycStatus)}</span>
                                    <span className="badge-text">{statusData.kycStatus?.toUpperCase()}</span>
                                </div>
                                <span className="submission-date">
                                    Submitted: {statusData.submittedAt ? new Date(statusData.submittedAt).toLocaleDateString() : "Recently"}
                                </span>
                            </div>

                            <div className="result-details-grid">
                                <div className="result-item">
                                    <span className="result-label">Applicant Name</span>
                                    <span className="result-value">{statusData.fullName || "N/A"}</span>
                                </div>
                                <div className="result-item">
                                    <span className="result-label">Registered Email</span>
                                    <span className="result-value">{statusData.email || "N/A"}</span>
                                </div>
                                <div className="result-item">
                                    <span className="result-label">Registered Phone</span>
                                    <span className="result-value">{statusData.phone ? `••••••${statusData.phone.slice(-4)}` : "N/A"}</span>
                                </div>
                                <div className="result-item">
                                    <span className="result-label">Estimated Resolution</span>
                                    <span className="result-value">
                                        {statusData.kycStatus === "approved" ? "Completed" : "1–2 Business Days"}
                                    </span>
                                </div>
                            </div>

                            <div className="result-note">
                                {statusData.kycStatus === "approved" ? (
                                    <p className="note-approved">
                                        🎉 Your identity and banking documents have been verified. Your account is fully active!
                                    </p>
                                ) : statusData.kycStatus === "rejected" ? (
                                    <p className="note-rejected">
                                        ❌ Your application could not be verified. Please review your details and re-apply.
                                    </p>
                                ) : (
                                    <p className="note-pending">
                                        🕒 Our compliance team is currently validating your documents with national databases. No further action is required from you.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="lookup-footer">
                        <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
                            ← Return to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}