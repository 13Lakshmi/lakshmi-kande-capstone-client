import "./Login.scss";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const toSignUp = (event) =>{
        event.preventDefault();
        navigate("/Signup");
    }
  return (
    <div className="form">

      <div className="form__login">
        <h1 className="form__login-title">Login</h1>

       
          <input
            className="form__input"
            type="email"
            placeholder="Username"
            id="email"
            name="email"
          />
          <FaUser className="form__icon" />
        

        
          <input
            className="form__input"
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <FaLock className="form__icon1" />
       

        <button className="form__button" type="submit">
          Log In
        </button>
      </div>

      <div className="form__link">
        <p onClick={toSignUp}>
          Don't have an account? <a href=" ">  Signup </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
