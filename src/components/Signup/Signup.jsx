import "./SignUp.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/users/signup', { username, password, firstname, lastname });
            navigate('/');
        } catch (error) {
            console.error('Signup failed:', error.response.data.error);
        }
    };

    return(
            <div className="signup">
                <div className="signup__signup">
                <h2 className="signup__title">SignUp</h2>

                <div className="signup__input-box">
                <input
                    className="signup__input"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <FaUser className="signup__icon" />
                </div>

                <div className="signup__input-box">
                <input
                    className="signup__input"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                />
                <FaUser className="signup__icon" />
                
                </div>

                <div className="signup__input-box">
                <input
                    className="signup__input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <MdEmail className="signup__icon" />
                </div>
            
                <div className="signup__input-box">
                <input
                    className="signup__input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="signup__icon" />
                </div>

                <button onClick={handleSignup} className="signup__button" type="submit">
                 Sign Up
                </button>
            </div>
        </div>
            
    );
}

export default SignUp;


