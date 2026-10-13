import Background from "../assets/Background.png";
import doc from "../assets/doc.png";
import lock1 from "../assets/lock1.png";
import lock2 from "../assets/lock2.png";
import phone from "../assets/phone.png";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
    const navigate = useNavigate();
    const handlebutton = () => {
        navigate("/Personaldetails")
    }
    let cards = [
        {
            title: "Henttody",
            description: "User Description",
            image: phone
        },
        {
            title: "Body Steps",
            description: "Secure authentication",
            image: lock1
        },
        {
            title: "Paper Work",
            description: "Secure Document Storage",
            image: doc
        },
        {
            title: "Security",
            description: "Secure Your Identity with 2FA",
            image: lock2
        }
    ]
    return (
        <div className="Wmain">
            <div className="header-section">
                <h1>CHASE <img src="https://images.seeklogo.com/logo-png/43/1/recycling-logo-png_seeklogo-438048.png" alt="logo" /></h1>
                <h2>Open Your Account in Minutes</h2>
            </div>
            <div className="innerbox">

                <div className="cards-container">
                    {cards.map((card) => {
                        return (
                            <div className="card" key={card.title}>
                                <img src={card.image} alt={card.title} />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="btn-container">
                    <button type="button" className="btn btn-primary start-btn" onClick={handlebutton}>Start Now – Safe & Simple</button>
                </div>
            </div>
        </div>
    );
}