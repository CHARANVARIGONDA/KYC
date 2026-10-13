import check from "../assets/check.png";
import biometric from "../assets/biometric.png";
import { useNavigate } from "react-router-dom";
export default function Kycverification() {
    const navigate = useNavigate();
    const close = () => {
        navigate("/address")
    }
    const next = () => {
        navigate("/nominee")
    }
    return (
        <div className="kycm">
            <div className="kych">
                <div className="header">
                    <div className="heading">
                        <h2>KYC Verification</h2>
                    </div>
                    <div className="close">
                        <button className="closeb" onClick={close}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <div className="verification">

                    <div className="form-field">
                        <label htmlFor="exampleInputEmail1" className="form-label">Pan number</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="E.g 45SF5464151" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Date of birth</label>
                        <input type="date" className="form-control" />
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