import "./SignUp.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
  
      const toLogin = (event) =>{
          event.preventDefault();
          navigate("/");
      }

    return(
            <div className="form">
                <div className="form__signup">
                <h2 className="form__title">SignUp</h2>

                <div className="form__input-box">
                <input
                    className="form__input"
                    type="text"
                    placeholder="First Name"
                />
                <FaUser className="form__icon" />
                </div>

                <div className="form__input-box">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Last Name"
                />
                <FaUser className="form__icon" />
                </div>

                <div className="form__input-box">
                <input
                    className="form__input"
                    type="text"
                    placeholder="Email"
                />
                <MdEmail className="form__icon" />
                </div>
            
                <div className="form__input-box">
                <input
                    className="form__input"
                    type="password"
                    placeholder="Password"
                />
                <FaLock className="form__icon" />
                </div>

                <button onClick={toLogin} className="form__button" type="submit">
                 Sign Up
                </button>
            </div>
        </div>
            
    );
}

export default SignUp;


