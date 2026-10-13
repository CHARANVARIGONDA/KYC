import { useNavigate } from "react-router-dom";
export default function Address() {
    const navigate = useNavigate();
    const back = () => {
        navigate("/Personaldetails");
    }
    const next = () => {
        navigate("/kyc");
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
                    <button id="one"><i class="fa-solid fa-check"></i></button>
                    <div className="line"></div>

                    <button id="one">2</button>
                    <div className="line"></div>

                    <button>3</button>
                    <div className="line"></div>

                    <button>4</button>
                    <div className="line"></div>

                    <button>5</button>



                </div>
                <div className="header">
                    <div>
                        <h1>Address Details</h1>
                        <p>Where do you live</p>
                    </div>
                    <button type="button" className="btn btn-primary step">Step 2of4</button>
                </div>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">Address Line:</label>
                                <input type="text" className="form-control" placeholder="Enter you Street road number..." />
                            </div>
                            <div className="form-field">
                                <label className="form-label">Pincode</label>
                                <input type="tel" className="form-control" placeholder="Enter 6 digit pincode" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-field">
                                <label className="form-label">State:</label>
                                <input type="email" className="form-control" placeholder="enter your state" />
                            </div>
                            <div className="form-field">
                                <label className="form-label">City:</label>
                                <input type="email" className="form-control" placeholder="enter your city" />
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