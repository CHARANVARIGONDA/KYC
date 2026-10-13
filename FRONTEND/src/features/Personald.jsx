import { useNavigate } from "react-router-dom";
export default function PersonalDetails() {
    const navigate = useNavigate();
    const back = () => {
        navigate("/")
    }
    const next = () => {
        navigate("/address")
    }
    return (
        <div className="Pmain">
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-security-shield-logo-png-image_4135253.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                        FinKYC
                    </a>
                    <a className="nav-link" href="#">Help?</a>
                </div>
            </nav>
            <div className="innerP">
                <div className="progress">
                    <button id="one">1</button>
                    <div className="line"></div>

                    <button>2</button>
                    <div className="line"></div>

                    <button>3</button>
                    <div className="line"></div>

                    <button>4</button>
                    <div className="line"></div>

                    <button>5</button>



                </div>
                <div className="header">
                    <div>
                        <h1>Personal Details</h1>
                        <p>Tell us little about yourself</p>
                    </div>
                    <button type="button" className="btn btn-primary step">Step 1of4</button>
                </div>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="Enter your full name" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Date of birth</label>
                                <input type="date" className="form-control" />
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